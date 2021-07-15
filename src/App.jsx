import "./App.css";
import { ArticleContainer } from './components/ArticleContainer';
import DeColorRojo from './components/DeColorRojo';
import { Title } from './components/Title';
import { Paragraph } from './components/Paragraph';
import EnNegrita from './components/EnNegrita';

export function App() {
  return (
    <ArticleContainer>
      <Title>
        Hola <i>Mundo</i>!
      </Title>
      <Paragraph>
        Párrafo de mi artículo
        <EnNegrita>
          <DeColorRojo> importante</DeColorRojo>
        </EnNegrita>!
      </Paragraph>
    </ArticleContainer>
  );
}

export default App;