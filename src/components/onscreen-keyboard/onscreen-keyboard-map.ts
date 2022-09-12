export interface mappedKey {
  label: [string] | [string,string],
  classname: string,
  code: string,
  key: [string,string]
}

export const keyboardMap: mappedKey[][][] = [
  [
    [
      { label: ['esc'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-2', code: 'Escape', key: ['Escape', 'Escape']},
      { label: ['F1'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'F1', key: ['F1', 'F1']},
      { label: ['F2'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'F2', key: ['F2', 'F2']},
      { label: ['F3'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'F3', key: ['F3', 'F3']},
      { label: ['F4'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'F4', key: ['F4', 'F4']},
      { label: ['F5'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'F5', key: ['F5', 'F5']},
      { label: ['F6'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'F6', key: ['F6', 'F6']},
      { label: ['F7'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'F7', key: ['F7', 'F7']},
      { label: ['F8'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'F8', key: ['F8', 'F8']},
      { label: ['F9'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'F9', key: ['F9', 'F9']},
      { label: ['F10'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'F10', key: ['F10', 'F10']},
      { label: ['F11'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'F11', key: ['F11', 'F11']},
      { label: ['F12'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'F12', key: ['F12', 'F12']},
      { label: ['⏏︎'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'Eject', key: ['Eject', 'Eject']}
    ],
    [
      { label: ['~', '`'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'Backquote', key: ['`', '~'] },
      { label: ['!', '1'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'Digit1', key: ['1', '!'] },
      { label: ['@', '2'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'Digit2', key: ['2', '@'] },
      { label: ['#', '3'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'Digit3', key: ['3', '#'] },
      { label: ['$', '4'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'Digit4', key: ['4', '$'] },
      { label: ['%', '5'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'Digit5', key: ['5', '%'] },
      { label: ['^', '6'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'Digit6', key: ['6', '^'] },
      { label: ['&', '7'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'Digit7', key: ['7', '&'] },
      { label: ['*', '8'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'Digit8', key: ['8', '*'] },
      { label: ['(', '9'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'Digit9', key: ['9', '('] },
      { label: [')', '0'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'Digit0', key: ['0', ')'] },
      { label: ['_', '-'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'Minus', key: ['-', '_'] },
      { label: ['+', '='], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'Equal', key: ['=', '+'] },
      { label: ['delete'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-2', code: 'Backspace', key: ['Backspace', 'Backspace'] }
    ],
    [
      { label: ['tab'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-2', code: 'Tab', key: ['Tab', 'Tab']},                        // ?
      { label: ['Q'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'KeyQ', key: ['q', 'Q']},
      { label: ['W'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'KeyW', key: ['w', 'W']},
      { label: ['E'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'KeyE', key: ['e', 'E']},
      { label: ['R'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'KeyR', key: ['r', 'R']},
      { label: ['T'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'KeyT', key: ['t', 'T']},
      { label: ['Y'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'KeyY', key: ['y', 'Y']},
      { label: ['U'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'KeyU', key: ['u', 'U']},
      { label: ['I'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'KeyI', key: ['i', 'I']},
      { label: ['O'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'KeyO', key: ['o', 'O']},
      { label: ['P'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'KeyP', key: ['p', 'P']},
      { label: ['{', '['], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'BracketLeft', key: ['[', '{']},
      { label: ['}', ']'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'BracketRight', key: [']', '}']},
      { label: ['|', '\\'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'Backslash', key: ['\u005C', '|']}              // ?
    ],
    [
      { label: ['caps lock'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-3', code: 'CapsLock', key: ['CapsLock', 'CapsLock']},
      { label: ['A'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'KeyA', key: ['a', 'A']},
      { label: ['S'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'KeyS', key: ['s', 'S']},
      { label: ['D'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'KeyD', key: ['d', 'D']},
      { label: ['F'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'KeyF', key: ['f', 'F']},
      { label: ['G'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'KeyG', key: ['g', 'G']},
      { label: ['H'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'KeyH', key: ['h', 'H']},
      { label: ['J'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'KeyJ', key: ['j', 'J']},
      { label: ['K'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'KeyK', key: ['k', 'K']},
      { label: ['L'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'KeyL', key: ['l', 'L']},
      { label: [':', ';'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'Semicolon', key: [';', ':']},
      { label: ['"', "'"], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'Quote', key: ["'", '"']},                       // ?
      { label: ['return'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-3', code: 'Enter', key: ['Enter', 'Enter']}
    ],
    [
      { label: ['shift'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-4', code: 'ShiftLeft', key: ['Shift', 'Shift']},
      { label: ['Z'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'KeyZ', key: ['z', 'Z']},
      { label: ['X'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'KeyX', key: ['x', 'x']},
      { label: ['C'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'KeyC', key: ['c', 'c']},
      { label: ['V'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'KeyV', key: ['v', 'V']},
      { label: ['B'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'KeyB', key: ['b', 'B']},
      { label: ['N'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'KeyN', key: ['n', 'N']},
      { label: ['M'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'KeyM', key: ['m', 'M']},
      { label: ['<', ','], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'Comma', key: [',', '<']},
      { label: ['>', '.'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'Period', key: ['.', '>']},
      { label: ['?', '/'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1', code: 'Slash', key: ['/', '?']},
      { label: ['shift'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-4', code: 'ShiftRight', key: ['Shift', 'Shift']}
    ],
    [
      { label: ['⌃', 'control'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-2', code: 'ControlLeft', key: ['Control', 'Control'] },
      { label: ['⌥', 'option'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1-5', code: 'AltLeft', key: ['Alt', 'Alt'] },
      { label: ['⌘', 'command'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-2', code: 'OSLeft', key: ['Meta', 'Meta'] },
      { label: ['space'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-5', code: 'Space', key: [' ', '   '] },
      { label: ['⌘', 'command'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-2', code: 'OSRight', key: ['Meta', 'Meta'] },
      { label: ['⌥', 'option'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-1-5', code: 'AltRight', key: ['Alt', 'Alt'] },
      { label: ['^', 'control'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-1-width-2', code: 'ControlRight', key: ['Control', 'Control'] }
    ]
  ],
  [
    [
      { label: ['F13'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-2-width-1', code: 'F13', key: ['F13', 'F13']},
      { label: ['F14'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-2-width-1', code: 'F14', key: ['F14', 'F14']},
      { label: ['F15'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-2-width-1', code: 'F15', key: ['F15', 'F15']}
    ],
    [
      { label: ['fn'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-2-width-1', code: 'fn', key: ['fn', 'fn']},                    // ?
      { label: ['home'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-2-width-1', code: 'Home', key: ['Home', 'Home']},
      { label: ['page up'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-2-width-1', code: 'PageUp', key: ['PageUp', 'PageUp']}
    ],
    [
      { label: ['⌦', 'delete'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-2-width-1', code: 'Delete', key: ['Delete', 'Delete']},
      { label: ['end'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-2-width-1', code: 'End', key: ['End', 'End']},
      { label: ['page down'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-2-width-1', code: 'PageDown', key: ['PageDown', 'PageDown']}
    ],
    [],
    [
      { label: [''], classname: 'onscreen-keyboard-key-spacer onscreen-keyboard-key-2-width-1', code: '', key: ['', ''] },
      { label: ['↑'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-2-width-1', code: 'ArrowUp', key: ['ArrowUp', 'ArrowUp'] },
      { label: [''], classname: 'onscreen-keyboard-key-spacer onscreen-keyboard-key-2-width-1', code: '', key: ['', ''] }
    ],
    [
      { label: ['←'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-2-width-1', code: 'ArrowLeft', key: ['ArrowLeft', 'ArrowLeft'] },
      { label: ['↓'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-2-width-1', code: 'ArrowDown', key: ['ArrowDown', 'ArrowDown'] },
      { label: ['→'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-2-width-1', code: 'ArrowRight', key: ['ArrowRight', 'ArrowRight'] }
    ]
  ],
  [
    [
      { label: ['F16'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-3-width-1', code: 'F16', key: ['F16', 'F16']},
      { label: ['F17'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-3-width-1', code: 'F17', key: ['F17', 'F17']},
      { label: ['F18'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-3-width-1', code: 'F18', key: ['F18', 'F18']},
      { label: ['F19'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-3-width-1', code: 'F19', key: ['F19', 'F19']}
    ],
    [
      { label: ['clear'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-3-width-1', code: 'NumLock', key: ['Clear', 'Clear']},
      { label: ['='], classname: 'onscreen-keyboard-key onscreen-keyboard-key-3-width-1', code: 'NumpadEqual', key: ['=', '=']},
      { label: ['/'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-3-width-1', code: 'NumpadDivide', key: ['/', '/']},
      { label: ['*'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-3-width-1', code: 'NumpadMultiply', key: ['*', '*']}
    ],
    [
      { label: ['7'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-3-width-1', code: 'Numpad7', key: ['7', '7']},
      { label: ['8'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-3-width-1', code: 'Numpad8', key: ['8', '8']},
      { label: ['9'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-3-width-1', code: 'Numpad9', key: ['9', '9']},
      { label: ['-'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-3-width-1', code: 'NumpadSubtract', key: ['-', '-']}
    ],
    [
      { label: ['4'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-3-width-1', code: 'Numpad4', key: ['4', '4']},
      { label: ['5'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-3-width-1', code: 'Numpad5', key: ['5', '5']},
      { label: ['6'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-3-width-1', code: 'Numpad6', key: ['6', '6']},
      { label: ['+'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-3-width-1', code: 'NumpadAdd', key: ['+', '+']}
    ],
    [
      { label: ['1'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-3-width-1', code: 'Numpad1', key: ['1', '1']},
      { label: ['2'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-3-width-1', code: 'Numpad2', key: ['2', '2']},
      { label: ['3'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-3-width-1', code: 'Numpad3', key: ['3', '3']},
      { label: ['enter'], classname: 'onscreen-keyboard-enter-key onscreen-keyboard-key-3-width-1', code: 'NumpadEnter', key: ['Enter', 'Emter']}
    ],
    [
      { label: ['0'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-3-width-2', code: 'Numpad0', key: ['0', '0']},
      { label: ['.'], classname: 'onscreen-keyboard-key onscreen-keyboard-key-3-width-1', code: 'NumpadDecimal', key: ['.', '.']},
    ]
  ]
]