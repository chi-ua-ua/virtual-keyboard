const page = document.querySelector('body');
page.innerHTML = `
<div class="container">
<div class="content-wrapper">
    <textarea autofocus class="textarea" name="" id="textarea" cols="90" rows="10"></textarea>
    <div class="keyboard">
        <button id="\`" class="button">\`</button>
        <button id="1" class="button">1</button>
        <button id="2" class="button">2</button>
        <button id="3" class="button">3</button>
        <button id="4" class="button">4</button>
        <button id="5" class="button">5</button>
        <button id="6" class="button">6</button>
        <button id="7" class="button">7</button>
        <button id="8" class="button">8</button>
        <button id="9" class="button">9</button>
        <button id="0" class="button">0</button>
        <button id="-" class="button">-</button>
        <button id="=" class="button">=</button>
        <button id="backspace" class="button backspace">Backspace</button>
        <button id="tab" class="button tab">Tab</button>
        <button id="q" class="button">q</button>
        <button id="w" class="button">w</button>
        <button id="e" class="button">e</button>
        <button id="r" class="button">r</button>
        <button id="t" class="button">t</button>
        <button id="y" class="button">y</button>
        <button id="u" class="button">u</button>
        <button id="i" class="button">i</button>
        <button id="o" class="button">o</button>
        <button id="p" class="button">p</button>
        <button id="[" class="button">[</button>
        <button id="]" class="button">]</button>
        <button id="backslash" class="button">\\</button>
        <button id="del" class="button">Del</button>
        <button id="capslock" class="button capslock">Caps Lock</button>
        <button id="a" class="button">a</button>
        <button id="s" class="button">s</button>
        <button id="d" class="button">d</button>
        <button id="f" class="button">f</button>
        <button id="g" class="button">g</button>
        <button id="h" class="button">h</button>
        <button id="j" class="button">j</button>
        <button id="k" class="button">k</button>
        <button id="l" class="button">l</button>
        <button id=";" class="button">;</button>
        <button id="quote" class="button">'</button>
        <button id="enter" class="button enter">Enter</button>
        <button id="shiftleft" class="button shift">Shift</button>
        <button id="z" class="button">z</button>
        <button id="x" class="button">x</button>
        <button id="c" class="button">c</button>
        <button id="v" class="button">v</button>
        <button id="b" class="button">b</button>
        <button id="n" class="button">n</button>
        <button id="m" class="button">m</button>
        <button id="," class="button">,</button>
        <button id="." class="button">.</button>
        <button id="/" class="button">/</button>
        <button id="arrowup" class="button">^</button>
        <button id="shiftright" class="button shift">Shift</button>
        <button id="ctrlleft" class="button">Ctrl</button>
        <button id="win" class="button">Win</button>
        <button id="altleft" class="button">Alt</button>
        <button id="space" class="button space"></button>
        <button id="altright" class="button">Alt</button>
        <button id="arrowleft" class="button"><</button>
        <button id="arrowdown" class="button"></button>
        <button id="arrowright" class="button">></button>
        <button id="ctrlright" class="button">Ctrl</button>
    </div>
</div >
</div>
`
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