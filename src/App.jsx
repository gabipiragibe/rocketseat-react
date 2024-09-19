import { Header } from "./components/Header/index.jsx";
import { Sidebar } from "./components/Sidebar/index.jsx";
import { PostComponent } from "./components/PostComponent";

import * as S from "./styles.js";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <S.Wrapper>
        <Sidebar />
        <main>
          <PostComponent author="Gabriela Piragibe" content="Primeiro post" />
          <PostComponent author="Gabriela Piragibe" content="Segundo post" />
        </main>
      </S.Wrapper>
    </div>
  );
}
