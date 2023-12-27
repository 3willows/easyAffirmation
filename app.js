// prevent default selection of form

const pSideBegins = document.querySelector('#pSideAll')
const pSideForm = document.querySelector('#pSideForm')
const pSideName = document.querySelector('#pSideName')
const pSideRole = document.querySelector('#pSideRole')

let pNumber = 1
pSideForm.addEventListener('submit', e => {
  e.preventDefault()

  const newLi = document.createElement('li')
  newLi.innerText = `${pSideName.value.toUpperCase()}`
  pSideBegins.append(newLi)

  const newSpan = document.createElement('span')
  newSpan.innerText = `${pSideRole.value} No.${pNumber}`
  newSpan.classList.add('role')
  pNumber++
  newLi.insertAdjacentElement('beforeend', newSpan)

  pSideName.value = ''
})

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

// enter the deponent name in appropriate places

const deponentEntry = document.querySelector('#deponentEntry')
const deponent = document.querySelectorAll('.deponent')

deponentEntry.addEventListener('input', event => {
  const enteredName = event.target.value

  deponent.forEach(appearance => {
    appearance.innerText = enteredName || '(deponent name)'
  })
})

// enter case number on the top right corner

const caseAlpha = document.querySelector('#caseAlpha')
const caseAlphaAbbrev = document.querySelector('#caseAlphaAbbrev')

caseAlpha.addEventListener('input', () => {
  if (caseAlpha.value === 'A') {
    caseAlphaAbbrev.innerText = 'HCA'
  } else if (caseAlpha.value === 'B') {
    caseAlphaAbbrev.innerText = 'HCB'
  } else if (caseAlpha.value === 'MP') {
    caseAlphaAbbrev.innerText = 'HCMP'
  }
})

const caseDigitAbbrev = document.querySelector('#caseDigitAbbrev')

const caseNumberEntry = document.querySelector('#caseNumber')

caseNumberEntry.addEventListener('input', () => {
  caseDigitAbbrev.innerText = `${caseNumberFirst.value}/${caseNumberYear.value}`
})

// Function to generate the printable version
function generatePrintableVersion () {
  // Create a new window
  const newWindow = window.open('', '_blank')

  // Write the content to the new window
  newWindow.document.write(`
  <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Printable Version (UNDER DEVELOPMENT)</title>
  <link rel="stylesheet" href="./app.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
</head>

<body>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-half is-offset-one-quarter">
          <div class="card">
            <div class="card-content">
              <div class="content">
                <h1 class="title is-1"> Printable version
                </h1>
                <h2  class="title is-2">(UNDER DEVELOPMENT)</h2>
              </div>
            </div>
          </div>
        </div>
  </section>

</body>

</html> 
  `)

  // Close the document writing
  newWindow.document.close()

  // Focus on the new window
  newWindow.focus()
}

// Event listener for the "Printable Version in New Tab" button
const printableVersionBtn = document.getElementById('printableVersionBtn')
printableVersionBtn.addEventListener('click', generatePrintableVersion)
