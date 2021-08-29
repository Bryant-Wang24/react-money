import React, { useRef} from "react";
import styled from "styled-components";

const Wrapper = styled.section`
    background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
  > label {
    display:flex;
    align-items: center;
    > span { margin-right: 16px; white-space: nowrap; }
    > input {
      display:block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
    }
  }
`
type Props = {
  value:string,
  onChange:(value:string)=>void
}
const NoteSection:React.FC<Props> = (props)=>{
  // const [note,setNote] = useState('')
  const note = props.value
  const refInput = useRef<HTMLInputElement>(null)  //获取Input输入框的值，null为设置的初始默认值
  const onBlur = ()=>{   //鼠标离开输入框触发事件，类似于vue的.lazy修饰符
    if(refInput.current!==null){
      props.onChange(refInput.current.value);
    }
  }
  // console.log(note);
  return(
    <Wrapper>
      <label>
          <span>备注</span>
          <input type="text" ref={refInput} defaultValue={note} onBlur={onBlur} placeholder="在这里添加备注"/>
        </label>
    </Wrapper>
  )
}

export default NoteSection