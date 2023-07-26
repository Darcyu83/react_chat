import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const FlexColContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 2px solid cyan;
  min-width: "max-content";
`;

export const Nav = styled(NavLink)`
  color: purple;
  word-break: keep-all;
  white-space: nowrap;
`;
