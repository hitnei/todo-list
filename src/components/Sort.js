import React, { Component } from 'react'

export default class Sort extends Component {
    onClick = (sortBy, sortValue) => {
        this.props.onSort(sortBy, sortValue)
    }
    render() {
        var {sortBy, sortValue} = this.props
        return (
            <div>
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Sắp Xếp <span className="fa fa-caret-square-o-down ml-5" />
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li onClick={() => this.onClick('name', 1)}>
                            <a href="/" role="button" className={(sortBy === 'name' && sortValue === 1)? "sort_selected" : ""}>
                                <span className="fa fa-sort-alpha-asc pr-5">
                                    Tên A-Z
                                </span>
                            </a>
                        </li>
                        <li onClick={() => this.onClick('name', -1)}>
                            <a href="/" role="button" className={(sortBy === 'name' && sortValue === -1)? "sort_selected" : ""}>
                                <span className="fa fa-sort-alpha-desc pr-5">
                                    Tên Z-A
                                </span>
                            </a>
                        </li>
                        <li role="separator" className="divider" />
                        <li onClick={() => this.onClick('status', 1)}><a href="/" role="button" className={(sortBy === 'status' && sortValue === 1)? "sort_selected" : ""}>Trạng Thái Kích Hoạt</a></li>
                        <li onClick={() => this.onClick('status', -1)}><a href="/" role="button" className={(sortBy === 'status' && sortValue === -1)? "sort_selected" : ""}>Trạng Thái Ẩn</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
