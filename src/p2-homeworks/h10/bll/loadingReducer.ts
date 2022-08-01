export type LoadingStateType = {
    isFetching: boolean
}

const initState:LoadingStateType = {
    isFetching: false
}

export type LoadingAT = {
    type: 'LOADING'
    isFetching: boolean
}

export type ActionLoadingType = LoadingAT

export const loadingReducer = (state = initState, action: ActionLoadingType): LoadingStateType => { // fix any
    switch (action.type) {
        case 'LOADING':
            return {
                ...state,
                isFetching: action.isFetching
            }

        default: return state
    }
}

export const loadingAC = (isFetching: boolean): LoadingAT => {
    return {
        type: 'LOADING', isFetching
    } as const
} // fix any