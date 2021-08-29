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
  return (
    <MyLayout>
      {selected.tags}
      <hr/>
      {selected.note}
      <TagsSection value={selected.tags} onChange={(tags)=>setSelected({
        ...selected,
        tags:tags
      })} />
      <NoteSection value={selected.note} onChange={(notes)=>setSelected({
        ...selected,
        note:notes
      })} />
      <CategorySection />
      <NumberPadSection />
    </MyLayout>
  );
};
export default Money;
