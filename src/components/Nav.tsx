import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Icon from "./Icon";
// import x from 'icons/tag.svg'      因为tree shaking的缘故，改用require来引入svg
// console.log(x);



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
        &.selected{
          color: red;
          .icon{
            fill: red;
          }
        }
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
                <li >
                    <NavLink to="/tags" activeClassName="selected">
                        <Icon name="tag"/>
                        标签页
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/money" activeClassName="selected">
                    <Icon name="money"/>
                        记账页  
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/statistics" activeClassName="selected">
                    <Icon name="chart"/>
                        统计页
                    </NavLink>
                </li>
          </ul>
        </NavWrapper>
    )
}
export default Nav