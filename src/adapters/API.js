const endpoint = 'http://localhost:3000/api/v1'
const signupUrl = `${endpoint}/users`
const loginUrl = `${endpoint}/login`
const catsUrl = `${endpoint}/cats`
const validateUrl = `${endpoint}/validate`


const jsonify = res => {
    if (res.ok)
        return res.json()
    else
        return Promise.resolve({error: 'no token'})
}
const handleServerError = response => console.log(response)

const saveToken = data => {
    localStorage.setItem('token', data.token)
    return data.user
}

const constructHeaders = (moreHeaders = {}) => (
    {
        'Authorization': localStorage.getItem('token'),
        ...moreHeaders
    }
)

const signUp = (user) => fetch(signupUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user })
}).then(jsonify)
    .then(saveToken)
    .catch(handleServerError)


const logIn = (user) => fetch(loginUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user })
}).then(jsonify)
    .then(saveToken)
    .catch(handleServerError)

const validateUser = () => {
    if (!localStorage.getItem('token') || localStorage.getItem('token') === "undefined")  return Promise.resolve({ error: 'no token' })

    return fetch(validateUrl, {
        headers: constructHeaders()
    }).then(jsonify)
        .then(saveToken)
        .catch(handleServerError)
}
const fetchProfile = (profileID) => {
    return fetch(`${signupUrl}/${profileID}`, {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    })
    .then(resp => resp.json())
}

const fetchUser = () => {
    return fetch(`${signupUrl}`, {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    })
    .then(resp => resp.json())
}



const postCat = cat => fetch(catsUrl, {
    method: 'POST',
    body: JSON.stringify({ cat }),
    headers: constructHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    })
}).then(jsonify)
    .catch(handleServerError)

const getCats = () => fetch(catsUrl).then(jsonify)

const clearToken = () => localStorage.removeItem('token')

export default {
    signUp,
    logIn,
    validateUser,
    clearToken,
    postCat,
    getCats,
    fetchProfile,
    fetchUser
}