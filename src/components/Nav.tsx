import { Link } from "react-router-dom";
import styled from "styled-components";
// import x from 'icons/label.svg'

const NavWrapper = styled.nav`
  border: 1px solid black;
  ul{
    display: flex;
    li{
      width: 33.3333%;
      text-align: center;
      padding: 16px;
    }
  }
`

const Nav = ()=>{
    return(
        <NavWrapper>
            <ul>
            <li>
                {/* <img src={x} alt="" /> */}
              <Link to="/tags">标签页</Link>
            </li>
            <li>
              <Link to="/money">记账页</Link>
            </li>
            <li>
              <Link to="/statistics">统计页</Link>
            </li>
          </ul>
        </NavWrapper>
    )
}
export default Nav