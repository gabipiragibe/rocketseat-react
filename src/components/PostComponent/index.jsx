import ptBR from "date-fns/locale/pt-BR";
import { Avatar } from "../Avatar";
import { Comments } from "../Comments";
import * as S from "./styles";
import { format, formatDistanceToNow } from "date-fns";

export const PostComponent = ({ author, publishedAt, content }) => {
  const publishedDataFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  return (
    <S.Container>
      <S.Header>
        <S.Author>
          <Avatar src={author.avatarUrl} />
          <S.AuthorInfo>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </S.AuthorInfo>
        </S.Author>
        <S.PostTime
          title={publishedDataFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </S.PostTime>
      </S.Header>
      <div content>
        {content.map((item, index) => {
          if (item.type === "paragraph") {
            return <S.TextContent key={index}>{item.content}</S.TextContent>;
          } else if (item.type === "link") {
            return (
              <S.LinkContent key={index} href="#">
                {item.content}
              </S.LinkContent>
            );
          }
        })}
      </div>

      <S.CommentForm>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Escreva seu comentário" />
        <S.DisplayButton>
          <S.CommentButton type="submit">Publicar</S.CommentButton>
        </S.DisplayButton>
      </S.CommentForm>
      <S.CommentList>
        <Comments />
        <Comments />
        <Comments />
      </S.CommentList>
    </S.Container>
  );
};
