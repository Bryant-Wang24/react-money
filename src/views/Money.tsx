import Layout from "components/Layout"
import styled from "styled-components"

const TagsSection = styled.section`
    
`
const NotesSection = styled.section`
    
`
const CategorySection = styled.section`
    
`
const NumberPadSection = styled.section`
    
`

const Money = () =>{
    return(
      <Layout>
          <TagsSection>
            <ol>
                <li>衣</li>
                <li>食</li>
                <li>住</li>
                <li>行</li>
            </ol> 
            <button>新增标签</button>
          </TagsSection>
          <NotesSection>
              <label htmlFor="">备注</label>
              <input type="text" />
          </NotesSection>
          <CategorySection>
            <div>支出</div>
            <div>收入</div>
          </CategorySection>
          <NumberPadSection>
              数字面板
          </NumberPadSection>
      </Layout>
    ) 
}
export default Money