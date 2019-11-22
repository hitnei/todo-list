import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './../actions/index';

class Sort extends Component {
    onClick = (e, sortBy, sortValue) => {
        e.preventDefault()
        var sort = {
            by: sortBy, 
            value: sortValue
        }
        this.props.onSort(sort)
    }
    render() {
        var { sortBy, sortValue } = this.props.sort
        return (
            <div>
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Sắp Xếp <span className="fa fa-caret-square-o-down ml-5" />
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li onClick={(e) => this.onClick(e, 'name', 1)}>
                            <a href="/" role="button" className={(sortBy === 'name' && sortValue === 1) ? "sort_selected" : ""}>
                                <span className="fa fa-sort-alpha-asc pr-5">
                                    Tên A-Z
                                </span>
                            </a>
                        </li>
                        <li onClick={(e) => this.onClick(e, 'name', -1)}>
                            <a href="/" role="button" className={(sortBy === 'name' && sortValue === -1) ? "sort_selected" : ""}>
                                <span className="fa fa-sort-alpha-desc pr-5">
                                    Tên Z-A
                                </span>
                            </a>
                        </li>
                        <li role="separator" className="divider" />
                        <li onClick={(e) => this.onClick(e, 'status', 1)}><a href="/" role="button" className={(sortBy === 'status' && sortValue === 1) ? "sort_selected" : ""}>Trạng Thái Kích Hoạt</a></li>
                        <li onClick={(e) => this.onClick(e, 'status', -1)}><a href="/" role="button" className={(sortBy === 'status' && sortValue === -1) ? "sort_selected" : ""}>Trạng Thái Ẩn</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        sort: state.sort
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onSort: (sort) => {
            dispatch(actions.sortTasks(sort))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort)