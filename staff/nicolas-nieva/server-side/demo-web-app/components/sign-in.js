function signIn ( args = {}){
    const {username, password, feedback} = args

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,  initial-scale=1.0">
        <title>Sign in | Demo Web-App</title>
    
        <link rel="shortcut icon" href="favicon.webp" type="image/x-icon">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <h1>Demo Web-App</h1>
        <h1>Sign in</h1>
        <form method="POST" action="/signin">
            <input type="text" name="username" placeholder="username"${username ? `value="${username}"`: ''}required>
            <input type="password" name="password" placeholder="password" minlength="8" required>
            <button>Sign in</button>
        
        </form>
    </body>
    </html>`
}

module.exports = signIn