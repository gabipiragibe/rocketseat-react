import ptBR from "date-fns/locale/pt-BR";
import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import * as S from "./styles";
import { format, formatDistanceToNow } from "date-fns";
import { useState } from "react";

export const PostComponent = ({ author, publishedAt, content }) => {
  const [comments, setComments] = useState([
    "Post legal!!"
  ])
  const [newCommentText, setnewCommentText] = useState('');

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

  const handleCreateNewComment = () => {
    event.preventDefault() 

    setComments([...comments, newCommentText]);
    setnewCommentText('');

  }

  const handleNewCommentChange = () => {
    event.target.setCustomValidity('');
    setnewCommentText(event.target.value);
  }

  const handleNewCommentInvalid = () => {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  const deleteComment = (commentToDelete) => {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete;
    })
    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

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

      <S.CommentForm onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback</strong>

        <textarea 
        name="comment" 
        placeholder="Escreva seu comentário" 
        value={newCommentText} 
        onChange={handleNewCommentChange}
        onInvalid={handleNewCommentInvalid}
        required
        />

        <S.DisplayButton>
          <S.CommentButton type="submit" disabled={isNewCommentEmpty}>Publicar</S.CommentButton>
        </S.DisplayButton>
      </S.CommentForm>
      <S.CommentList>
        {comments.map((comment) => (
          //pra cada comentário retorna um componente de comentário
          <Comment 
            key={comment} 
            content={comment} 
            onDeleteComment={deleteComment}
          />
        ))}
      </S.CommentList>
    </S.Container>
  );
};
