import React, { Component } from 'react'
// import './App.css'
import TodoList from './TodoList'
import TodoItems from './TodoItems'

class App extends Component {
  inputElement = React.createRef()
  constructor() {
    super()
    this.state = {
      items: [{ text: 'Ritesh', key: 1 }, { text: 'Mukesh', key: 2 }],
      currentItem: {
        text: '',
        key: '',
      },
      editedItem: {
        text: '',
        key: '',
      },
    }
  }
  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }

  editItem = key => {
    document.getElementById(key+"readOnlyItem").style.display = "none";
    document.getElementById(key+"editableItem").style.display = "block";
  }

  cancelEditItem = key => {
    document.getElementById(key+"readOnlyItem").style.display = "block";
    document.getElementById(key+"editableItem").style.display = "none";

  }

  handleInput = e => {
    const itemText = e.target.value
    var currentItem = { text: itemText, key: Date.now() }
    this.setState({
      currentItem,
    })
  }

  handleEditInput = e => {
    const itemText = e.target.value
    var editedItem = { text: itemText, key: Date.now() }
    this.setState({
      editedItem,
    })
  }

  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: { text: '', key: '' },
      })
    }
  }

  deleteAndAddItem = key => {

  }
  render() {

    return (
      <div className="App">
        <TodoList
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />
        <TodoItems entries={this.state.items}
          deleteItem={this.deleteItem}
          editItem={this.editItem}
          cancelEditItem = {this.cancelEditItem}
          handleEditInput = {this.handleEditInput}
          editedItem = {this.state.editedItem}
          deleteAndAddItem = {this.deleteAndAddItem}
        />
      </div>
    )
  }
}

export default App
