import styled from "styled-components";

export const GameButton = styled.button`
  opacity: ${({ opacity }) => opacity};
  padding: 5px;
  font-size: 15px;
  background-image: ${(props) => `url(${props.image})`};
  background-size: "cover";
  color: #fdfbf5;
  letter-spacing: ${({ letterSpacing }) =>
    letterSpacing ? letterSpacing : null};
  cursor: pointer;
  &:hover {
    opacity: 0.75;
  }
`;
