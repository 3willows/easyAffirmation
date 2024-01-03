// enter the deponent name in appropriate places

const deponentEntry = document.querySelector("#deponentEntry")
const deponent = document.querySelectorAll(".deponent")

deponentEntry.addEventListener("input", (event) => {
  const enteredName = event.target.value

  deponent.forEach((appearance) => {
    appearance.innerText = enteredName || "(deponent name)"
  })
})

// Deal with the ordinal number of affirmation

function updateOrdinalInput() {
  let input = document.getElementById("ordinalInput")
  if (!isNaN(input.value)) {
    let value = parseInt(input.value)
    let ordinalValue = getOrdinal(value)
    // getOrdinal() was defined in 1parties.js
    input.value = ordinalValue

    // update top right corner too

    const abbrevOrdinal = document.querySelector("#abbrevOrdinal")
    function topRightAbbrevUpdate() {
      abbrevOrdinal.innerHTML = ordinalValue
    }
    topRightAbbrevUpdate()
  }
}

// Update topRightCorner

document
  .getElementById("ordinalInput")
  .addEventListener("change", updateOrdinalInput)
