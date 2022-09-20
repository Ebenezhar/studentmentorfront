const INIT_STATE = {
    status: '',
    data: []
}

export const teacherReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'POST_TEACHER':
            return {
                ...state,
                status: "" + action.payload
            }
        case 'READ_TEACHERS':
            return {
                ...state,
                data: action.payload
            }
        case 'UPDATE_TEACHER':
            {
                return {
                    ...state,
                    status: '' + action.payload
                }
            }
        case 'DELETE_TEACHER':
            {
                return {
                    ...state,
                    status: '' + action.payload
                }
            }
        default: return state;
    };
}