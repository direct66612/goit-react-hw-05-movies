import styled from 'styled-components';
const Form = styled('form')`
  display: flex;
  justify-content: center;
  padding: 10px;
  .form__input {
    width: 300px;
    outline: none;
    border-radius: 10px;
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #000;
  }
  .form__btn {
    border: none;
    border-radius: 10px;
    padding: 10px;
    background-color: aquamarine;
  }
`;
export default Form;
