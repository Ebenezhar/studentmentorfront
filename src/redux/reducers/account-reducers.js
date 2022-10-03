const initialstate = {
    status: [],
    data: []
}

export const accountReducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'POST':
            return {
                ...state,
                status: action.payload
            }
        case 'READ':
            return {
                ...state,
                data: action.payload
            }
        case 'UPDATE':
            {
                return {
                    ...state,
                    status: action.payload
                }
            }
        case 'DELETE':
            {
                return {
                    ...state,
                    status: action.payload
                }
            }
        default: return state;
    };
}