import { ADD, COMPLETE, REMOVE, EDIT, CHANGETOTRUE, CHANGETOFALSE, CHANGETONULL } from "./type"

export const add = name => {
    return {
        type : ADD,
        payload : {
            id : Math.random(),
            isComplete : false,
            name : name
        }
    }
}

export const remove = index => {
    return {
        type : REMOVE,
        payload : index
    }
}

export const complete = index => {
    return {
        type : COMPLETE,
        payload : index
    }
}

export const edit = (id,text) => {
    return {
        type : EDIT,
        payload : {
            id : id,
            text : text
        }
    }
}

export const changeToTrue = () => {
    return {
        type : CHANGETOTRUE
    }
}

export const changeToFalse = () => {
    return {
        type : CHANGETOFALSE
    }
}

export const changeToNull = () => {
    return {
        type : CHANGETONULL
    }
}