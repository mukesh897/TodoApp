import React, { Component } from 'react'

class TodoItems extends Component {
  createTasks = item => {
    return (

      <li key={item.key} >
        <div id={item.key+"readOnlyItem"}>
          <div>
            {item.text}
          </div>
          <button onClick={() => this.props.deleteItem(item.key)}>
            Delete Item
          </button>
          <button onClick={() => this.props.editItem(item.key)}>
            Edit Item
          </button>
        </div>
        <div id={item.key+"editableItem"} hidden={true}>
            <input
              placeholder={item.text}
              value={this.props.editedItem.text}
              onChange={this.props.handleEditInput}
            />
            <button onClick={() => this.props.deleteAndAddItem(item.key)}> Save edit </button>
            <button onClick={() => this.props.cancelEditItem(item.key)}>
              Cancel Edit
            </button>
        </div>
      </li>

    )
  }
  render() {
    const todoEntries = this.props.entries
    const listItems = todoEntries.map(this.createTasks)

    return <ul className="theList">{listItems}</ul>
  }
}

export default TodoItems
