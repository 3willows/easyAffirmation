// enter case number on the top right corner

// see also 2affirmationTitle.js

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