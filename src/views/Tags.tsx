import Layout from "components/Layout"
import {useTags} from './useState';
import styled from 'styled-components';
import Icon from '../components/Icon';

const TagList = styled.ol`
  font-size: 16px;
  background:white;
  > li{
    //#e5e5e7
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    padding: 12px 16px 12px 0;
    margin-left: 16px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    > .icon{
      width: 2em;
      height: 2em;
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
  const {tags,setTags} = useTags()
    return(
      <Layout>
          <TagList>
            {tags.map(t=>
              <li key={t}>
                <span className="oneLine">{t}很长很长很长很长很很长很长很长很长很长很长长很长</span>
                <Icon name="right"/>
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