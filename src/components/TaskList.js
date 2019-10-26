import React, { Component } from 'react'
import TaskItem from './TaskItem'

export default class TaskList extends Component {
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
    this.props.onFilter(
      name === "filterName"? value : this.state.filterName,
      name === "filterStatus"? value : this.state.filterStatus,
    )
    this.setState({
      [name] : value
    })
  }
  render() {
    var { tasks } = this.props
    var {filterName, filterStatus} = this.state
    var elmTasks = tasks.map((task, index) => {
      return <TaskItem key={task.id} task = {task} index = {index} onUpdateStatus={this.props.onUpdateStatus} onDelete={this.props.onDelete} onUpdate={this.props.onUpdate}/>
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
                        <input name="filterName" type="text" className="form-control" value={filterName} onChange={this.onChange}/>
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
                    { elmTasks }
                  </tbody>
                </table>
              </div>
          </div>
      )
    }
}
