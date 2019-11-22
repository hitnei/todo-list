import {combineReducers} from 'redux';
import tasks from './tasks'
import displayForm from './displayForm'
import editingTask from './editingTask'
import filter from './filter'
import keywordSearch from './keywordSearch'
import sort from './sort'

const myReducer = combineReducers({
    tasks,
    displayForm,
    editingTask,
    filter,
    keywordSearch,
    sort,
})

export default myReducer;