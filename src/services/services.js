export function getChannels() {
    return fetch('http://localhost:5000/api/services/getChannels', {
        method: 'GET'
    })
    .then(res => res.json())
}

export function getSalesOffices() {
    return fetch('http://localhost:5000/api/services/getSalesOffices', {
        method: 'GET'
    })
    .then(res => res.json())
}

export function getSalesGroups() {
    return fetch('http://localhost:5000/api/services/getSalesGroups', {
        method: 'GET'
    })
    .then(res => res.json())
}

export function getUserFullnamesAndID() {
    return fetch('http://localhost:5000/api/services/getUserFullnamesAndID', {
        method: 'GET'
    })
    .then(res => res.json())
}