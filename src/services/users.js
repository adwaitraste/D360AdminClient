export function addUser(currentUser) {
    return fetch('http://localhost:5000/api/users/addUser', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(currentUser)
    })
    .then(res => res.json())
}

export function getUsers() {
    return fetch('http://localhost:5000/api/users/getUsers', {
        method: 'GET'
    })
    .then(res => res.json())
}