import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from './../actions/index'

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            status: false
        }
    }
    UNSAFE_componentWillMount() {
        if (this.props.editingTask) {
            var { editingTask } = this.props
            this.setState({
                id: editingTask.id,
                name: editingTask.name,
                status: editingTask.status
            })
        }
    }
    UNSAFE_componentWillReceiveProps(nextProps) {        
        if (nextProps && nextProps.editingTask) {
            // them -> sua
            var { editingTask } = nextProps
            this.setState({
                id: editingTask.id,
                name: editingTask.name,
                status: editingTask.status
            })
        }
        else if (!nextProps.editingTask) {
            // sua -> them
            this.setState({
                id: '',
                name: '',
                status: false
            })
        }
    }
    onCloseForm = (e) => {
        // e.preventDefault()
        this.props.onCloseForm()
        this.setState({
            id: '',
            name: '',
            status: false
        })
    }
    onChange = (event) => {
        var target = event.target
        var name = target.name
        var value = target.value        
        if (name === "status") {
            value = target.value === "true" ? true : false
        }
        this.setState({
            [name]: value
        })
    }
    onSubmit = (e) => {
        e.preventDefault()
        this.props.onAddTask(this.state)
        this.onClear()
    }
    onClear = (e) => {
        this.setState({
            id: '',
            name: '',
            status: false
        })
        this.onCloseForm()
        this.props.endEditingTask()
    }
    render() {
        var {editingTask} = this.props
        if (!this.props.displayForm) return ""
        return (
            <div>
                <div className={this.props.displayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}>
                    <div className="panel panel-warning">
                        <div className="panel-heading">
                            <h3 className="panel-title">{!(editingTask.id==='')? "Sửa công việc" : "Thêm Công Việc"}</h3>
                            <div onClick={this.onCloseForm}><span href="/" className="close" value="."></span></div>
                        </div>
                        <div className="panel-body">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label>Tên :</label>
                                    <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.onChange} />
                                </div>
                                <label>Trạng Thái :</label>
                                <select className="form-control" name="status" value={this.state.status} onChange={this.onChange}>
                                    <option value={true}>Kích Hoạt</option>
                                    <option value={false}>Ẩn</option>
                                </select>
                                <br />
                                <div className="text-center">
                                    <button type="submit" className="btn btn-warning">Thêm</button>&nbsp;
                                    <button onClick={this.onClear} className="btn btn-danger">Hủy Bỏ</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        displayForm: state.displayForm,
        editingTask: state.editingTask
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddTask: (task) => {
            dispatch(actions.addTask(task))
        },
        onCloseForm: () => {
            dispatch(actions.closeForm())
        },
        endEditingTask: () => {
            dispatch(actions.endEditingTask())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskForm)