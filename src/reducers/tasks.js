import * as types from './../constants/ActionTypes'

var s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}
var generateID = () => {
    return s4() + s4() + '-' + s4() + s4() + '-' + s4() + s4() + '-' + s4() + s4();
}

var data = JSON.parse(localStorage.getItem("tasks"))
var initialState = data ? data : []

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            return state

        case types.ADD_TASK:
            var newTask = action.task
            newTask.id = generateID()
            state.push(newTask)
            localStorage.setItem("tasks", JSON.stringify(state))
            return [...state]

        default: return state
    }
}

export default myReducer;