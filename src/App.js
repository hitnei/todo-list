import React, { Component } from 'react'
import TaskForm from './components/TaskForm'
import Control from './components/Control'
import TaskList from './components/TaskList'
import i18next from 'i18next'
import './i18n'
// import { useTranslation} from 'react-i18next';
import './App.css'
import { connect } from 'react-redux'
import * as actions from './actions/index';
require('dotenv').config();

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      taskEditting: null,
      filter: {
        name: '',
        status: -1
      },
      sort: {
        by: 'name',
        value: 1
      }
    }
  }
  onToggleForm = () => {
    this.props.onToggleForm()
  }
  onCloseForm = () => {
    this.setState({
      isShowTaskForm: false
    })
  }
  onDelete = (id) => {
    var { tasks } = this.state
    tasks.forEach((task, index) => {
      if (task.id === id) {
        tasks.splice(index, 1)
        this.setState({
          tasks
        })
        localStorage.setItem("tasks", JSON.stringify(tasks))
      }
    })
    this.onCloseForm()
  }
  onShowForm = () => {
    this.setState({
      isShowTaskForm: true
    })
  }
  onUpdate = (id) => {
    var { tasks } = this.state
    tasks.forEach((task, index) => {
      if (task.id === id) {
        this.setState({
          taskEditting: task
        })
      }
    })
    this.onShowForm()
  }
  onFilter = (filterName, filterStatus) => {
    filterStatus = parseInt(filterStatus, 10)
    this.setState({
      filter: {
        name: filterName,
        status: filterStatus
      }
    })
  }
  onSearch = (keyword) => {
    this.setState({
      keyword: keyword
    })
  }
  onSort = (sortBy, sortValue) => {
    this.setState({
      sort: {
        by: sortBy,
        value: sortValue
      }
    })
  }
  render() {
    // const { t, i18n } = useTranslation;
    const onChangeLanguage = (lng) => {
      i18next.changeLanguage(lng);
      window.render(window.location.replace(window.location.pathname + window.location.search + window.location.hash))
    }
    var {
      taskEditting,
      filter,
      keyword,
      sort
    } = this.state
    var isShowTaskForm = this.props.displayForm
      // if (filter){
      //   if (filter.name){
      //     tasks = tasks.filter((task) => {
      //       return task.name.toLowerCase().indexOf(filter.name.toLowerCase()) !== -1
      //     })
      //   }
      //   tasks = tasks.filter((task) => {
      //     if (filter.status === -1){
      //       return task;
      //     }
      //     else{
      //       return task.status === (filter.status === 1? true : false)
      //     }
      //   })
      // }
      // if (keyword){
      //   tasks = tasks.filter((task) => {
      //     return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
      //   })
      // }
      // if(sort.by === 'name'){
      //   tasks.sort((a, b) => {
      //     if (a.name > b.name) return sort.value
      //     else if (a.name < b.name) return -sort.value
      //     else return 0
      //   })
      // } else{
      //   tasks.sort((a, b) => {
      //     if (a.status > b.status) return sort.value
      //     else if (a.status < b.status) return -sort.value
      //     else return 0
      //   })
      // }
      return(
        <div>
          <div className="container">
            <div className="text-center">
              <h1>Quản Lý Công Việc</h1>
              <hr />
            </div>
            <div className="row">
              <div className={isShowTaskForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}>
                {isShowTaskForm ? <TaskForm task={taskEditting} /> : ""}
              </div>
              <div className={isShowTaskForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                <button type="button" className="btn btn-primary" onClick={this.onToggleForm}>
                  <span className="fa fa-plus mr-5" />Thêm Công Việc
              </button>
                <div className="row mt-15">
                  <Control onSearch={this.onSearch} onSort={this.onSort} sortBy={sort.by} sortValue={sort.value} />
                </div>
                <div className="row mt-15">
                  <TaskList onDelete={this.onDelete} onUpdate={this.onUpdate} onFilter={this.onFilter} />
                </div>
              </div>
            </div>
          </div>

          <div className="btnGroup">
            <a href="/"><button type="button" className="btn btn-primary" value="en" onClick={() => onChangeLanguage('en')}>EN</button></a>
            <a href="/"><button type="button" className="btn btn-primary" onClick={() => onChangeLanguage('ja')}>JA</button></a>
            <a href="/"><button type="button" className="btn btn-primary" onClick={() => onChangeLanguage('vn')}>VN</button></a>
          </div>
        </div>
      )
  }
}

const mapStateToProps = state => {
  return {
    displayForm: state.displayForm
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleForm: () => {
      dispatch(actions.toggleForm())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)