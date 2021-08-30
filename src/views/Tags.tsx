import Layout from "components/Layout"
import {useTags} from './useState';
import styled from 'styled-components';
import Icon from '../components/Icon';
import { Link } from "react-router-dom";

const TagList = styled.ol`
  font-size: 16px;
  background:white;
  > li{
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    margin-left: 16px;
    >a{
      //border: 1px solid red;
      padding: 12px 16px 12px 0;
      display:flex;
      justify-content: space-between;
      align-items: center;
      > .icon{
        width: 1.5em;
        height: 1.5em;
      }
    }
  }
`;
const Button = styled.button`
  font-size: 18px; border: none; padding: 8px 12px;
  background: #f60; border-radius: 4px;
  color: white;
`;
const Center = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Space = styled.div`
  height: 16px;
`

const Tags = () =>{
  // const [tags,setTags] = useState(['衣','食','住','行'])
  const {tags} = useTags()
    return(
      <Layout>
          <TagList>
            {tags.map(tag=>
                <li key={tag}>
                  <Link to={'/tags/' + tag}>
                  <span className="oneLine">{tag}</span>
                  <Icon name="right"/>
                  </Link>
                </li>
            )}
          </TagList>
        <Center>
          <Space/>
          <Space/>
          <Space/>
          <Button>新增标签</Button>
        </Center>
      </Layout>
    )
}
export default Tags
