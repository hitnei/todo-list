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
      sort: {
        by: 'name',
        value: 1
      }
    }
  }
  onToggleForm = () => {
    var {editingTask} = this.props
    if(editingTask && editingTask.id === '') this.props.onToggleForm()
    else {
      this.props.endEditingTask()
    }
  }
  onCloseForm = () => {
    this.setState({
      isShowTaskForm: false
    })
  }
  onShowForm = () => {
    this.setState({
      isShowTaskForm: true
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
      sort
    } = this.state
    return (
      <div>
        <div className="container">
          <div className="text-center">
            <h1>Quản Lý Công Việc</h1>
            <hr />
          </div>
          <div className="row">
            <TaskForm />
            <div className={this.props.displayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
              <button type="button" className="btn btn-primary" onClick={this.onToggleForm}>
                <span className="fa fa-plus mr-5" />Thêm Công Việc
              </button>
              <div className="row mt-15">
                <Control onSearch={this.onSearch} onSort={this.onSort} sortBy={sort.by} sortValue={sort.value} />
              </div>
              <div className="row mt-15">
                <TaskList />
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
    displayForm: state.displayForm,
    editingTask: state.editingTask
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleForm: () => {
      dispatch(actions.toggleForm())
    },
    endEditingTask: () => {
        dispatch(actions.endEditingTask())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)