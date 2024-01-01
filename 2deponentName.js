// enter the deponent name in appropriate places

const deponentEntry = document.querySelector('#deponentEntry')
const deponent = document.querySelectorAll('.deponent')

deponentEntry.addEventListener('input', event => {
  const enteredName = event.target.value

  deponent.forEach(appearance => {
    appearance.innerText = enteredName || '(deponent name)'
  })
})
