export const incNumer = (num) => {
    return{
        type:"INCREMENT",
        payload:num
    }
}

export const decNumber = (num) => {
    return{
        type:"DECREMENT",
        payload:num
    }
}

export const login = () =>{
    return{
        type:"LOGIN"
    }
}

export const logout = () => {
    return{
        type:"LOGOUT"
    }
}