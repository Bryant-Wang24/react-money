import Layout from "components/Layout"
import {useTags} from './useState';

const Tags = () =>{
  // const [tags,setTags] = useState(['衣','食','住','行'])
  const {tags,setTags} = useTags()
    return(
      <Layout>
          <ol>
            {tags.map(t=>
              <li key={t}>{t}</li>
            )}
          </ol>
      </Layout>
    )
}
export default Tags