import React, { useEffect, useState, useRef } from 'react';
import { keyboardMap } from './onscreen-keyboard-map';
import './onscreen-keyboard-component.style.css';

const OnscreenKeyboardComponent: React.FC<{
  disabled?: string[], 
  highlighted?: string[],
  presses?: { code: string, key: string}[],
  callback?: (keydowns: { code: string, key: string }[], keyups: { code: string, key: string }[], keypresses: { code: string, key: string }[]) => void
}> = ({disabled, highlighted, presses, callback}) => {

  // const didMountRef = useRef<boolean>(false);
  const containerDivRef = useRef<HTMLDivElement | null>(null);
  const fontSizeRef = useRef<string>('medium');

  const [keypresses, setKeypresses] = useState<{code: string, key: string}[]>([]);
  const previousKeyPressesRef = useRef<{code: string, key: string}[]>([]);

  const [forceRender, setForceRender] = useState<boolean>(false);

  useEffect(() => {
      const onKeyDown = (ev: KeyboardEvent) => setKeypresses(keys => (keys.some(key => (key.code === ev.code)) || disabled?.includes(ev.code)) ? keys : [...keys, {code: ev.code, key: ev.key }]);
      const onKeyUp = (ev: KeyboardEvent) => setKeypresses(keys => keys.filter(key => !(key.code === ev.code)));
      const onBlur = () => setKeypresses([]);
      const onResize = new ResizeObserver((entries) => {
        let newFontSize = 'medium';
        if (entries[0].target.clientWidth < 1000) {
          newFontSize = 'small';
        }
        if (entries[0].target.clientWidth < 750) {
          newFontSize = 'x-small';
        }
        if (entries[0].target.clientWidth < 600) {
          newFontSize = 'xx-small';
        }
        if (entries[0].target.clientWidth < 500) {
          newFontSize = '6px';
        }

        if (newFontSize !== fontSizeRef.current) {
          fontSizeRef.current = newFontSize;
          setForceRender(fr => !fr);
        }
      });

      onResize.observe(containerDivRef.current!);
      document.addEventListener('keydown', onKeyDown);
      document.addEventListener('keyup', onKeyUp);
      document.addEventListener('blur', onBlur);

      presses?.forEach(press => dispatchKeydown(press.code, press.key));

      // didMountRef.current = true;

      return () => {
        document.removeEventListener('keydown', onKeyDown);
        document.removeEventListener('keyup', onKeyUp);
        document.removeEventListener('blur', onBlur);
        onResize.disconnect();
      }
  }, []);

  useEffect(() => {
    const keydowns = keypresses.filter(keypress => !previousKeyPressesRef.current.some(k => (k.code === keypress.code && k.key === keypress.key)));
    const keyups = previousKeyPressesRef.current.filter(keypress => !keypresses.some(k => (k.code === keypress.code && k.key === keypress.key)));

    previousKeyPressesRef.current = keypresses;
    
    callback?.(keydowns, keyups, keypresses);
  }, [keypresses]);


  useEffect(() => {
    const keydowns = presses?.filter(keypress => !(keypresses.some(k => (k.code === keypress.code && k.key === keypress.key))));
    const keyups = keypresses.filter(keypress => !(presses?.some(k => (k.code === keypress.code && k.key === keypress.key))));

    keydowns?.forEach(keypress => dispatchKeydown(keypress.code, keypress.key));
    keyups?.forEach(keypress => dispatchKeyup(keypress.code, keypress.key));
  }, [presses]);

  const dispatchKeydown = (code: string, key: string) => document.dispatchEvent(new KeyboardEvent("keydown", {code: code, key: key}));
  const dispatchKeyup = (code: string, key: string) => document.dispatchEvent(new KeyboardEvent("keyup", {code: code, key: key}));

  const shiftDown: () => boolean = () => !!(keypresses.filter(key => (key.code === 'ShiftLeft' || key.code === 'ShiftRight')).length); 

  return (
    <div style={{margin: '0', padding: '0', position: 'relative', width: '100%', height: '100%'}}>
      {/* <img src="/applekeyboard-transformed.png" style={{maxWidth: '100%', maxHeight: '100%', position: 'absolute'}}></img> */}
      <div ref={containerDivRef} className='onscreen-keyboard'>

        {
          keyboardMap.map((col, index) => (
            <div className={`onscreen-keyboard-col onscreen-keyboard-col-${index+1}`}>
              <div className={`onscreen-keyboard-col-content onscreen-keyboard-col-${index+1}-content-right`}>
                { col.map(row => (
                  <div className='onscreen-keyboard-row'>
                    {
                      row.map(k => (
                        <div
                          className={ 
                            k.classname 
                            + (keypresses.filter(press => press.code === k.code).length ? ' onscreen-keyboard-key-pressed' : '')
                            + (disabled?.includes(k.code) ? ' onscreen-keyboard-key-disabled' : '')
                            + (highlighted?.includes(k.code) ? ' onscreen-keyboard-key-highlighted' : '')
                          }
                          style={{fontSize: fontSizeRef.current}}
                          onPointerDown={disabled?.includes(k.code) ? undefined : () => dispatchKeydown(k.code, k.key[shiftDown() ? 1 : 0])}
                          onPointerUp={disabled?.includes(k.code) ? undefined : () => dispatchKeyup(k.code, k.key[shiftDown() ? 1 : 0])}  
                        >
                          <span className='onscreen-keyboard-key-content-centered'>
                            { k.label[0] }
                            { k.label.length === 2 && (
                              <span><br/>{k.label[1]}</span>
                            )}
                          </span>
                        </div>
                      ))
                    }
                  </div>
                ))}
              </div>
            </div>
          ))
        }

      </div>
    </div>
  )
}
export default OnscreenKeyboardComponent;