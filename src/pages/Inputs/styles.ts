import styled from "styled-components";
import { Button } from "../../components/Button";

export const Wrapper = styled.div`
  max-width: 510px;
  margin-inline: auto;
  margin-bottom: 50px;
`;

export const CheckboxWrapper = styled.div`
  margin-bottom: 25px;
  display: flex;
  justify-content: space-between;
`;

export const ApplyButton = styled(Button)`
  width: 50%;
  margin: auto;
`;

export const Error = styled.small`
  color: red;
`;
