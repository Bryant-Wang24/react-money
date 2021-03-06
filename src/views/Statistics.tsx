import Layout from "components/Layout"
import CategorySection from './Money/CategorySection';
import {useState} from 'react';
import styled from 'styled-components';
import {useRecords} from '../hooks/useRecords';
import {useTags} from '../hooks/useTags';
import day from 'dayjs';

const CategoryWrapper = styled.div`
  background:white;
`;
const Item = styled.div`
  display:flex;
  justify-content: space-between;
  background: white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  > .note{
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`;
const Statistics = () =>{
  const [category,setCategory] = useState<'+'|'-'>('-')
  // const record = localStorage.getItem('records')
  const {records} = useRecords()
  const {getName} = useTags()
  console.log(records);
    return(
      <Layout>
        <CategoryWrapper>
          <CategorySection value={category} onChange={(value)=>setCategory(value)}/>
        </CategoryWrapper>
        <div>
          {records.map(r => {
            return <Item>
              <div className="tags">
                {r.tagIds.map(tagId => <span>{getName(tagId)}</span>)}
              </div>
              {r.note && <div className="note">
                {r.note}
              </div>}
              <div className="amount">
                ￥{r.amount}
              </div>
              {day(r.createdAt).format('YYYY年MM月DD日')}
            </Item>;
          })}
        </div>
      {/*<div>{JSON.stringify(records) }</div>*/}
      </Layout>
    ) 
}
export default Statistics