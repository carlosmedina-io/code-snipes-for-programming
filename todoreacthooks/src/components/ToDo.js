import styled from 'styled-components'
import CheckBox from './CheckBox'

const Li = styled.li`
  background: #031956;
  position: relative;
  list-style: none;
  box-sizing: border-box;
  height: 60px;
  line-height: 60px;
  cursor: pointer;
  margin-top: 5px;
  border-radius: 15px;
`

const Task = styled.label`
  position: relative;
  cursor: pointer;
  letter-spacing: .7px;
  padding-left: 45px;
  display: block;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
`

const Wrapper = styled.div`
  .task-done {
    color: #F1F1F0;
    text-decoration: line-through;
  }
  .unfinish-task {
    color: #FFFFFF;
  }
`

export default function ToDo({ task, complete, id, handleToggle: handleToggleTask }) {
  return (
    <Wrapper>
      <Li>
          <Task
            className={complete ? 'task-done' : 'unfinish-task'}
            onClick={handleToggleTask(id)}>
            <CheckBox complete={complete} />
            {task}
          </Task>
      </Li>
    </Wrapper>
  )
}