import React, { Component } from 'react';
import styled from 'styled-components'

const Item = styled.div`
  background: #343744;
  border-radius: 10px;
  padding: 14px;
  margin-bottom: 7px;
  color: ${props => props.done ? '#1fd84d' : '#c7c8cb'}
  text-decoration: ${props => props.done ? 'line-through' : 'auto'}
`

class ToDoItem extends Component {
  static defaultProps = {
    done: false
  }
  state = {
    done: this.props.done
  }

  toggleDone = () => {
    this.setState({ done: !this.state.done })

    // fetch(`https://jsonplaceholder.typicode.com/todos/${this.props.id}`, 
    // { method: 'PUT', 
    //   headers: { 
    //     "Content—Type": 'application/json: charset=utf-8' 
    //   }, 
    //   body: JSON.stringify({ 
    //     todo_item: { 
    //       done: !this.state.done 
    //     } 
    //   })
    //   }).then(response => { if(response.ok) { 
    //     this.setState({done: !this.state.done}) 
    //   }
    // })
  }

  render() {
    const { id, done, text } = this.props

    return (
      <Item onClick={this.toggleDone} className={this.state.done ? 'doneTodo' : ''}>
        <p>{text}</p>
      </Item>
    )
  }


}


export default ToDoItem;