import { ThumbsUp, Trash } from "phosphor-react";
import * as S from "./styles";
import { Avatar } from "../Avatar";
export const Comments = () => {
  return (
    <S.Container>
      <Avatar
        hasBorder={false}
        src="https://github.com/gabipiragibe.png"
        alt=""
      />
      <S.CommentBox>
        <S.CommentContent>
          <S.Header>
            <S.AuthorAndTime>
              <S.Author>Gabriela Piragibe</S.Author>
              <S.DateAndTime
                title="19 de setembro às 19:46h"
                dateTime="2024-09-19 19:46:00"
              >
                Cerca de 1h atrás
              </S.DateAndTime>
            </S.AuthorAndTime>
            <S.DeleteButton title="Deletar comentário">
              <Trash size={20} />
            </S.DeleteButton>
          </S.Header>
          <p>Muito bom, parabéns!</p>
        </S.CommentContent>
        <S.Footer>
          <S.FooterButton>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </S.FooterButton>
        </S.Footer>
      </S.CommentBox>
    </S.Container>
  );
};
