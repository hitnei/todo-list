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
            if (action.task.id === ''){
                // add
                var newTask = action.task
                newTask.id = generateID()
                state.push(newTask)
                localStorage.setItem("tasks", JSON.stringify(state))
            }
            else{
                // change
                state.forEach((task, index) => {
                    if(task.id === action.task.id){
                        state[index] = action.task
                        console.log(state[index])
                    }
                })
            }
            localStorage.setItem("tasks", JSON.stringify(state))
            return [...state]
        
        case types.UPDATE_STATUS:
            state.forEach((task, index) => {
                    if (task.id === action.id) {
                    state[index] = {
                        ...state[index],
                        status: !state[index].status
                    }
                }
            })
            localStorage.setItem("tasks", JSON.stringify(state))
            return [...state]
            
        case types.DELETE_TASK:
            state.forEach((task, index) => {
                if (task.id === action.id) {
                    state.splice(index, 1)
                }
            })
            localStorage.setItem("tasks", JSON.stringify(state))
            return [...state]

        case types.FILTER_TASKS:
            return state

        default: 
            return state
    }
}

export default myReducer;