export function addUser(currentUser) {
    return fetch('/api/users/addUser', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(currentUser)
    })
    .then(res => res.json())
}

export function getUsers() {
    return fetch('/api/users/getUsers', {
        method: 'GET'
    })
    .then(res => res.json())
}

export function editUser(id, currentUser) {
    return fetch(`/api/users/editUser/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(currentUser)
    })
    .then(res => res.json())
}

export function deleteUser(id) {
    return fetch(`/api/users/deleteUser/${id}`, {
        method: 'PUT',
    })
    .then(res => res.json())
}

export function activateUser(id) {
    return fetch(`/api/users/activateUser/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
}

export function deactivateUser(id) {
    return fetch(`/api/users/deactivateUser/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
}