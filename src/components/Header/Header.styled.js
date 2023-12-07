import styled from 'styled-components';
const Container = styled('header')`
  .header__content {
    display: flex;
    background-color: aquamarine;
  }
  .header__list {
    display: flex;
    gap: 40px;
    list-style: none;
  }
  .header__link {
    text-decoration: none;
    font-size: 36px;
    color: #000;
  }
`;
export default Container;
