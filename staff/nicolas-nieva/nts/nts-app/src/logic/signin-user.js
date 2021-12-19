import context from './context'

function signinUser(username, password) {
    //to do validates
    
    return (async () => {
        const res = await fetch(`${context.API_URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(username, password)
        })
        
        const { status } = res

        if (status === 201)
            return
        else if (status === 409 || status === 400) {
            const { error } = await res.json()

            throw new Error(error)
        } else throw new Error('unknoun error')
    })()
}


export default signinUser