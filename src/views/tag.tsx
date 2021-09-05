import React from 'react';
import { useParams,useHistory } from 'react-router-dom';
import {useTags} from './useTags';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Icon from '../components/Icon';
import {Button} from '../components/Button';
import {Input} from '../components/Input';
import {Center} from '../components/Center';
import {Space} from '../components/Space';


const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px;
  line-height: 20px;
  background: white;
  >.icon{
    width: 1.5em;
    height: 1.5em;
  }
`


const InputWrapper = styled.div`
  background:white;
  padding: 0 16px;
  margin-top: 8px;
`;
type Params ={
  id:string
}
const Tag:React.FC = ()=>{
  const {findTag,updateTags,deleteTags} = useTags()
  let { id:idString} = useParams<Params>();
  const tag = findTag(parseInt(idString))
  const tagsContent = (tag:{id:number,name:string})=>
    <div>
      <InputWrapper>
        <label>
          <Input label="标签名" value={tag.name}
                 onChange={(e)=>{updateTags(tag.id,{name:e.target.value})}}
                 type="text" placeholder="标签名" />
        </label>
      </InputWrapper>
      <Center>
        <Space/>
        <Space/>
        <Space/>
        <Button onClick={()=>deleteTags(tag.id)}>删除标签</Button>
      </Center>
    </div>
  const history = useHistory()
  const onClickBack = ()=>{
    history.goBack()
  }
  return(
    <Layout>
      <Topbar>
        <Icon onClick={onClickBack} name="left"/>
        <span>编辑标签</span>
        <Icon />
      </Topbar>
      {tag?tagsContent(tag):<Center>tag不存在</Center>}
    </Layout>
  )
}
export {Tag}
