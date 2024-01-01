// enter the deponent name in appropriate places

const deponentEntry = document.querySelector('#deponentEntry')
const deponent = document.querySelectorAll('.deponent')

deponentEntry.addEventListener('input', event => {
  const enteredName = event.target.value

  deponent.forEach(appearance => {
    appearance.innerText = enteredName || '(deponent name)'
  })
})

// Deal with the ordinal number of affirmation

function updateOrdinalInput () {
  let input = document.getElementById('ordinalInput')
  if (!isNaN(input.value)) {
    let value = parseInt(input.value)
    let ordinalValue = getOrdinal(value)
    input.value = ordinalValue
  }
}

function getOrdinal (n) {
  let suffix = ['th', 'st', 'nd', 'rd']
  let v = n % 100
  return n + (suffix[(v - 20) % 10] || suffix[v] || suffix[0])
}

document
  .getElementById('ordinalInput')
  .addEventListener('change', updateOrdinalInput)

// Get date of today and inject to the bottom box as default

function formatDate (date) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  const day = date.getDate()
  const monthIndex = date.getMonth()
  const year = date.getFullYear()

  return `${day} ${months[monthIndex]} ${year}`
}

const currentDate = new Date()
const formattedDate = formatDate(currentDate)
console.log(formattedDate) // Outputs: e.g., "2 January 2024" (depending on the current date)

const swornDateInput = document.querySelector('#swornDateInput')

swornDateInput.value = formattedDate
