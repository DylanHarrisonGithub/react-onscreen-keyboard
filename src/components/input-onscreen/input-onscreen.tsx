import React, { useState } from 'react';
import OnscreenKeyboardComponent from '../onscreen-keyboard/onscreen-keyboard-component';
import './input-onscreen-style.css';

export const InputOnscreenComponent: React.FC<any> = (props) => {

  const [showKeyboard, setShowKeyboard] = React.useState<boolean>(false);
  const [input, setInput] = React.useState<string>('');

  const oninput = (e: React.FormEvent<HTMLInputElement>) => setInput(e.currentTarget.value);

  return (
    <div style={{margin: '0 auto'}}>
      <span className={`input-onscreen-container`}>
        <input className={'input-onscreen-input'} type="text" value={input}></input>
        <button className={'input-onscreen-keyboard-button'} onClick={() => setShowKeyboard(show => !show)}>
          <img className={'input-onscreen-icon'} src={"/keyboard-icon.png"}></img>
        </button>
      </span>
      <br/>
      {
        showKeyboard && 
          <div className={'onscreen-keyboard-wrapper'}>
            {/* setInput(value => value + keydowns.reduce((keys, key) => keys + key.key, '')) */}
            <OnscreenKeyboardComponent callback={(keydowns) => setInput(value => value + keydowns.reduce((keys, key) => keys + key.key, ''))}/>
          </div>
      }
    </div>
  );
}