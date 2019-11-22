import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as actions from './../actions/index'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    }
  }
  onChange = (event) => {
    var target = event.target
    var name = target.name
    var value = target.value
    this.setState({
      [name]: value
    })
  }
  onSearch = () => {
    this.props.onSearch(this.state.keyword)
  }
  render() {
    var {keyword} = this.state
      return (
          <div>
              <div className="input-group">
                  <input type="text" className="form-control" placeholder="Nhập từ khóa..." name="keyword" value={keyword} onChange={this.onChange}/>
                  <span className="input-group-btn">
                    <button onClick={this.onSearch} className="btn btn-primary" type="button">
                      <span className="fa fa-search mr-5" />Tìm
                    </button>
                  </span>
                </div>
          </div>
      )
    }
}

const mapStateToProps = state => {
  return {
    keyword: state.keywordSearch
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onSearch: (keyword) => {
      dispatch(actions.changeKeyword(keyword))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)