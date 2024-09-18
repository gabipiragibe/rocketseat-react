import { Header } from "./components/Header/index.jsx";
import { Sidebar } from "./components/Sidebar/index.jsx";
import { Post } from "./Post";

import * as S from "./styles.js";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <S.Wrapper>
        <Sidebar />
        <main>
          <Post author="Gabriela Piragibe" content="Primeiro post" />
          <Post author="Gabriela Piragibe" content="Segundo post" />
        </main>
      </S.Wrapper>
    </div>
  );
}
