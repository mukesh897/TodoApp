import React, { Component } from 'react'

class TodoList extends Component {
  // componentDidUpdate() {
  //   this.props.inputElement.current.focus()
  // }
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.props.addItem}>
            <input
              placeholder="Task Title"
              value={this.props.currentItem.text}
              onChange={this.props.handleInput}
            />
            <input
              placeholder="Task Details"
              value={this.props.currentItem.details}
              onChange={this.props.handleInputDetails}
            />
            <button type="submit"> Add Task </button>
          </form>
        </div>
      </div>
    )
  }
}

export default TodoList
