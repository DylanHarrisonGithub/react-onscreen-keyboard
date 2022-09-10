import React from 'react';
import OnscreenKeyboardComponent from './components/onscreen-keyboard/onscreen-keyboard-component';
import logo from './logo.svg';

function App() {

  const [presses, setPresses] = React.useState<{ code: string, key: string }[]>([]);
  const keyboardCallback = (keydowns: { code: string, key: string }[], keyups: { code: string, key: string }[], keypresses: { code: string, key: string }[]) => {
    console.log(`keydowns: ${JSON.stringify(keydowns)}`);
    console.log(`keyups: ${JSON.stringify(keyups)}`);
    console.log(`keybuffer: ${JSON.stringify(keypresses)}`);
    console.log('');
  }

  React.useEffect(() => {
    setTimeout(() => {
      setPresses([
        { code: 'KeyQ', key: 'q' },
        { code: 'KeyW', key: 'w' },
        { code: 'KeyE', key: 'e' },
        { code: 'KeyR', key: 'r' },
        { code: 'KeyT', key: 't' },
      ]);
      setTimeout(() => {
        setPresses([
          { code: 'KeyQ', key: 'q' },
          { code: 'KeyS', key: 's' },
          { code: 'KeyE', key: 'e' },
          { code: 'KeyF', key: 'f' },
          { code: 'KeyT', key: 't' },
        ]);
      }, 5000)
    }, 5000);
  }, [])

  return (
    <div>
      <OnscreenKeyboardComponent 
        presses={presses}  
        callback={keyboardCallback}
      />
    </div>
  );
}

export default App;
