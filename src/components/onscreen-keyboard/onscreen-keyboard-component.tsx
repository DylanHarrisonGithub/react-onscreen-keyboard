import React, { useEffect, useState } from 'react';
import { mappedKey, keyboardMap } from './onscreen-keyboard-map';
import './onscreen-keyboard-component.style.css';

const OnscreenKeyboardComponent: React.FC<{disabled?: string[], enabled?: string[], highlighted?: string[], subs?: (key: string) => void}> = ({disabled, enabled, highlighted, subs}) => {

  const [keypresses, setKeypresses] = useState<{code: string, key: string}[]>([]);

  useEffect(() => {
      document.addEventListener('keydown', (ev: KeyboardEvent) => {
        subs?.(ev.key);
        setKeypresses(keys => keys.filter(key => (key.code === ev.code && key.key === ev.key)).length ? keys : [...keys, {code: ev.code, key: ev.key }]);
      });
      document.addEventListener('keyup', (ev: KeyboardEvent) => {
        setKeypresses(keypresses => keypresses.filter(key => !(key.code === ev.code)));
      });
      document.addEventListener('blur', () => setKeypresses([]));
      console.log('hi');
  }, []);

  const dispatchKeydown = (code: string, key: string) => {
    document.dispatchEvent(new KeyboardEvent("keydown", {code: code, key: key}));
  }
  const dispatchKeyup = (code: string, key: string) => {
    document.dispatchEvent(new KeyboardEvent("keyup", {code: code, key: key}));
  }

  const shiftDown: () => boolean = () => !!(keypresses.filter(key => (key.code === 'ShiftLeft' || key.code === 'ShiftRight')).length) 

  return (
    <div style={{height: '500px', padding: '5px'}}>
      <h1>onscreen-keyboard-component</h1>
      { JSON.stringify(keypresses) }
      <div style={{margin: '0', padding: '0', position: 'relative', width: '100%', height: '100%'}}>
        {/* <img src="/applekeyboard-transformed.png" style={{maxWidth: '100%', maxHeight: '100%', position: 'absolute'}}></img> */}
        {/* <div style={{maxWidth: '100%', paddingBottom: '27.5%', margin: '0', padding: '0', position: 'relative', zIndex: '1'}}> */}
        <div className='onscreen-keyboard'>

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
                            onPointerDown={() => dispatchKeydown(k.code, k.key[shiftDown() ? 1 : 0])}
                            onPointerUp={() => dispatchKeyup(k.code, k.key[shiftDown() ? 1 : 0])}  
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
    </div>
  )
}
export default OnscreenKeyboardComponent;