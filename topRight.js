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