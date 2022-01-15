import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import TasksSource from '../sources/TasksSource'
import Header from './Header'
import ToDoList from './ToDoList'

const Wrapper = styled.section`
  background-color: #344fa1;
  width: 30%;
  min-width: 25em;
  border-radius: 50px;
  padding: 20px 0px;
  margin: 10px auto;
`;

const Input = styled.input.attrs(props => ({
  type: 'text',
  maxLength: '20',
}))`
  border: none;
  color: #222;
  background: #CDD8FF;
  padding: 10px 20px;
  font-size: 1.2em;
  letter-spacing: 1px;
  font-weight: 500;
  width: 75%;
  margin: 0 auto;
  &:focus {
    outline: none;
  }
`

const Footer = styled.footer`
  margin-top: 20px;
  justify-content: center;
  align-content: center;
`

const DivCenter = styled.div`
  text-align: center;
`

const RemoveTaskButton = styled.div`
  background: #ea05ff;
  color: white;
  width: 50%;
  padding:15px;
  text-align: center;
  border-radius: 10px;
  margin: 30px auto;
  letter-spacing: .5px;
  transition: all .3s ease;
  display: block;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px #ea05ff,
      0 0 50px #ea05ff;
  }
  &:active {
    background: #B900C9;
    box-shadow: none;
    transition: none;
  }
`

export default function ToDoApp() {
  const [toDoList, setToDoList] = useState(TasksSource)
  const [newToDoTask, setNewToDoTask] = useState('')
  const toDoInputRef = useRef(null)
  
  const handleToggle = (id) => {
    const toDoListUpdated = toDoList.map(task => {
      return task.id === id
        ? { ...task, complete: !task.complete }
        : { ...task }
    })
    setToDoList(toDoListUpdated)
  }
    
  const handleRemoveCompletedTask = () => {
    const toDoListUpdated = toDoList.filter(task => {
      return !task.complete
    })
    setToDoList(toDoListUpdated)
  }
    
  const handleAddToDo = () => {
    const newTask = {
      id: toDoList.length + 1,
      task: newToDoTask,
      complete: false,
    }
    setToDoList(previousValue => [...previousValue, newTask])
    setNewToDoTask('')
    toDoInputRef.current.focus()
  }
    
  const handleInputOnChange = (e) => {
    setNewToDoTask(e.currentTarget.value)
  }
  
  const handleInputKeypress = (e) => {
    if (e.key === 'Enter' || e.charCode === 13) {
      handleAddToDo()
    }
  }
  
  useEffect(() => {
    toDoInputRef.current.focus()
  }, [])
    
  return (
    <Wrapper>
      <Header />
      <ToDoList
        toDoList={toDoList}
        handleToggle={handleToggle}
        handleRemoveCompletedTask={handleRemoveCompletedTask} />
      <Footer>
        <DivCenter>
          <Input
            value={newToDoTask}
            onChange={handleInputOnChange}
            ref={toDoInputRef}
            onKeyPress={handleInputKeypress}
            placeholder='Add new task' />
        </DivCenter>
        <RemoveTaskButton
          onClick={handleRemoveCompletedTask}>
            Remove Finished Task
        </RemoveTaskButton>
        {/*<button onClick={handleAddToDo}>Add To Do</button>*/}
      </Footer>
    </Wrapper>
  )
}