import * as types from './../constants/ActionTypes'

var initialState = {
    id: '',
    name: '',
    status: false
}

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.EDITING_TASK:
            state = action.task
            return state

        case types.END_EDITING_TASK:
            state = initialState
            return state

        default: return state
    }
}

export default myReducer