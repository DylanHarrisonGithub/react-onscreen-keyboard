import React from 'react';
import './onscreen-keyboard-component.style.css';

const OnscreenKeyboardComponent: React.FC<any> = (props) => {
  return (
    <div style={{height: '500px', padding: '5px'}}>
      <h1>onscreen-keyboard-component</h1>
      <div style={{margin: '0', padding: '0', position: 'relative', width: '100%', height: '100%'}}>
        {/* <img src="/applekeyboard-transformed.png" style={{maxWidth: '100%', maxHeight: '100%', position: 'absolute'}}></img> */}
        {/* <div style={{maxWidth: '100%', paddingBottom: '27.5%', margin: '0', padding: '0', position: 'relative', zIndex: '1'}}> */}
        <div className='onscreen-keyboard'>
          <div className='onscreen-keyboard-col onscreen-keyboard-col-1'>
            
            <div className="onscreen-keyboard-col-content onscreen-keyboard-col-1-content-right">
              
              <div className="onscreen-keyboard-row">
              
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-2">
                  <span className='onscreen-keyboard-key-content-centered'>esc</span>
                </div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1">
                  <span className='onscreen-keyboard-key-content-centered'>F1</span>
                </div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1">
                  <span className='onscreen-keyboard-key-content-centered'>F2</span>
                </div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1">
                  <span className='onscreen-keyboard-key-content-centered'>F3</span>
                </div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1">
                  <span className='onscreen-keyboard-key-content-centered'>F4</span>
                </div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1">                  
                  <span className='onscreen-keyboard-key-content-centered'>F5</span>
                </div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1">                  
                  <span className='onscreen-keyboard-key-content-centered'>F6</span>
                </div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1">                  
                  <span className='onscreen-keyboard-key-content-centered'>F7</span>
                </div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1">                  
                  <span className='onscreen-keyboard-key-content-centered'>F8</span>
                </div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1">                  
                  <span className='onscreen-keyboard-key-content-centered'>F9</span>
                </div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1">                  
                  <span className='onscreen-keyboard-key-content-centered'>F10</span>
                </div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1">                  
                  <span className='onscreen-keyboard-key-content-centered'>F11</span>
                </div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1">                  
                  <span className='onscreen-keyboard-key-content-centered'>F12</span>
                </div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1">                  
                  <span className='onscreen-keyboard-key-content-centered'>⏏︎</span>
                </div>
                
              </div>
              <div className="onscreen-keyboard-row">
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1"><span className='onscreen-keyboard-key-content-centered'>~<br/>`</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1"><span className='onscreen-keyboard-key-content-centered'>!<br/>1</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1"><span className='onscreen-keyboard-key-content-centered'>@<br/>2</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1"><span className='onscreen-keyboard-key-content-centered'>#<br/>3</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1"><span className='onscreen-keyboard-key-content-centered'>$<br/>4</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1"><span className='onscreen-keyboard-key-content-centered'>%<br/>5</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1"><span className='onscreen-keyboard-key-content-centered'>^<br/>6</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1"><span className='onscreen-keyboard-key-content-centered'>&<br/>7</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1"><span className='onscreen-keyboard-key-content-centered'>*<br/>8</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1"><span className='onscreen-keyboard-key-content-centered'>(<br/>9</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1"><span className='onscreen-keyboard-key-content-centered'>)<br/>0</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1"><span className='onscreen-keyboard-key-content-centered'>_<br/>-</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1"><span className='onscreen-keyboard-key-content-centered'>+<br/>=</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-2"><span className='onscreen-keyboard-key-content-centered'>delete</span></div>
              </div>
              <div className="onscreen-keyboard-row">

                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-2"><span className='onscreen-keyboard-key-content-centered'>tab</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1"><span className='onscreen-keyboard-key-content-centered'>Q</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1"><span className='onscreen-keyboard-key-content-centered'>W</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1"><span className='onscreen-keyboard-key-content-centered'>E</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1"><span className='onscreen-keyboard-key-content-centered'>R</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1"><span className='onscreen-keyboard-key-content-centered'>T</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1"><span className='onscreen-keyboard-key-content-centered'>Y</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1"><span className='onscreen-keyboard-key-content-centered'>U</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1"><span className='onscreen-keyboard-key-content-centered'>I</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1"><span className='onscreen-keyboard-key-content-centered'>O</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1"><span className='onscreen-keyboard-key-content-centered'>P</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1"><span className='onscreen-keyboard-key-content-centered'>&#123;<br/>[</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1"><span className='onscreen-keyboard-key-content-centered'>&#125;<br/>]</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1"><span className='onscreen-keyboard-key-content-centered'>|<br/>\</span></div>

              </div>
              <div className="onscreen-keyboard-row">

                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-3"><span className='onscreen-keyboard-key-content-centered'>caps lock</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1"><span className='onscreen-keyboard-key-content-centered'>A</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1"><span className='onscreen-keyboard-key-content-centered'>S</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1"><span className='onscreen-keyboard-key-content-centered'>D</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1"><span className='onscreen-keyboard-key-content-centered'>F</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1"><span className='onscreen-keyboard-key-content-centered'>G</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1"><span className='onscreen-keyboard-key-content-centered'>H</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1"><span className='onscreen-keyboard-key-content-centered'>J</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1"><span className='onscreen-keyboard-key-content-centered'>K</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1"><span className='onscreen-keyboard-key-content-centered'>L</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1"><span className='onscreen-keyboard-key-content-centered'>:<br/>;</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1"><span className='onscreen-keyboard-key-content-centered'>"<br/>'</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-3"><span className='onscreen-keyboard-key-content-centered'>return</span></div>

              </div>
              <div className="onscreen-keyboard-row">

                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-4"><span className='onscreen-keyboard-key-content-centered'>shift</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1"><span className='onscreen-keyboard-key-content-centered'>Z</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1"><span className='onscreen-keyboard-key-content-centered'>X</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1"><span className='onscreen-keyboard-key-content-centered'>C</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1"><span className='onscreen-keyboard-key-content-centered'>V</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1"><span className='onscreen-keyboard-key-content-centered'>B</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1"><span className='onscreen-keyboard-key-content-centered'>N</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1"><span className='onscreen-keyboard-key-content-centered'>M</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1"><span className='onscreen-keyboard-key-content-centered'>&lt;<br/>,</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1"><span className='onscreen-keyboard-key-content-centered'>&gt;<br/>.</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1"><span className='onscreen-keyboard-key-content-centered'>?<br/>/</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-4"><span className='onscreen-keyboard-key-content-centered'>shift</span></div>

              </div>
              <div className="onscreen-keyboard-row">

                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-2"><span className='onscreen-keyboard-key-content-centered'>⌃<br/>control</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1-5"><span className='onscreen-keyboard-key-content-centered'>⌥<br/>option</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-2"><span className='onscreen-keyboard-key-content-centered'>⌘<br/>command</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-5"><span className='onscreen-keyboard-key-content-centered'>space</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-2"><span className='onscreen-keyboard-key-content-centered'>⌘<br/>command</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-1-5"><span className='onscreen-keyboard-key-content-centered'>⌥<br/>option</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-1-width-2"><span className='onscreen-keyboard-key-content-centered'>⌃<br/>control</span></div>

              </div>
            </div>
          </div>
          <div className='onscreen-keyboard-col onscreen-keyboard-col-2'>
            <div className="onscreen-keyboard-col-content onscreen-keyboard-col-2-content-right">
              
              <div className="onscreen-keyboard-row">
                
                <div className="onscreen-keyboard-key onscreen-keyboard-key-2-width-1"><span className='onscreen-keyboard-key-content-centered'>F13</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-2-width-1"><span className='onscreen-keyboard-key-content-centered'>F14</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-2-width-1"><span className='onscreen-keyboard-key-content-centered'>F15</span></div>

              </div>
              <div className="onscreen-keyboard-row">

                <div className="onscreen-keyboard-key onscreen-keyboard-key-2-width-1"><span className='onscreen-keyboard-key-content-centered'>fn</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-2-width-1"><span className='onscreen-keyboard-key-content-centered'>home</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-2-width-1"><span className='onscreen-keyboard-key-content-centered'>page up</span></div>

              </div>
              <div className="onscreen-keyboard-row">

                <div className="onscreen-keyboard-key onscreen-keyboard-key-2-width-1"><span className='onscreen-keyboard-key-content-centered'>⌦<br/>delete</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-2-width-1"><span className='onscreen-keyboard-key-content-centered'>end</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-2-width-1"><span className='onscreen-keyboard-key-content-centered'>page down</span></div>

              </div>

              <div className="onscreen-keyboard-row"></div>
              
              <div className="onscreen-keyboard-row">

                <div className="onscreen-keyboard-key-spacer onscreen-keyboard-key-2-width-1"></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-2-width-1"><span className='onscreen-keyboard-key-content-centered'>↑</span></div>
                <div className="onscreen-keyboard-key-spacer onscreen-keyboard-key-2-width-1"></div>

              </div>
              <div className="onscreen-keyboard-row">

                <div className="onscreen-keyboard-key onscreen-keyboard-key-2-width-1"><span className='onscreen-keyboard-key-content-centered'>←</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-2-width-1"><span className='onscreen-keyboard-key-content-centered'>↓</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-2-width-1"><span className='onscreen-keyboard-key-content-centered'>→</span></div>

              </div>
            </div>
          </div>

          <div className='onscreen-keyboard-col onscreen-keyboard-col-3'>
            <div className="onscreen-keyboard-col-content onscreen-keyboard-col-3-content-right">
              
              <div className="onscreen-keyboard-row">

                <div className="onscreen-keyboard-key onscreen-keyboard-key-3-width-1"><span className='onscreen-keyboard-key-content-centered'>F16</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-3-width-1"><span className='onscreen-keyboard-key-content-centered'>F17</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-3-width-1"><span className='onscreen-keyboard-key-content-centered'>F18</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-3-width-1"><span className='onscreen-keyboard-key-content-centered'>F19</span></div>

              </div>
              <div className="onscreen-keyboard-row">

                <div className="onscreen-keyboard-key onscreen-keyboard-key-3-width-1"><span className='onscreen-keyboard-key-content-centered'>clear</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-3-width-1"><span className='onscreen-keyboard-key-content-centered'>=</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-3-width-1"><span className='onscreen-keyboard-key-content-centered'>/</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-3-width-1"><span className='onscreen-keyboard-key-content-centered'>*</span></div>

              </div>
              <div className="onscreen-keyboard-row">

                <div className="onscreen-keyboard-key onscreen-keyboard-key-3-width-1"><span className='onscreen-keyboard-key-content-centered'>7</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-3-width-1"><span className='onscreen-keyboard-key-content-centered'>8</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-3-width-1"><span className='onscreen-keyboard-key-content-centered'>9</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-3-width-1"><span className='onscreen-keyboard-key-content-centered'>-</span></div>

              </div>
              <div className="onscreen-keyboard-row">

                <div className="onscreen-keyboard-key onscreen-keyboard-key-3-width-1"><span className='onscreen-keyboard-key-content-centered'>4</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-3-width-1"><span className='onscreen-keyboard-key-content-centered'>5</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-3-width-1"><span className='onscreen-keyboard-key-content-centered'>6</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-3-width-1"><span className='onscreen-keyboard-key-content-centered'>+</span></div>

              </div>
              <div className="onscreen-keyboard-row">

                <div className="onscreen-keyboard-key onscreen-keyboard-key-3-width-1"><span className='onscreen-keyboard-key-content-centered'>1</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-3-width-1"><span className='onscreen-keyboard-key-content-centered'>2</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-3-width-1"><span className='onscreen-keyboard-key-content-centered'>3</span></div>
                <div className="onscreen-keyboard-enter-key onscreen-keyboard-key-3-width-1"><span className='onscreen-keyboard-key-content-centered'>enter</span></div>

              </div>
              <div className="onscreen-keyboard-row">

                <div className="onscreen-keyboard-key onscreen-keyboard-key-3-width-2"><span className='onscreen-keyboard-key-content-centered'>0</span></div>
                <div className="onscreen-keyboard-key onscreen-keyboard-key-3-width-1"><span className='onscreen-keyboard-key-content-centered'>.</span></div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default OnscreenKeyboardComponent;