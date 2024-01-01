// P side 

const pSideBegins = document.querySelector('#pSideAll')
const pSideForm = document.querySelector('#pSideForm')
const pSideName = document.querySelector('#pSideName')
const pSideRole = document.querySelector('#pSideRole')

let pNumber = 1
pSideForm.addEventListener('submit', e => {
  e.preventDefault()

  if (pSideName.value) {
    const newLi = document.createElement('li')
    newLi.innerText = `${pSideName.value.toUpperCase()}`
    pSideBegins.append(newLi)

    const newSpan = document.createElement('span')
    newSpan.innerText = `${pSideRole.value} No.${pNumber}`
    newSpan.classList.add('role')
    pNumber++
    newLi.insertAdjacentElement('beforeend', newSpan)
  }

  pSideName.value = ''
})

// D side 

const dSideBegins = document.querySelector('#dSideAll')
const dSideForm = document.querySelector('#dSideForm')
const dSideName = document.querySelector('#dSideName')
const dSideRole = document.querySelector('#dSideRole')

let dNumber = 1
dSideForm.addEventListener('submit', e => {
  e.preventDefault()

  if (dSideName.value) {
    const newLi = document.createElement('li')
    newLi.innerText = `${dSideName.value.toUpperCase()}`
    dSideBegins.append(newLi)

    const newSpan = document.createElement('span')
    newSpan.innerText = `${dSideRole.value} No.${pNumber}`
    newSpan.classList.add('role')
    dNumber++
    newLi.insertAdjacentElement('beforeend', newSpan)
  }

  dSideName.value = ''
})
