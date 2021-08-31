
import React from 'react';
import { useParams } from 'react-router-dom';
import {useTags} from './useState';


type Params ={
  id:string
}
const Tag:React.FC = ()=>{
  const {findTag} = useTags()
  let {id} = useParams<Params>();
  const tag = findTag(parseInt(id))
  return(
    <div>{tag.name}</div>
  )
}
export {Tag}
