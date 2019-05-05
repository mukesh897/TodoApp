import React, { Component } from 'react'
import './variables.css';

class TodoItems extends Component {
  createTasks = item => {
    return (
      <div class="box-view">
      <li class="item" key={item.key} >
        <div align="center" id={item.key+"readOnlyItem"} class="item card">
          <div >
            <button class="card-action" onClick={() => this.props.toggleDetails(item.key)}>ItemTitle: {item.text}</button>
            <br></br>
            <span class="collection-item" id={item.key+"itemDetails"} hidden={true}>Details: {item.details}</span>
            <br></br>
            <span class="collection-item">isComplete: {item.isComplete.toString()}</span>

          </div>
          <div class="collection-item box-view__box">
            <button class="button--pill" onClick={() => this.props.deleteItem(item.key)}>
              <i class="material-icons">delete</i>
            </button>
            <button class="button--pill" onClick={() => this.props.editItem(item.key)}>
              <i class="material-icons">edit</i>
            </button>
            <button id={item.key + "isCompleteButton"} class="button--pill" onClick={() => this.props.markDone(item.key)}>
              <i class="material-icons">done</i>
            </button>
            <div id={item.key+"hideDetailsButton"} hidden={true}>
              <button class="button--pill" id={item.key+"hideDetailsButton"} hidden={true} onClick={() => this.props.hideDetails(item.key)}>
                  Hide Details
              </button>
            </div>
          </div>
        </div>
        <div align="center"  id={item.key+"editableItem"} class="card" hidden={true}>
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

            <button class="waves-effect waves-light btn-small" onClick={() => this.props.deleteAndAddItem(item.key)}> Save edit </button>
            <button class="waves-effect waves-light btn-small" onClick={() => this.props.cancelEditItem(item.key)}>
              Cancel Edit
            </button>
        </div>
      </li>
    </div>

    )
  }
  render() {
    const todoEntries = this.props.entries
    const listItems = todoEntries.map(this.createTasks)

    return <ul className="theList">{listItems}</ul>
  }
}

export default TodoItems
