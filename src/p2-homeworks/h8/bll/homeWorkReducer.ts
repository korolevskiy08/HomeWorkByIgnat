import {UserType} from "../HW8";

type ActionSortType = {
    type: 'sort'
    payload: 'up' | 'down'
}
type ActionCheckType = {
    type: 'check'
    payload: number
}
type ActionType = ActionSortType | ActionCheckType

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    console.log(state)
    switch (action.type) {
        case 'sort': {
            // need to fix
            return [...state].sort((a, b) => action.payload === 'up' ? a.age - b.age : b.age - a.age)
        }
        case 'check': {
            // need to fix
            return [...state].filter(a => a.age > 18)
        }
        default: return state
    }
}