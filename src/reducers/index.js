import {combineReducers} from 'redux';
import tasks from './tasks'
import displayForm from './displayForm'
import editingTask from './editingTask'
import filter from './filter'

const myReducer = combineReducers({
    tasks,
    displayForm,
    editingTask,
    filter,
})

export default myReducer;