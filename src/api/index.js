import api from '../network/request.js' 

export function loadMembersByPage(data) {
    return api({
        url: '/member/search',
        method: 'post',
        data
    })
}

export function loadMemberDetails(id) {
    return api({
        url: `/member/${id}`,
        method: 'get'
    })
}

export function loadFeaturesByPage(params) {
    return api({
        url: `/functions/feature/list`,
        method: 'get',
        params
    })
}

export function validateFeature(data) {
    return api({
        url: '/functions/feature/validate',
        method: 'post',
        data
    })
}

export function addFeature(data) {
    return api({
        url: '/functions/feature/add',
        method: 'post',
        data
    })
}

export function loadHobbyByPage(params) {
    return api({
        url: `/functions/hobby/list`,
        method: 'get',
        params
    })
}

export function validateHobby(data) {
    return api({
        url: '/functions/hobby/validate',
        method: 'post',
        data
    })
}

export function addHobby(data) {
    return api({
        url: '/functions/hobby/add',
        method: 'post',
        data
    })
}