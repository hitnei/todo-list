import * as types from './../constants/ActionTypes'

export const listAll = () => {
    return {
        type: types.LIST_ALL
    }
}

export const addTask = (task) => {
    return {
        type: types.ADD_TASK,
        task
    }
}

export const toggleForm = () => {
    return {
        type: types.TOGGLE_FORM,
    }
}

export const openForm = () => {
    return {
        type: types.OPEN_FORM,
    }
}

export const closeForm = () => {
    return {
        type: types.CLOSE_FORM,
    }
}

export const updateStatus = (id) => {
    return {
        type: types.UPDATE_STATUS,
        id
    }
}

export const deleteTask = (id) => {
    return {
        type: types.DELETE_TASK,
        id
    }
}

export const editingTask = (task) => {
    return {
        type: types.EDITING_TASK,
        task
    }
}

export const endEditingTask = () => {
    return {
        type: types.END_EDITING_TASK
    }
}

export const changeFilter = (filter) => {
    return {
        type: types.CHANGE_FILTER,
        filter
    }
}

export const filterTasks = (filter) => {
    return {
        type: types.FILTER_TASKS,
        filter
    }
}

export const changeKeyword = (keyword) => {
    return {
        type: types.CHANGE_KEYWORD,
        keyword
    }
}