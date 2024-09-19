import styled from "styled-components";

export const Container = styled.article`
  background: var(--gray-800);
  border-radius: 8px;
  padding: 2.5rem;
  margin-bottom: 2rem;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PostTime = styled.time`
  font-size: 0.875rem;
  color: var(--gray-400);
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ProfileImage = styled.img`
  box-sizing: initial;
  width: 5rem;
  height: 5rem;
  border-radius: 8px;
  border: 4px solid var(--gray-800);
  outline: 2px solid var(--purple-500);
`;

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AuthorName = styled.strong`
  display: block;
  color: var(--gray-100);
  line-height: 1.6;
`;

export const AuthorRole = styled.span`
  display: block;
  font-size: 0.875rem;
  color: var(--gray-400);
  line-height: 1.6;
`;

export const Post = styled.div`
  margin-top: 2rem;
`;

export const TextContent = styled.p`
  margin-top: 1rem;
`;

export const LinkContent = styled.a`
  font-weight: bold;
  color: var(--purple-500);

  :hover {
    color: var(--purple-3000);
  }
`;
