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