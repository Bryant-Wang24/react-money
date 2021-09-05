import {useEffect, useRef} from 'react';


const useUpdate = (fn:()=>void,tags:any[])=>{
  const count = useRef(0)
  useEffect(()=>{
    count.current+=1
    console.log(count.current);
  })
  useEffect(()=>{//原本这里的useEffect会执行两次，第一次把tags变为空数组[],，第二次把空数组变成有值的数组
    if (count.current>1){//设置一个值，把useEffect第一次的无效执行去掉
      fn()
      console.log(tags);
      console.log('执行');
    }
  }, [fn, tags])
}

export {useUpdate}