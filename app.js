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

console.log(caseAlpha.value)

caseNumberEntry.addEventListener('input', () => {
  caseDigitAbbrev.innerText = `${caseNumberFirst.value}/${caseNumberYear.value}`
})
