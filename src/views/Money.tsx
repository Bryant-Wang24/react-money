import Layout from "components/Layout";
import styled from "styled-components";
import CategorySection from "./Money/CategorySection";
import NoteSection from "./Money/NoteSection";
import NumberPadSection from "./Money/NumberPadSection";
import TagsSection from "./Money/TagsSection";
import {useState} from 'react';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;
type Category = '+'|'-'
const Money = () => {
  const [selected,setSelected] = useState({
    tags:[] as string[],
    note:'',
    category:'-' as Category,
    amount:0
  })
  //'obj:Partial<typeof selected>'表示obj的类型是 selected的类型 的一部分
  const onChange=(obj:Partial<typeof selected>)=>setSelected({
    ...selected,
    ...obj
  })
  return (
    <MyLayout>
      <TagsSection value={selected.tags} onChange={tags=>{onChange({tags})}} />
      <NoteSection value={selected.note} onChange={note=>{onChange({note})}} />
      <CategorySection value={selected.category} onChange={category=>{onChange({category})}} />
      <NumberPadSection value={selected.amount} onChange={amount=>{onChange({amount})}} onOK={()=>{}} />
    </MyLayout>
  );
};
export default Money;
