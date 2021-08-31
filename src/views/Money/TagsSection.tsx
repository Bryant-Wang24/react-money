import styled from "styled-components";
import React from "react";
import {useTags} from '../useState';
import {createId} from "../../lib/createId";

const Wrapper = styled.section`
  background: #FFFFFF; padding: 12px 16px;
  flex-grow: 1; display:flex; flex-direction: column;
  justify-content: flex-end; align-items: flex-start;
  > ol { margin: 0 -12px;
    > li{
       background: #D9D9D9; border-radius: 18px;
       display:inline-block; padding: 3px 18px; 
       font-size: 14px; margin: 8px 12px;
       &.selected{
         background: pink;
       }
    }
  }
  > button{
    background:none; border: none; padding: 2px 4px;
    border-bottom: 1px solid #333; color: #666;
    margin-top: 8px;
  }
`
type Props = {
  value:number[],
  onChange:(value:number[])=>void
}
const TagsSection: React.FC<Props> = (props) => {
  // 此处的”<string[]>“表示“['衣','食','住','行']“是一个字符串数组
  // const [tags,setTags] = useState<string[]>(['衣','食','住','行'])
  const {tags,setTags} = useTags()
  const  selectedTagIds = props.value

  const onToggleTag = (tagId:number)=>{
    const index = selectedTagIds.indexOf(tagId)
    if(index>=0){
      // 如果 tagId 已被选中，就复制所有没有被选中的 tagId，作为新的 selectedTag
      props.onChange(selectedTagIds.filter(t=>t!==tagId))
    }else{
      props.onChange([...selectedTagIds,tagId])
    }
  }
  const addTag = ()=>{
    const tagName = window.prompt('请添加一个新的标签')
    if(tagName){
      setTags([...tags,{id:createId(),name:tagName}])
    }
  }
  const getClass = (tagId:number)=>selectedTagIds.indexOf(tagId)>=0 ? 'selected':''
    return(
        <Wrapper>
            <ol>
                {tags.map(tag=>
                <li key={tag.id} onClick={()=>{onToggleTag(tag.id)}}
                className={getClass(tag.id)}>{tag.name}</li>)}
            </ol>
            <button onClick={addTag}>新增标签</button>
        </Wrapper>
    )
}


export default TagsSection
