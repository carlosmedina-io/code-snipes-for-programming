import styled from 'styled-components'

const Task = styled.li`
  background: #031956;
  list-style: none;
  padding: 5px 20px;
  box-sizing: border-box;
  height: 60px;
  line-height: 50px;
  margin: 0 auto;
  cursor: pointer;
  margin-top: 5px;
  border-radius: 15px;
  letter-spacing: .5px;
`

const Wrapper = styled.div`
  .task-done {
    color: white;
    text-decoration:line-through;
    opacity: .7;
  }
  .unfinish-task {
    color: white;
  }
`

export default function ToDo({ task, complete, id, handleToggle }) {
  return (
    <Wrapper>
      <Task
        className={complete ? 'task-done' : 'unfinish-task'}
        onClick={() => handleToggle(id)}>
        {task}
      </Task>
    </Wrapper>
  )
}