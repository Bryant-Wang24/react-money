import Layout from "components/Layout"
import CategorySection from './Money/CategorySection';
import {useState} from 'react';
import styled from 'styled-components';

const CategoryWrapper = styled.div`
  background:white;
`;
const Statistics = () =>{
  const [category,setCategory] = useState<'+'|'-'>('-')
    return(
      <Layout>
        <CategoryWrapper>
          <CategorySection value={category} onChange={(value)=>setCategory(value)}/>
        </CategoryWrapper>
      </Layout>
    ) 
}
export default Statistics