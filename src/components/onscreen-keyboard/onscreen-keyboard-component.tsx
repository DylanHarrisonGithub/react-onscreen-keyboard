import React, { useEffect, useState } from 'react';
import './onscreen-keyboard-component.style.css';

const OnscreenKeyboardComponent: React.FC<any> = (props) => {

  const [initialized, setInitialized] = useState<boolean>(false);
  const [keypresses, setKeypresses] = useState<{code: string, key: string}[]>([]);

  useEffect(() => {
    if (!initialized) {
      setInitialized(true);
      document.addEventListener('keydown', (ev: KeyboardEvent) => setKeypresses(keys => keys.filter(key => (key.code === ev.code && key.key === ev.key)).length ? keys : [...keys, {code: ev.code, key: ev.key }]));
      document.addEventListener('keyup', (ev: KeyboardEvent) => setKeypresses(keypresses => keypresses.filter(key => !(key.code === ev.code))));
      document.addEventListener('blur', () => setKeypresses([]));
      console.log('hi');
    }
  }, [])

  return (
    <div style={{height: '500px', padding: '5px'}}>
      <h1>onscreen-keyboard-component</h1>
      { JSON.stringify(keypresses) }
      <div style={{margin: '0', padding: '0', position: 'relative', width: '100%', height: '100%'}}>
        {/* <img src="/applekeyboard-transformed.png" style={{maxWidth: '100%', maxHeight: '100%', position: 'absolute'}}></img> */}
        {/* <div style={{maxWidth: '100%', paddingBottom: '27.5%', margin: '0', padding: '0', position: 'relative', zIndex: '1'}}> */}
        <div className='onscreen-keyboard'>
          <div className='onscreen-keyboard-col onscreen-keyboard-col-1'>
            
            <div className="onscreen-keyboard-col-content onscreen-keyboard-col-1-content-right">
              
              <div className="onscreen-keyboard-row">
              
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-2 ${keypresses.filter(press => press.code === 'Escape').length ? 'onscreen-keyboard-key-pressed' : ''}`}>
                  <span className='onscreen-keyboard-key-content-centered'>esc</span>
                </div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'F1').length ? 'onscreen-keyboard-key-pressed' : ''}`}>
                  <span className='onscreen-keyboard-key-content-centered'>F1</span>
                </div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'F2').length ? 'onscreen-keyboard-key-pressed' : ''}`}>
                  <span className='onscreen-keyboard-key-content-centered'>F2</span>
                </div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'F3').length ? 'onscreen-keyboard-key-pressed' : ''}`}>
                  <span className='onscreen-keyboard-key-content-centered'>F3</span>
                </div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'F4').length ? 'onscreen-keyboard-key-pressed' : ''}`}>
                  <span className='onscreen-keyboard-key-content-centered'>F4</span>
                </div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'F5').length ? 'onscreen-keyboard-key-pressed' : ''}`}>                  
                  <span className='onscreen-keyboard-key-content-centered'>F5</span>
                </div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'F6').length ? 'onscreen-keyboard-key-pressed' : ''}`}>                  
                  <span className='onscreen-keyboard-key-content-centered'>F6</span>
                </div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'F7').length ? 'onscreen-keyboard-key-pressed' : ''}`}>                  
                  <span className='onscreen-keyboard-key-content-centered'>F7</span>
                </div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'F8').length ? 'onscreen-keyboard-key-pressed' : ''}`}>                  
                  <span className='onscreen-keyboard-key-content-centered'>F8</span>
                </div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'F9').length ? 'onscreen-keyboard-key-pressed' : ''}`}>                  
                  <span className='onscreen-keyboard-key-content-centered'>F9</span>
                </div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'F10').length ? 'onscreen-keyboard-key-pressed' : ''}`}>                  
                  <span className='onscreen-keyboard-key-content-centered'>F10</span>
                </div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'F11').length ? 'onscreen-keyboard-key-pressed' : ''}`}>                  
                  <span className='onscreen-keyboard-key-content-centered'>F11</span>
                </div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'F12').length ? 'onscreen-keyboard-key-pressed' : ''}`}>                  
                  <span className='onscreen-keyboard-key-content-centered'>F12</span>
                </div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'EJECT').length ? 'onscreen-keyboard-key-pressed' : ''}`}>                  
                  <span className='onscreen-keyboard-key-content-centered'>⏏︎</span>
                </div>
                
              </div>
              <div className="onscreen-keyboard-row">
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'Backquote').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>~<br/>`</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'Digit1').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>!<br/>1</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'Digit2').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>@<br/>2</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'Digit3').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>#<br/>3</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'Digit4').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>$<br/>4</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'Digit5').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>%<br/>5</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'Digit6').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>^<br/>6</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'Digit7').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>&<br/>7</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'Digit8').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>*<br/>8</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'Digit9').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>(<br/>9</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'Digit0').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>)<br/>0</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'Minus').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>_<br/>-</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'Equal').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>+<br/>=</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-2 ${keypresses.filter(press => press.code === 'Backspace').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>delete</span></div>
              </div>
              <div className="onscreen-keyboard-row">

                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-2 ${keypresses.filter(press => press.code === 'Tab').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>tab</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'KeyQ').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>Q</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'KeyW').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>W</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'KeyE').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>E</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'KeyR').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>R</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'KeyT').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>T</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'KeyY').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>Y</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'KeyU').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>U</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'KeyI').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>I</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'KeyO').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>O</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'KeyP').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>P</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'BracketLeft').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>&#123;<br/>[</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'BracketRight').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>&#125;<br/>]</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'Backslash').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>|<br/>\</span></div>

              </div>
              <div className="onscreen-keyboard-row">

                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-3 ${keypresses.filter(press => press.code === 'CapsLock').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>caps lock</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'KeyA').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>A</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'KeyS').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>S</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'KeyD').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>D</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'KeyF').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>F</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'KeyG').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>G</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'KeyH').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>H</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'KeyJ').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>J</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'KeyK').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>K</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'KeyL').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>L</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'Semicolon').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>:<br/>;</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'Quote').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>"<br/>'</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-3 ${keypresses.filter(press => press.code === 'Enter').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>return</span></div>

              </div>
              <div className="onscreen-keyboard-row">

                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-4 ${keypresses.filter(press => press.code === 'ShiftLeft').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>shift</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'KeyZ').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>Z</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'KeyX').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>X</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'KeyC').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>C</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'KeyV').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>V</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'KeyB').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>B</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'KeyN').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>N</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'KeyM').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>M</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'Comma').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>&lt;<br/>,</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'Period').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>&gt;<br/>.</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1 ${keypresses.filter(press => press.code === 'Slash').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>?<br/>/</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-4 ${keypresses.filter(press => press.code === 'ShiftRight').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>shift</span></div>

              </div>
              <div className="onscreen-keyboard-row">

                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-2   ${keypresses.filter(press => press.code === 'ControlLeft').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>⌃<br/>control</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1-5 ${keypresses.filter(press => press.code === 'AltLeft').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>⌥<br/>option</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-2   ${keypresses.filter(press => press.code === 'OSLeft').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>⌘<br/>command</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-5   ${keypresses.filter(press => press.code === 'Space').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>space</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-2   ${keypresses.filter(press => press.code === 'OSRight').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>⌘<br/>command</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-1-5 ${keypresses.filter(press => press.code === 'AltRight').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>⌥<br/>option</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-1-width-2   ${keypresses.filter(press => press.code === 'ControlRight').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>⌃<br/>control</span></div>

              </div>
            </div>
          </div>
          <div className='onscreen-keyboard-col onscreen-keyboard-col-2'>
            <div className="onscreen-keyboard-col-content onscreen-keyboard-col-2-content-right">
              
              <div className="onscreen-keyboard-row">
                
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-2-width-1 ${keypresses.filter(press => press.code === 'F13').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>F13</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-2-width-1 ${keypresses.filter(press => press.code === 'F14').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>F14</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-2-width-1 ${keypresses.filter(press => press.code === 'F15').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>F15</span></div>

              </div>
              <div className="onscreen-keyboard-row">

                <div className={`onscreen-keyboard-key onscreen-keyboard-key-2-width-1 ${keypresses.filter(press => press.code === 'Fn').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>fn</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-2-width-1 ${keypresses.filter(press => press.code === 'Home').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>home</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-2-width-1 ${keypresses.filter(press => press.code === 'PageUp').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>page up</span></div>

              </div>
              <div className="onscreen-keyboard-row">

                <div className={`onscreen-keyboard-key onscreen-keyboard-key-2-width-1 ${keypresses.filter(press => press.code === 'Delete').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>⌦<br/>delete</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-2-width-1 ${keypresses.filter(press => press.code === 'End').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>end</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-2-width-1 ${keypresses.filter(press => press.code === 'PageDown').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>page down</span></div>

              </div>

              <div className="onscreen-keyboard-row"></div>
              
              <div className="onscreen-keyboard-row">

                <div className="onscreen-keyboard-key-spacer onscreen-keyboard-key-2-width-1"></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-2-width-1 ${keypresses.filter(press => press.code === 'ArrowUp').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>↑</span></div>
                <div className="onscreen-keyboard-key-spacer onscreen-keyboard-key-2-width-1"></div>

              </div>
              <div className="onscreen-keyboard-row">

                <div className={`onscreen-keyboard-key onscreen-keyboard-key-2-width-1 ${keypresses.filter(press => press.code === 'ArrowLeft').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>←</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-2-width-1 ${keypresses.filter(press => press.code === 'ArrowDown').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>↓</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-2-width-1 ${keypresses.filter(press => press.code === 'ArrowRight').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>→</span></div>

              </div>
            </div>
          </div>

          <div className='onscreen-keyboard-col onscreen-keyboard-col-3'>
            <div className="onscreen-keyboard-col-content onscreen-keyboard-col-3-content-right">
              
              <div className="onscreen-keyboard-row">

                <div className={`onscreen-keyboard-key onscreen-keyboard-key-3-width-1 ${keypresses.filter(press => press.code === 'F16').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>F16</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-3-width-1 ${keypresses.filter(press => press.code === 'F17').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>F17</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-3-width-1 ${keypresses.filter(press => press.code === 'F18').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>F18</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-3-width-1 ${keypresses.filter(press => press.code === 'F19').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>F19</span></div>

              </div>
              <div className="onscreen-keyboard-row">

                <div className={`onscreen-keyboard-key onscreen-keyboard-key-3-width-1 ${keypresses.filter(press => press.code === 'NumLock').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>clear</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-3-width-1 ${keypresses.filter(press => press.code === 'NumpadEqual').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>=</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-3-width-1 ${keypresses.filter(press => press.code === 'NumpadDivide').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>/</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-3-width-1 ${keypresses.filter(press => press.code === 'NumpadMultiply').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>*</span></div>

              </div>
              <div className="onscreen-keyboard-row">

                <div className={`onscreen-keyboard-key onscreen-keyboard-key-3-width-1 ${keypresses.filter(press => press.code === 'Numpad7').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>7</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-3-width-1 ${keypresses.filter(press => press.code === 'Numpad8').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>8</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-3-width-1 ${keypresses.filter(press => press.code === 'Numpad9').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>9</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-3-width-1 ${keypresses.filter(press => press.code === 'NumpadSubtract').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>-</span></div>

              </div>
              <div className="onscreen-keyboard-row">

                <div className={`onscreen-keyboard-key onscreen-keyboard-key-3-width-1 ${keypresses.filter(press => press.code === 'Numpad4').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>4</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-3-width-1 ${keypresses.filter(press => press.code === 'Numpad5').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>5</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-3-width-1 ${keypresses.filter(press => press.code === 'Numpad6').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>6</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-3-width-1 ${keypresses.filter(press => press.code === 'NumpadAdd').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>+</span></div>

              </div>
              <div className="onscreen-keyboard-row">

                <div className={`onscreen-keyboard-key onscreen-keyboard-key-3-width-1 ${keypresses.filter(press => press.code === 'Numpad1').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>1</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-3-width-1 ${keypresses.filter(press => press.code === 'Numpad2').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>2</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-3-width-1 ${keypresses.filter(press => press.code === 'Numpad3').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>3</span></div>
                <div className={`onscreen-keyboard-enter-key onscreen-keyboard-key-3-width-1 ${keypresses.filter(press => press.code === 'NumpadEnter').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>enter</span></div>

              </div>
              <div className="onscreen-keyboard-row">

                <div className={`onscreen-keyboard-key onscreen-keyboard-key-3-width-2 ${keypresses.filter(press => press.code === 'Numpad0').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>0</span></div>
                <div className={`onscreen-keyboard-key onscreen-keyboard-key-3-width-1 ${keypresses.filter(press => press.code === 'NumpadDecimal').length ? 'onscreen-keyboard-key-pressed' : ''}`}><span className='onscreen-keyboard-key-content-centered'>.</span></div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default OnscreenKeyboardComponent;