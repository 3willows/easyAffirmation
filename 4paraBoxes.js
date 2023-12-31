// automatically generate paragraph boxes

document.addEventListener('DOMContentLoaded', function () {
  const affirmationContent = document.querySelector('.affirmationContent')
  const addButton = document.getElementById('addParagraph')
  let paragraphNumber = 3

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

    // update the paragraph number of the conclusion
    const conclusionPara = document.querySelector('#conclusionPara')
    conclusionParaNo.textContent = `${paragraphNumber+1}. `
  })
})
