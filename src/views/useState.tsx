import {useState} from 'react';
let id = 0
const createId = ()=>{
  id+=1
  return id
}
const data = [
  {id:createId(),name:'衣'},
  {id:createId(),name:'食'},
  {id:createId(),name:'住'},
  {id:createId(),name:'行'}
]
const useTags = ()=>{
  const [tags,setTags] = useState<{id:number,name:string}[]>(data
  )
  return {tags,setTags}
}
export {useTags}
