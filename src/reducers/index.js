import {combineReducers} from 'redux';
import tasks from './tasks'
import displayForm from './displayForm'

const myReducer = combineReducers({
    tasks,
    displayForm
})

export default myReducer;