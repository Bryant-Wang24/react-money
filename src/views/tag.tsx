import React from 'react';
import { useParams } from 'react-router-dom';
import {useTags} from './useState';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Icon from '../components/Icon';
import {Button} from '../components/Button';


const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px;
  line-height: 20px;
  background: white;
`

type Params ={
  id:string
}
const Tag:React.FC = ()=>{
  const {findTag} = useTags()
  let {id} = useParams<Params>();
  const tag = findTag(parseInt(id))
  return(
    <Layout>
      <Topbar>
        <Icon name="left"/>
        <span>编辑标签</span>
        <Icon />
      </Topbar>
      <div>
        <label>
          <span>标签名</span>
          <input type="text" placeholder="标签名" />
        </label>
      </div>
      <div>
        <Button>删除标签</Button>
      </div>
    </Layout>
  )
}
export {Tag}
