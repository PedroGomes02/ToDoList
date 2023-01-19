import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: 1rem;
`;

const ToDoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  gap: 2rem;
  background-color: white;
`;

const StyledUL = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  margin: 0.5rem;
`;

const StyledLI = styled.li`
  width: 100%;
  display: flex;
  gap: 1rem;
  padding: 0.5rem;
  background-color: orange;
`;

export { StyledForm, ToDoListContainer, StyledUL, StyledLI };
