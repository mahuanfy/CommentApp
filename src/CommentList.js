import React, { Component } from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'

class CommentList extends Component {
  static defaultProps ={
    comments:[]
  }
  static PropTypes={
    comments : PropTypes.object,
    onDeleteComment:PropTypes.func
  }
  handleDeleteComment(index){
    this.props.onDeleteComment(index)
  }
  render() {
    return (
      <div>{this.props.comments.map((item,i)=> 
        <Comment comment = {item} key={i} index={i}
        onDeleteComment = {this.handleDeleteComment.bind(this)} />
      )}</div>
    )
  }
}

export default CommentList