function addComent(token, id, text, callback) {
    if (typeof token !== 'string') throw new TypeError(`${token} is not a string`)
    if (!/[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)$/.test(token)) throw new Error('invalid token')

    if (typeof id !== "string") throw new Error(`${id} is not a string`)

    if (typeof text !== "string") throw new Error(`${text} is not a string`)

    if (typeof callback !== "function") throw new TypeError(callback + " is not a function")

    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        const { status, responseText } = xhr
        if (status === 401 || status === 404) {
            const response = JSON.parse(responseText)

            const message = response.Error

            callback(new Error(message))
        } else if (status === 200) {
            const response = responseText

            const user = JSON.parse(response)

            const { comments = [] } = user

            const item = comments.find(item => item.id === id)

            if (item) {
               item.text.push(text)
            } else
                comments.push({ id, text: [text] })

            const xhr2 = new XMLHttpRequest

            xhr2.onload = () => {
                const { status, responseText } = xhr2

                if (status === 400 || status === 401) {
                    const response = JSON.parse(responseText)

                    const message = response.error 

                    callback(new Error(message))
                } else if (status === 204) {
                    callback(null)
                }
            }

            xhr2.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')

            xhr2.setRequestHeader('Authorization', `Bearer ${token}`)

            xhr2.setRequestHeader('Content-Type', 'application/json')

            const body = { comments }

            xhr2.send(JSON.stringify(body))
        }

    }

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()
}

export default addComent 