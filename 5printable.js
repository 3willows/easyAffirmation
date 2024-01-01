// Function to generate the printable version
function holding () {
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
                <h1 class="title is-1"> Printable version & Backsheet
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
const endHolding = document.querySelectorAll('.endHolding')

endHolding.forEach(element => {
  element.addEventListener('click', () => {
    holding()
  })
})
