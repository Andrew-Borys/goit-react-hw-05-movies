import styled from 'styled-components';

export const FilmList = styled.ul`
  display: grid;
  max-width: calc(100vw - 30px);
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 30px;
  margin: 0px auto;
  padding: 15px 0px 0px;
  list-style: none;
  margin-bottom: 20px;
`;

export const FilmItem = styled.li`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  background-color: #bdb9a6;
  box-shadow: -2px -2px 7px rgb(109, 109, 109);
  transition: transform 300ms cubic-bezier(0.165, 0.84, 0.44, 1);
  :hover {
    transform: scale(1.03);
  }
`;

export const FilmImg = styled.img`
  display: block;
  width: 100%;
  height: 85%;
  object-fit: cover;
`;

export const ButtonsWrapper = styled.div`
  margin-left: auto;
  margin-left: auto;
  display: flex;
  justify-content: center;
`;
