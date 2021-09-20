let callbackQueueTracker = 0;

function animateText(elementContent, index, element) {
  let alphabetCollection = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let originalLetter  = elementContent[index];
  function isUpperCase(char) {
    if (char == char.toUpperCase()) return true
    else return false
  }
  let upperCase = isUpperCase(elementContent[index]);
  if (originalLetter != alphabetCollection[0]) {
    let iterator = 0;
    do {
      if (upperCase) elementContent[index] = alphabetCollection[iterator].toUpperCase()
      else elementContent[index] = alphabetCollection[iterator];
      let newElementContent = elementContent.join('');
      setTimeout(() => {
        const target = document.getElementById(element);
        target.innerText = newElementContent;
        callbackQueueTracker--;
        if (callbackQueueTracker == 0) {
          setTimeout(() => {
            hackedText('heading')
          }, 1000)
        }
      }, iterator * 80);
      callbackQueueTracker++;
      iterator++;
    } while (elementContent[index] != originalLetter);
  }
  return
}

function hackedText(...elements) {
  elements.forEach(element => {
    let randomIndexes = [];
    let elementContent = document.getElementById(element).innerText;
    for (let index = 0; index < elementContent.length; index++) {
      let randomIndex = Math.floor(Math.random() * elementContent.length)
      if (!randomIndexes.includes(randomIndex) && elementContent[randomIndex] != ' ') {
        randomIndexes.push(randomIndex)
      }
    }
    randomIndexes.forEach(index => {
      animateText(elementContent.split(''), index, element);
    });
  })
}

export default hackedText;