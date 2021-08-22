import { Link } from "react-router-dom";
import styled from "styled-components";
import Icon from "./Icon";
// import x from 'icons/label.svg'      因为tree shaking的缘故，改用require来引入svg
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
                        <Icon name="label"/>
                        标签页
                    </Link>
                </li>
                <li>
                    <Link to="/money">
                    <Icon name="money"/>
                        记账页  
                    </Link>
                </li>
                <li>
                    <Link to="/statistics">
                    <Icon name="chart"/>
                        统计页
                    </Link>
                </li>
          </ul>
        </NavWrapper>
    )
}
export default Nav