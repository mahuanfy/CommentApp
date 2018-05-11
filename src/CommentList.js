import React, { Component } from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'

class CommentList extends Component {
  static defaultProps ={
    comments:[]
  }
  static PropTypes={
    comments : PropTypes.object
  }
  render() {
    return (
      <div>{this.props.comments.map((item,i)=> 
        <Comment comment = {item} key={i}/>
      )}</div>
    )
  }
}

export default CommentList