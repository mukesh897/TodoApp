import React, { Component } from 'react'

class TodoItems extends Component {
  createTasks = item => {
    return (

      <li key={item.key} >
        <div id={item.key+"readOnlyItem"}>
          <div>
            <span>ItemTitle: {item.text}</span>
            <br></br>
            <span id={item.key+"itemDetails"} hidden={true}>Details: {item.details}</span>
            <br></br>
            <span>isComplete: {item.isComplete.toString()}</span>

          </div>
          <button onClick={() => this.props.deleteItem(item.key)}>
            Delete Item
          </button>
          <button onClick={() => this.props.editItem(item.key)}>
            Edit Item
          </button>
          <button onClick={() => this.props.markDone(item.key)}>
            Mark done
          </button>
          <button id={item.key+"showDetailsButton"} onClick={() => this.props.showDetails(item.key)}>
            Show Details
          </button>
          <button id={item.key+"hideDetailsButton"} hidden={true} onClick={() => this.props.hideDetails(item.key)}>
            Hide Details
          </button>
        </div>
        <div id={item.key+"editableItem"} hidden={true}>
            <input
              placeholder={item.text}
              value={this.props.editedItem.text}
              onChange={this.props.handleEditInput}
            />
            <input
              placeholder={item.details}
              value={this.props.editedItem.details}
              onChange={this.props.handleEditInputDetails}
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
