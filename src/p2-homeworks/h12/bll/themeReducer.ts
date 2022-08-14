type ActionType = ReturnType<typeof changeThemeC>

export type themeReducerType = {
    backgroundValue: string
}

const initState:themeReducerType = {
    backgroundValue: 'default'
};

export const themeReducer = (state = initState, action: ActionType): ActionType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return {
                ...state,
                backgroundValue: action.color
            }
        }
        default: return state;
    }
};

export const changeThemeC = (color: string): any => {
    return {
        type: "CHANGE-THEME", color
    } as const
};