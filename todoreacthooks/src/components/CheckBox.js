import styled from 'styled-components'

const Wrapper = styled.div`
  .circle {
    position: absolute;
    content: '';
    top: 18px;
    left: 10px;
    height: 25px;
    width: 25px;
    border-radius: 20px;
    box-sizing: border-box;
  }

  .checked {
    border: none;
    background: #173487;
  }

  .unchecked {
    border: 2px solid #971fc3;
    background: none;
  }

  .checked > .mark {
    opacity: 1;
  }

  .mark {
    position: absolute;
    top: 4px;
    left: 6px;
    width: 12px;
    height: 5px;
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    opacity: 0;
    transition: opacity 50ms ease;

    &::before{
      position: absolute;
      content: '';
      left: 11px;
      width: 2px;
      height: 11px;
      background-color: #fff;      
    }
    
    &::after{
      position: absolute;
      content: '';
      top: 9px;
      left: 7px;
      width: 4px;
      height: 2px;
      background-color: #fff;
    }
  }
`

export default function CheckBox({complete}) {
  return (
    <Wrapper>
      <label className={complete ? 'circle checked' : 'circle unchecked'}>
        <span className='mark'></span>
      </label>
    </Wrapper>
  )
}