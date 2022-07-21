// generates HTML info 
function generateHtml(teamProfile) {
  var teamCards = "";
  console.log(teamProfile)
  for (let i = 0; i < teamProfile.length; i++) {
    if (teamProfile[i].role == "Manager") {
      teamCards += `<div class="card-body">
          <h5 class="card-title">${teamProfile[i].name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${teamProfile[i].role}</h6>
          <p class="card-text">ID: ${teamProfile[i].id}</p>
          <p class="card-text">Office Number: ${teamProfile[i].office}</p>
          <p class="card-text">Email: ${teamProfile[i].email}</p>
        </div>`
    } else if (teamProfile[i].role == "Engineer") {
      teamCards += `<div class="card-body">
          <h5 class="card-title">${teamProfile[i].name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${teamProfile[i].role}</h6>
          <p class="card-text">ID: ${teamProfile[i].id}</p>
          <p class="card-text">Email: ${teamProfile[i].email}</p>
          <p class="card-text">Github: ${teamProfile[i].github}</p>
        </div>`
    } else if(teamProfile[i].role == "Intern") {
      teamCards += `<div class="card-body">
            <h5 class="card-title">${teamProfile[i].name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${teamProfile[i].role}</h6>
            <p class="card-text">ID: ${teamProfile[i].id}</p>
            <p class="card-text">Email: ${teamProfile[i].email}</p>
            <p class="card-text">School: ${teamProfile[i].school}</p>
          </div>`
    }
  }
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
        <header class="jumbotron jumbotron-fluid bg-secondary text-white">
            <div class="container">
              <h1 class="display-4 text-center">My Team</h1>
            </div>
        </header>
        <main class="card" style="width: 18rem;">
            ${teamCards}
        </main>
    </body>
    </html>`
}

module.exports = generateHtml;