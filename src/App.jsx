import { Header } from "./components/Header/index.jsx";
import { Sidebar } from "./components/Sidebar/index.jsx";
import { PostComponent } from "./components/PostComponent";

import * as S from "./styles.js";

import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/gabipiragibe.png",
      name: "Gabriela Piragibe",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          " Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 ",
      },
      { type: "paragraph", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2024-10-03 17:35:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/gabipiragibe.png",
      name: "Aline Soares",
      role: "Recruiter",
    },
    content: [
      { type: "paragraph", content: "Fala galera" },
      {
        type: "paragraph",
        content:
          " Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 ",
      },
      { type: "paragraph", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2024-10-03 17:35:00"),
  },
];

export const App = () => {
  return (
    <div>
      <Header />
      <S.Wrapper>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <PostComponent
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </S.Wrapper>
    </div>
  );
};
