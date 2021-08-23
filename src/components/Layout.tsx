import React from 'react';
import styled from "styled-components"
import Nav from "./Nav";


const Wrapper = styled.div`
border: 1px solid red;
height: 100vh;
display: flex;
flex-direction: column;
`
const Main = styled.div`
border: 1px solid green;
flex: 1;
overflow: auto;
`

const Layout = (props: any)=>{
    console.log('接收参数',props.children);
    return(
        <Wrapper>
            <Main>
                {props.children}
            </Main>
            <Nav/>
        </Wrapper>
    )
}

export default Layout