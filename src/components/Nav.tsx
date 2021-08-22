import { Link } from "react-router-dom";
import styled from "styled-components";
// import x from 'icons/label.svg'
// console.log(x);
require('icons/label.svg')
require('icons/money.svg')
require('icons/chart.svg')


const NavWrapper = styled.nav`
  ul{
    display: flex;
    li{
      width: 33.3333%;
      text-align: center;
      a{
        padding: 6px 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .icon{
          width: 24px;
          height: 24px;
      }
      }
      
    }
  }
`

const Nav = ()=>{
    return(
        <NavWrapper>
            <ul>
            <li>
            <Link to="/tags">
            <svg className="icon">
                <use xlinkHref="#label"/>
            </svg>
              标签页</Link>
            </li>
            <li>
            <Link to="/money">
            <svg className="icon">
                <use xlinkHref="#money"/>
            </svg>
              记账页</Link>
            </li>
            <li>
            <Link to="/statistics">
            <svg className="icon">
                <use xlinkHref="#chart"/>
            </svg>
              统计页</Link>
            </li>
          </ul>
        </NavWrapper>
    )
}
export default Nav