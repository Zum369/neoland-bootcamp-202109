// function updateUserPassword(token, oldPassword, password, callback) {
//     if (typeof token !== 'string') throw new TypeError(`${token} is not a string`)
//     if (!/[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)$/.test(token)) throw new Error('invalid token')

//     if (typeof oldPassword !== 'string') throw new TypeError(`${oldPassword} is not a string`)
//     if (!oldPassword.trim().length) throw new Error('oldPassword is empty or blank')
//     if (/\r?\n|\r|\t| /g.test(oldPassword)) throw new Error('oldPassword has blank spaces')
//     if (oldPassword.length < 6) throw new Error('oldPassword has less than 6 characters')

//     if (typeof password !== 'string') throw new TypeError(`${password} is not a string`)
//     if (!password.trim().length) throw new Error('password is empty or blank')
//     if (/\r?\n|\r|\t| /g.test(password)) throw new Error('password has blank spaces')
//     if (password.length < 6) throw new Error('password has less than 6 characters')

//     if (typeof callback !== 'function') throw new TypeError(`${callback} is not a function`)

//     const xhr = new XMLHttpRequest ()

//     xhr.onload = () => {
//         const { status, responseText } = xhr

//         if (status === 400 || status === 401) {
//             const response = JSON.parse(responseText)

//             const message = response.error

//             callback(new Error(message))
//         } else if (status === 204) {
//             callback(null)
//         }
//     }

//     xhr.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')

//     xhr.setRequestHeader('Authorization', `Bearer ${token}`)

//     xhr.setRequestHeader('Content-Type', 'application/json')

//     const body = { oldPassword, password }

//     xhr.send(JSON.stringify(body))
// }

// export default updateUserPassword