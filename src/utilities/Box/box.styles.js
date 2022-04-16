import styled from "styled-components";
import { color, space } from "styled-system";

const BoxBase = ({ justify, align, direction, children }) => {
  const StyledBox = styled.div`
    display: flex;
    flex-direction: ${direction || "row"};
    align-items: ${align || "initial"};
    justify-content: ${justify || "initial"};
    background: transparent;
    padding: 0;
    margin: 0;
    border-radius: 5px;
    border: none;
    outline: none;
    display: flex;
    ${color}
    ${space}
  `;

  return <StyledBox>{children}</StyledBox>;
};

export { BoxBase };
