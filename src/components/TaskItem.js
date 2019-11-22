import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './../actions/index'

class TaskItem extends Component {
    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id)
    }
    onDelete = () => {
        this.props.onDelete(this.props.task.id)
        this.props.onCloseForm()
    }
    onUpdate = () => {
        this.props.onOpenform()
        this.props.onUpdate(this.props.task)
    }
    render() {
        var {task, index} = this.props
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <span onClick={this.onUpdateStatus} className={task.status? "label label-success" : "label label-danger"}>
                        {task.status ? "Kích hoạt" : "Ẩn"}
                    </span>
                </td>
                <td className="text-center">
                    <button onClick={this.onUpdate} type="button" className="btn btn-warning">
                        <span className="fa fa-pencil mr-5" />Sửa
                </button>
                    &nbsp;
                <button onClick={this.onDelete} type="button" className="btn btn-danger">
                        <span className="fa fa-trash mr-5" />Xóa
                </button>
                </td>
            </tr>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onUpdateStatus: (id) => {
            dispatch(actions.updateStatus(id))
        },
        onDelete: (id) => {
            dispatch(actions.deleteTask(id))
        },
        onCloseForm: () => {
            dispatch(actions.closeForm())
        },
        onOpenform: () => {
            dispatch(actions.openForm())
        },
        onUpdate: (task) => {
            dispatch(actions.editingTask(task))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskItem)