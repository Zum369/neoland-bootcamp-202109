function landing () {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Demo Web-App</title>
    
        <link rel="shortcut icon" href="favicon.webp" type="image/x-icon">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <h1>Demo Web-App</h1>
    
        <a href="/signin"><button>Login</button></a>
        <a href="/signup"><button>Register</button></a>
    </body>
    </html>`
}
module.exports = landing
