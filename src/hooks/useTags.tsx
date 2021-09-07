import {useEffect, useState} from 'react';
import {createId} from "../lib/createId";
import {useUpdate} from './useUpdate';

const useTags = ()=>{
  const [tags,setTags] = useState<{id:number,name:string}[]>([])
  useEffect(()=>{
     let localTags = JSON.parse(localStorage.getItem('tags') || '[]')
    if (localTags.length===0){
      localTags = [
        {id:createId(),name:'衣'},
        {id:createId(),name:'食'},
        {id:createId(),name:'住'},
        {id:createId(),name:'行'}
      ]
    }
    setTags(localTags)
  },[])
  useUpdate(()=>{
    localStorage.setItem('tags',JSON.stringify(tags))
  },[tags])
  const findTag = (id:number)=>
    tags.filter(tag=>tag.id===id)[0]
  // 封装一个可以根据id找到需要编辑的标签的index的函数
  const findIndex = (id:number)=>{
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i;
        break;
      }
    }
    return result
  }

  //编辑更新标签
  const updateTags = (id:number,{name}:{name:string})=>{
    setTags(tags.map(tag => {
      return tag.id === id ? {id, name} : tag;
    }));
    // //获取需要修改的标签对应的index
    // const index = findIndex(id)
    // //遵循react数据不可变的原则，深拷贝一份tags的值
    // const tagsClone = JSON.parse(JSON.stringify(tags))
    // // 把 tagsClone 的第 index 删掉，换成 {id:id, name: obj.name}
    // tagsClone.splice(index,1,{id,name:obj.name})
    // setTags(tagsClone)
    // console.log('tagsClone',tagsClone);
  }
  const deleteTags = (id:number)=>{
    setTags(tags.filter(tag=>tag.id!==id))
    // //获取需要删除的标签对应的index
    // const index = findIndex(id)
    // //遵循react数据不可变的原则，深拷贝一份tags的值
    // const tagsClone = JSON.parse(JSON.stringify(tags))
    // // 把 tagsClone 的第 index 删掉，
    // tagsClone.splice(index,1)
    // setTags(tagsClone)
  }
  const addTag = ()=>{
    const tagName = window.prompt('请添加一个新的标签')
    if(tagName&&tagName.indexOf(' ')<0){
      setTags([...tags,{id:createId(),name:tagName}])
    }
  }
  const getName = (id:number)=>{
    const tag = tags.filter(t=>t.id===id)[0]
    return tag?tag.name:''
  }
  return {tags,setTags,findTag, updateTags,deleteTags,addTag,getName}
}
export {useTags}
