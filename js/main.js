const input = document.getElementById('input');
const realOutput = document.getElementById('output');

input.addEventListener('input', () => {
  const inputValue = input.value.trim();
  
  const word = 'miaw';
  let output = '';
  let charIndex = 0;
  
  for (let i = 0; i < inputValue.length; i++) {
    if (!inputValue[i].match(/[a-zA-Z]/)) {
      output += inputValue[i];
    } else if (inputValue[i] === ' ') {
      output += ' ';
    } else {
      const currentWordChar = word[charIndex++ % word.length];
      output += inputValue[i] === inputValue[i].toLowerCase() ? currentWordChar.toLowerCase() : currentWordChar.toUpperCase();
    }
  }
  
  realOutput.innerHTML = output || 'Translation ..';
});