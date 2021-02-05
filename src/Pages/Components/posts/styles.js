import styled, {keyframes} from "styled-components";

const pulse = keyframes`
  0% {
    background-color: #00ff36;
  }

  50% {
    background-color: #49b15f;
  }

  100% {
    background-color: #00ff36;
  }
`;

export const StatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 24px 0;
`;

export const Bip = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin-right: 1em;
  background-color: #00ff36;
  animation: ${pulse} 2s linear infinite;
`;

export const BipContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const FiltersContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  flex-direction: row;
  margin: 16px 0 24px;
`;

export const FilterTitle = styled.h1`
  color: gray;
  font-size: .8em;
  text-transform: uppercase;
  margin-top: 24px;
`;

export const Filter = styled.button`
  background: transparent;
  border-radius: 50px;
  border-style: solid;
  border-color: white;
  border-width: 2px;
  color: white;
  cursor: pointer;
  padding: 8px 24px;
  font-weight: bold;
  margin: 0 .6em;
  
  &:first-child{
    margin-left: 0;
  }
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-width: 0 0 0 2px;
  padding: 8px 16px;
  border-color: white;
  border-style: solid;
  margin: 24px 0;
  overflow: hidden;
`;

export const PostAuthor = styled.span`
  font-size: 1em;
  font-weight: bold;
`;

export const PostContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const PostTime = styled.span`
  color: gray;
  text-transform: uppercase;
`;

export const PostCoin = styled.span`
    color: blue;
`;

export const PostActions =  styled.div`
  align-self: center;
  display: flex;
  align-items: center;
`;

export const PostButton = styled.button`
  border: 0;
  font-size: 1em;
  background-color: transparent;
  cursor: pointer;
  color: #f3ca20;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PostButtonIcon = styled.img`
  height: 18px;
  margin-left: 8px;
`;