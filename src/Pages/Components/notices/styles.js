import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-height: 30vh;
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 36px;
  position: relative;
`;

export const Image = styled.img`
  min-width: 100%;
  min-height: 100%;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;