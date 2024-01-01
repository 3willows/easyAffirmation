// Get date of today and inject to the top right and bottom box as default

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
const abbrevDate = document.querySelector('#abbrevDate')

swornDateInput.value = formattedDate
abbrevDate.innerText = formattedDate