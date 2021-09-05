import Layout from "components/Layout";
import styled from "styled-components";
import CategorySection from "./Money/CategorySection";
import NoteSection from "./Money/NoteSection";
import NumberPadSection from "./Money/NumberPadSection";
import TagsSection from "./Money/TagsSection";
import {useState} from 'react';
import {useRecords} from '../hooks/useRecords';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;
type Category = '+'|'-'
const defaultFormData = {
  tagIds: [] as number[],
  note: '',
  category: '-' as Category,
  amount: 0
};
const Money = () => {
  const [selected,setSelected] = useState(defaultFormData)
  const {addRecords} = useRecords()
  //'obj:Partial<typeof selected>'表示obj的类型是 selected的类型 的一部分
  const onChange=(obj:Partial<typeof selected>)=>setSelected({
    ...selected,
    ...obj
  })
  const onSubmit = ()=>{
    addRecords(selected)
    alert('保存成功')
    setSelected(defaultFormData)
  }
  return (
    <MyLayout>
      {JSON.stringify(selected)}
      <TagsSection value={selected.tagIds} onChange={tagIds=>{onChange({tagIds})}} />
      <NoteSection value={selected.note} onChange={note=>{onChange({note})}} />
      <CategorySection value={selected.category} onChange={category=>{onChange({category})}} />
      <NumberPadSection value={selected.amount} onChange={amount=>{onChange({amount})}} onOK={()=>{
        onSubmit()
      }} />
    </MyLayout>
  );
};
export default Money;
