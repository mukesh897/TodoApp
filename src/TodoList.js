import React, { Component } from 'react'
import './variables.css';

class TodoList extends Component {
  // componentDidUpdate() {
  //   this.props.inputElement.current.focus()
  // }
  render() {
    return (
      <div >
        <div class="page-content">
          <div>

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
            <div align="center">
              <button class="btn-floating btn-large waves-effect waves-light red" type="submit"> Add Task </button>
            </div>
          </form>
        </div>
        </div>
      </div>
    )
  }
}

export default TodoList
