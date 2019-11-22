import {combineReducers} from 'redux';
import tasks from './tasks'
import displayForm from './displayForm'
import editingTask from './editingTask'

const myReducer = combineReducers({
    tasks,
    displayForm,
    editingTask,
})

export default myReducer;