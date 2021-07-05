export function getChannels() {
    return fetch('/api/services/getChannels', {
        method: 'GET'
    })
    .then(res => res.json())
}

export function getSalesOffices() {
    return fetch('/api/services/getSalesOffices', {
        method: 'GET'
    })
    .then(res => res.json())
}

export function getSalesGroups() {
    return fetch('/api/services/getSalesGroups', {
        method: 'GET'
    })
    .then(res => res.json())
}

export function getUserFullnamesAndID() {
    return fetch('/api/services/getUserFullnamesAndID', {
        method: 'GET'
    })
    .then(res => res.json())
}