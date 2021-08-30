import styled from 'styled-components';
import React from "react";
import { useParams } from 'react-router-dom';

const Wrapper = styled.div`
  border: 1px solid red;
`

const Tag:React.FC = ()=>{
  let tag: any;
  ({tag} = useParams());
  return(
    <Wrapper>{tag}</Wrapper>
  )
}
export {Tag}
