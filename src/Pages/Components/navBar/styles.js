import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const Logo = styled.h1`
  color: #f3ca20;
  font-size: 2em;
  font-weight: bold;
  padding: 0;
  display: flex;
  align-items: center;
`;

export const LogoIMG = styled.img`
  width: 30px;
  height: 30px;
  padding: 0 .4em;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
`;

export const MenuItem = styled.button`
  background: transparent;
  border: 0;
  color: white;
  text-transform: uppercase;
  font-size: 1.1em;
  margin: 0 1em;
  cursor: pointer;
  transition: color .3s ease-in-out;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    color: #c4c4c4;
  }

`;
