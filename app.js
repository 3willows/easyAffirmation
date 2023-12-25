// automatically generate paragraph boxes

document.addEventListener('DOMContentLoaded', function () {
  const affirmationContent = document.querySelector('.affirmationContent')
  const addButton = document.getElementById('addParagraph')
  let paragraphNumber = 1

  addButton.addEventListener('click', function () {
    paragraphNumber++
    const newTextArea = document.createElement('textarea')
    newTextArea.setAttribute('rows', '4')
    newTextArea.setAttribute('cols', '50')
    newTextArea.id = `paragraph${paragraphNumber}`

    const paragraph = document.createElement('p')
    paragraph.textContent = `${paragraphNumber}. `
    paragraph.appendChild(newTextArea)
    affirmationContent.insertBefore(paragraph, addButton)
  })
})

const deponentEntry = document.querySelector("#deponentEntry")
const deponent = document.querySelectorAll('.deponent')

deponentEntry.addEventListener("input",(event) => {
  const enteredName = event.target.value;
  
  deponent.forEach(appearance => {
    appearance.innerText = enteredName || '(deponent name)';
  });
}); 