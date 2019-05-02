import React, { Component } from 'react'
// import './App.css'
import TodoList from './TodoList'
import TodoItems from './TodoItems'

class App extends Component {
  inputElement = React.createRef()
  constructor() {
    super()
    this.state = {
      items: [
        { text: 'Ritesh', key: 1, isComplete: false, details: "Dummy details" },
        { text: 'Mukesh', key: 2, isComplete: false, details: "Dummy details" }
      ],
      currentItem: {
        text: '',
        key: '',
        isComplete: false,
        details: '',
      },
      editedItem: {
        text: '',
        key: '',
        isComplete: false,
        details: '',
      },
      lastUsedKey: 2,
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

  markDone = key => {
    const itemToBeMarkedDone = this.state.items.filter(item => {
      return item.key === key
    })[0]
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    itemToBeMarkedDone.isComplete = true
    const items = [...filteredItems, itemToBeMarkedDone]
    this.setState({
        items: items,
    })
  }

  cancelEditItem = key => {
    document.getElementById(key+"readOnlyItem").style.display = "block";
    document.getElementById(key+"editableItem").style.display = "none";

  }

  handleInput = e => {
    const lastUsedKey = this.state.lastUsedKey
    const newKey = lastUsedKey + 1
    const itemText = e.target.value
    var currentItem = { text: itemText, key: newKey, isComplete: false, details: ''}
    this.setState({
      currentItem: currentItem,
      lastUsedKey: newKey,
    })
  }

  handleInputDetails = e => {
    const lastUsedKey = this.state.lastUsedKey
    const newKey = lastUsedKey + 1
    const itemDetails = e.target.value
    var currentItem = this.state.currentItem
    currentItem.details = itemDetails
    this.setState({
      currentItem: currentItem,
      lastUsedKey: newKey,
    })
  }

  handleEditInput = e => {
    const lastUsedKey = this.state.lastUsedKey
    const newKey = lastUsedKey + 1
    const itemText = e.target.value
    var editedItem = { text: itemText, key: newKey, isComplete: false, details: '' }
    this.setState({
      editedItem: editedItem,
      lastUsedKey: newKey,
    })
  }

  handleEditInputDetails = e => {
    const lastUsedKey = this.state.lastUsedKey
    const newKey = lastUsedKey + 1
    const itemDetails = e.target.value
    var editedItem = this.state.editedItem
    console.log("Old edit item")
    console.log(editedItem)
    editedItem.details = itemDetails
    console.log("New edit item")
    console.log(editedItem)
    this.setState({
      editedItem: editedItem,
      lastUsedKey: newKey,
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

  showDetails = key => {
    document.getElementById(key+"itemDetails").style.display = "block";
    document.getElementById(key+"hideDetailsButton").style.display = "block";
    document.getElementById(key+"showDetailsButton").style.display = "none";
  }

  hideDetails = key => {
    document.getElementById(key+"itemDetails").style.display = "none";
    document.getElementById(key+"hideDetailsButton").style.display = "none";
    document.getElementById(key+"showDetailsButton").style.display = "block";
  }

  deleteAndAddItem = keyToBeDeleted => {
    const itemsAfterDeletion = this.state.items.filter(item => {
      return item.key !== keyToBeDeleted
    })
    const newItem = this.state.editedItem
    if (newItem.text !== '') {
      const items = [...itemsAfterDeletion, newItem]
      this.setState({
        items: items,
        editedItem: { text: '', key: '' },
      })
    }
    // document.getElementById(keyToBeDeleted+"readOnlyItem").style.display = "block";
    // document.getElementById(keyToBeDeleted+"editableItem").style.display = "none";

    document.getElementById(keyToBeDeleted+"readOnlyItem").remove();
    document.getElementById(keyToBeDeleted+"editableItem").remove();
  }
  render() {

    return (
      <div className="App">
        <TodoList
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          handleInputDetails = {this.handleInputDetails}
          currentItem={this.state.currentItem}
        />
        <TodoItems entries={this.state.items}
          deleteItem={this.deleteItem}
          editItem={this.editItem}
          cancelEditItem = {this.cancelEditItem}
          handleEditInput = {this.handleEditInput}
          handleEditInputDetails = {this.handleEditInputDetails}
          editedItem = {this.state.editedItem}
          markDone = {this.markDone}
          deleteAndAddItem = {this.deleteAndAddItem}
          showDetails = {this.showDetails}
          hideDetails = {this.hideDetails}
        />
      </div>
    )
  }
}

export default App
