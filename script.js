const textArea = document.querySelector('.textarea');
const buttons = document.querySelectorAll('.button');

const keyboard = {
   'Backquote': '`',
   'Digit1': '1',
   'Digit2': '2',
   'Digit3': '3',
   'Digit4': '4',
   'Digit5': '5',
   'Digit6': '6',
   'Digit7': '7',
   'Digit8': '8',
   'Digit9': '9',
   'Digit0': '0',
   'Minus': '-',
   'Equal': '=',
   'Backspace': 'backspace',
   'Tab': 'tab',
   'KeyQ': 'q',
   'KeyW': 'w',
   'KeyE': 'e',
   'KeyR': 'r',
   'KeyT': 't',
   'KeyY': 'y',
   'KeyU': 'u',
   'KeyI': 'i',
   'KeyO': 'o',
   'KeyP': 'p',
   'BracketLeft': '[',
   'BracketRight': ']',
   'Backslash': "backslash",
   'Delete': 'del',
   'CapsLock': 'capslock',
   'KeyA': 'a',
   'KeyS': 's',
   'KeyD': 'd',
   'KeyF': 'f',
   'KeyG': 'g',
   'KeyH': 'h',
   'KeyJ': 'j',
   'KeyK': 'k',
   'KeyL': 'l',
   'Semicolon': ';',
   'Quote': "quote",
   'Enter': 'enter',
   'ShiftLeft': 'shiftleft',
   'KeyZ': 'z',
   'KeyX': 'x',
   'KeyC': 'c',
   'KeyV': 'v',
   'KeyB': 'b',
   'KeyN': 'n',
   'KeyM': 'm',
   'Comma': ',',
   'Period': '.',
   'Slash': '/',
   'ArrowUp': 'arrowup',
   'ShiftRight': 'shiftright',
   'ControlLeft': 'ctrlleft',
   'OsLeft': 'win',
   'AltLeft': 'altleft',
   'Space': 'space',
   'AltRight': 'altright',
   'ArrowLeft': 'arrowleft',
   'ArrowDown': 'arrowdown',
   'ArrowRight': 'arrowright',
   'ControlRight': 'ctrlright',
}


document.addEventListener('keydown', function (e) {
    console.log(e.code);
    
  let  button = document.getElementById(`${keyboard[e.code]}`);
    if (e.target === 'ShiftLeft' || e.target === 'ShiftRight') {
        buttons.forEach(button => {
            button.classList.add('upper-case');
        })
    }
    if (e.code === 'CapsLock'){
        buttons.forEach(button => {
            button.classList.toggle('upper-case');
        })
    }
    button.classList.add('button_colored');
});

document.addEventListener('keyup', function (e) {
   let button = document.getElementById(`${keyboard[e.code]}`);
    if (e.code !== 'CapsLock') {
        button.classList.remove('button_colored');
    } 
    if (e.target === 'ShiftLeft' || e.target === 'ShiftRight') {
        buttons.forEach(button => {
            button.classList.remove('upper-case');
        })
    }
    
});