import React, { Component } from 'react'

export default class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            status: false
        }
    }
    componentWillMount(){
        if(this.props.task){
            var {task} = this.props
            this.setState({
                id: task.id,
                name: task.name,
                status: task.status
            })
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.task){
            // them -> sua
            var {task} = nextProps
            this.setState({
                id: task.id,
                name: task.name,
                status: task.status
            })
        }
        else if (!nextProps.task){
            //sua -> them
            this.setState({
                id: '',
                name: '',
                status: false
            })
        }
    }
    onCloseForm = () => {
        this.props.onCloseForm()
    }
    onChange = (event) => {
        var target = event.target
        var name = target.name
        var value = target.value
        if(name === "status"){
            value = target.value === "true"? true : false
        }
        this.setState({
            [name]: value
        })
    }
    onSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state)
        this.onClear()
        this.onCloseForm()
    }
    onClear = (e) => {
        e.preventDefault()
        this.setState({
            id: '',
            name: '',
            status: false
        })
    }
    render() {
        var {id} = this.state
        return (
            <div>
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">{id? "Sửa công việc" : "Thêm Công Việc"}</h3>
                        <div onClick={this.onCloseForm}><a href="#" className="close"></a></div>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Tên :</label>
                                <input type="text" className="form-control" name="name" value={this.state.name} onChange = {this.onChange}/>
                            </div>
                            <label>Trạng Thái :</label>
                            <select className="form-control" name="status" value={this.state.status} onChange = {this.onChange}>
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
        )
    }
}
