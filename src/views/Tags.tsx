import Layout from "components/Layout"
import {useTags} from './useTags';
import styled from 'styled-components';
import Icon from '../components/Icon';
import { Link } from "react-router-dom";
import {Button} from '../components/Button';
import {Center} from '../components/Center';
import {Space} from '../components/Space';

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

const Tags = () =>{
  // const [tags,setTags] = useState(['衣','食','住','行'])
  const {tags,addTag} = useTags()
    return(
      <Layout>
          <TagList>
            {tags.map(tag=>
                <li key={tag.id}>
                  <Link to={'/tags/' + tag.id}>
                  <span className="oneLine">{tag.name}</span>
                  <Icon name="right"/>
                  </Link>
                </li>
            )}
          </TagList>
        <Center>
          <Space/>
          <Space/>
          <Space/>
          <Button onClick={addTag}>新增标签</Button>
        </Center>
      </Layout>
    )
}
export default Tags
