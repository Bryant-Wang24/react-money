import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
    font-size: 24px;
  > ul{
    display:flex;
    > li {
      width: 50%; 
      text-align:center;
      padding: 16px 0;
      position:relative;
      &.selected::after{
        content: '';
        display:block; 
        height: 3px;
        background:#333;
        position:absolute;
        bottom:0;
        width: 100%;
        left: 0;
      }
    }
  }
`
type Category = '+'|'-'
type Props = {
  value:Category,
  onChange:(value:Category)=>void
}
const CategorySection:React.FC<Props> = (props)=>{
  const categoryMap = {'+':'收入','-':'支出'};
  type X = typeof categoryMap    
  type Y = keyof X     //获取 category的类型
  const [categoryList] =useState<Y[]>(['+','-']) //这里的Y就是获取到的category的类型
  // const [category,setCategory] = useState('-')
  const category = props.value
  return(
    <Wrapper>
      <ul>
        {categoryList.map(c=>
          <li key={c} className={category===c?'selected':''} onClick={()=> props.onChange(c)}>{categoryMap[c]}</li>
          )}
        {/* <li  className="selected">支出</li> */}
        
      </ul>
    </Wrapper>
  )
}
export default CategorySection