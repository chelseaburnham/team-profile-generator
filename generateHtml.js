// generates HTML info 
  function generateHtml(response) {
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
            <div class="card-body">
              <h5 class="card-title">${response.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${response.role}</h6>
              <p class="card-text">ID: ${response.id}</p>
              <p class="card-text">School: ${response.school}</p>
              <p class="card-text">Office Number: ${response.office}</p>
              <a href="${response.email}" class="card-link" target="_blank">Email</a>
              <a href="${response.github}" class="card-link" target="_blank">GitHub</a>
            </div>
        </main>
    </body>
    </html>`
  }
  
  module.exports = generateHtml;
  