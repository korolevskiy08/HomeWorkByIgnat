import axios from "axios"

export const requestAPI = {
    setCheckBox(success: boolean){
        return axios.post<ResponseDataType>(`https://neko-cafe-back.herokuapp.com/auth/test`, {success})
    }
}

type ResponseDataType = {
    errorText: string
    info: string
    yourBody: {
        success: boolean
    }
    yourQuery: {}
}