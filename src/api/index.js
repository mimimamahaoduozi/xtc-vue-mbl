
import { HTTP } from '@/util/axios'

export const getUserInfo = (data) => {
    return HTTP({
        url: '/get_info',
        params: {
            data
        },
        method: 'get'
    })
}

export const logout = ({ userName, password }) => {
    const data = {
        userName,
        password
    }
    return HTTP({
        url: '/logout',
        method: 'post',
        data
    })
}
