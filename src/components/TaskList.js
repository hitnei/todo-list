import React, { Component } from 'react'
import TaskItem from './TaskItem'
import { connect } from 'react-redux';
import * as actions from './../actions/index'

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: '',
      filterStatus: -1
    }
  }
  onChange = (event) => {
    var target = event.target
    var name = target.name
    var value = target.value
    if (name === "filterStatus") value = parseInt(value)
    this.props.onFilter({
      name: name === "filterName" ? value : this.state.filterName,
      status: name === "filterStatus" ? value : parseInt(this.state.filterStatus),
    })
    this.setState({
      [name]: value
    })
  }
  render() {
    var { tasks, filter } = this.props
    var { filterName, filterStatus } = this.state
    filterStatus = parseInt(filterStatus)

    // FILTER
    if (filter) {
      if (filter.name) {
        tasks = tasks.filter((task) => {
          return task.name.toLowerCase().indexOf(filter.name.toLowerCase()) !== -1
        })
      }
      tasks = tasks.filter((task) => {
        if (filter.status === -1) {
          return task;
        }
        else {
          return task.status === (filter.status === 1 ? true : false)
        }
      })
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
    }

    var elmTasks = tasks.map((task, index) => {
      return <TaskItem key={index} task={task} index={index} />
    })
    return (
      <div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th className="text-center">STT</th>
                <th className="text-center">Tên</th>
                <th className="text-center">Trạng Thái</th>
                <th className="text-center">Hành Động</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td />
                <td>
                  <input name="filterName" type="text" className="form-control" value={filterName} onChange={this.onChange} />
                </td>
                <td>
                  <select name="filterStatus" className="form-control" value={filterStatus} onChange={this.onChange}>
                    <option value={-1}>Tất Cả</option>
                    <option value={0}>Ẩn</option>
                    <option value={1}>Kích Hoạt</option>
                  </select>
                </td>
                <td />
              </tr>
              {elmTasks}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    filter: state.filter
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onFilter: (filter) => {
      dispatch(actions.changeFilter(filter))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskList)