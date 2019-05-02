import React, { Component } from 'react'
// import './App.css'
import TodoList from './TodoList'
import TodoItems from './TodoItems'
import ls from 'local-storage'
import {browserHistory} from 'react-router'

window.onbeforeunload = function() {
ls.clear();
return '';
};

class App extends Component {

  inputElement = React.createRef()
  constructor() {
    super()
    if (!ls.get('isUserAuthenticated')) {
      browserHistory.replace('/')
    }
    this.state = {
      items: ls.get('items') || [],
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

  logOut() {
    ls.set('isUserAuthenticated', false)
    browserHistory.replace('/')
  }
  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    ls.set('items', filteredItems)
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
    ls.set('items', items)
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
      ls.set('items', items)
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
      ls.set('items', items)
      this.setState({
        items: items,
        editedItem: { text: '', key: '' },
      })
    }
    document.getElementById(keyToBeDeleted+"readOnlyItem").remove();
    document.getElementById(keyToBeDeleted+"editableItem").remove();
  }
  render() {

    return (
      <div className="App">
        <button onClick={this.logOut}>LogOut</button>
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
