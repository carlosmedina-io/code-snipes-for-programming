import styled from 'styled-components'
import ToDo from './ToDo'

const List = styled.section`
  width: 88%;
  margin: 0 auto;
`

const TaskTitle = styled.div`
  color: #6f8cdc;
  font-size: 0.8em;
  letter-spacing: 3px;
  font-weight: bold;
  margin-bottom: 20px;
  margin-left: 5px;
`

export default function ToDoList({ toDoList, handleToggle }) {
  return (
    <>
      <List>
        <TaskTitle>TASK LIST</TaskTitle>
        {toDoList?.map((toDo, idx) => (
          <ToDo
          key={`key_${idx}`}
          {...toDo}
          handleToggle={handleToggle}/>
        ))}
      </List>
      
    </>
  )
}