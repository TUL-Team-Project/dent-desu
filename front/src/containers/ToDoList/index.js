import React, { Component } from 'react';
import ToDoItem from '../../components/ToDoItem/index';
import NewToDoForm from '../../components/NewToDoForm/index';
import styled from 'styled-components'

const Container = styled.div`
  background: #2b2e39;
  margin: 0 auto;
  width: 80%;
  max-width: 600px;
  padding: 14px;
  border-radius: 14px;
  margin-top: 14px;
`

const Header = styled.h1`
  color: #fff;
`

class ToDoList extends Component {

  componentDidMount = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => this.setState({ tasks: json }))
  }

  static defaultProps = {
    tasks: [
      // {done: true, text: 'Pranie'},
      // {done: false,text: 'Prasowanie'},
      // {done: false,text: 'Obiad'} 
    ],
    title: 'Lista'
  }

  state = {
    tasks: this.props.tasks,
    draft: ''
  }

  updateDraft = (event) => {
    this.setState({ draft: event.target.value })
  }

  addTask = () => {
    const { tasks, draft } = this.state
    const list = tasks
    list.push({ text: draft, done: false })
    this.setState({ tasks: list, draft: '' })
  }

  render() {
    const { title } = this.props
    const { tasks, draft } = this.state

    return (
      <Container>
        <Header>{title}</Header>
        {tasks.map(tasks => <ToDoItem id={tasks.id} key={tasks.key} text={tasks.title} done={tasks.completed} />)}
        <NewToDoForm
          onSubmit={this.addTask}
          onChange={this.updateDraft}
          draft={draft}
        />
      </Container>
    )
  }
}

export default ToDoList;