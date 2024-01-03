const backSheetutton = document.querySelector("#backSheetButton")

backSheetutton.addEventListener("click", () => {
  const caseAlpha = document.querySelector("#caseAlpha")
  const caseNumber = document.querySelector("#caseNumber")
  const pSideAll = document.querySelectorAll("#pSideAll li")
  const dSideAll = document.querySelectorAll("#dSideAll li")
  const midTitle = document.querySelectorAll(".midTitle")
  const beforeMe = document.querySelector("#beforeMe")
  const affirmPlace = document.querySelector("#affirmPlace")
  const swornDateInput = document.querySelector("#swornDateInput")

  const logValueIfExists = (label, element) => {
    if (element && element.value !== undefined) {
      console.log(`${label}:`, element.value)
    } else {
      console.log(`${label}: Element not found or has no value`)
    }
  }

  logValueIfExists("caseAlpha", caseAlpha)
  logValueIfExists("caseNumber", caseNumber)

  dSideAll.forEach((item, index) => {
    console.log(`D ${index + 1}:`, item.textContent)
  })

  pSideAll.forEach((item, index) => {
    console.log(`P ${index + 1}:`, item.textContent)
  })

  midTitle.forEach((item) => {
    console.log(item.textContent)
  })


  logValueIfExists("beforeMe", beforeMe)
  logValueIfExists("affirmPlace", affirmPlace)
  logValueIfExists("swornDateInput", swornDateInput)
})
