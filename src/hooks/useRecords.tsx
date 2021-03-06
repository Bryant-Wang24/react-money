import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

type RecordItem = {
  tagIds:number[],
  note:string,
  category:'-' | '+',
  amount:number,
  createdAt:string
}
type newRecordItem = Omit<RecordItem, 'createdAt'>
const useRecords = ()=>{
  const [records,setRecords] = useState<RecordItem[]>([])
  useEffect(()=>{
    setRecords(JSON.parse(localStorage.getItem('records')||'[]'))
  },[])
  useUpdate(()=>{
    localStorage.setItem('records',JSON.stringify(records))
  },[records])
const addRecord = (newRecord:newRecordItem)=>{
  const record = {...newRecord,createdAt:(new Date().toISOString())}
  setRecords([...records,record])
}
  return {records,addRecord}
}
export {useRecords}