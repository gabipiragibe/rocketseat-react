import * as S from "./styles";

export const PostComponent = () => {
  return (
    <S.Container>
      <S.Header>
        <S.Author>
          <S.ProfileImage src="https://github.com/gabipiragibe.png" />
          <S.AuthorInfo>
            <strong>Gabriela Piragibe</strong>
            <span>Web Developer</span>
          </S.AuthorInfo>
        </S.Author>
        <S.PostTime
          title="19 de setembro às 19:46h"
          dateTime="2024-09-19 19:46:00"
        >
          Publicado há 1h
        </S.PostTime>
      </S.Header>
      <div content>
        <S.TextContent>Fala galeraa 👋</S.TextContent>
        <S.TextContent>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </S.TextContent>
        <S.TextContent>
          <S.LinkContent href="">jane.design/doctorcare</S.LinkContent>
        </S.TextContent>
        <S.TextContent>
          <S.LinkContent href="">#novoprojeto</S.LinkContent>{" "}
          <S.LinkContent href="">#nlw</S.LinkContent>{" "}
          <S.LinkContent href=""> #rocketseat</S.LinkContent>
        </S.TextContent>
      </div>
    </S.Container>
  );
};
