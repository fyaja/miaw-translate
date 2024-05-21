const input = document.getElementById('input');
const realOutput = document.getElementById('output');

input.addEventListener('input', () => {
  const inputValue = input.value;
  
  const word = 'miaw';
  let output = '';
  let charIndex = 0;
  
  for (let i = 0; i < inputValue.length; i++) {
    if (inputValue[i] === ' ') {
      output += ' ';
    } else {
      output += word[charIndex % word.length];
      charIndex++;
    }
  }

  while (output.length < inputValue.length) {
    output += word[charIndex % word.length];
    charIndex++;
  }
  
  realOutput.innerText = output || 'Translation ..';
});