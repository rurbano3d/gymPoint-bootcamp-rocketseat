import styled from 'styled-components';
import AsyncSelect from 'react-select/async';

export const AsynSelectInput = styled(AsyncSelect)`
  display: flex;
  align-items: center;
  .react-select__control {
    width: 100%;
    height: 45px;
  }
  .react-select__control:active {
    border: 1px solid red;
  }

  .react-select__value-container {
    display: flex;
    align-items: center;
    font-size: 16px;
    height: 45px;
    color: #999999;
  }
  .react-select__input {
    position: absolute;
    top: 0;
    color: #999999;
    height: 45px;
  }
  .react-select__placeholder {
    display: flex;
    align-items: center;
    color: #999999;
    height: 45px;
  }
  .react-select__control:focus {
    border: 1px solid red;
  }
  .react-select__single-value {
    display: flex;
    align-items: center;
    color: #999999;
    margin-top: 5px;
    height: 45px;
  }
  .react-select__option:hover {
    background: #ee4d63;
    color: #fff;
  }
  .react-select__option {
    background: #fff;
    color: #999999;
  }
  .react-select__menu-list:active {
    color: #999999;
    background: #fff;
  }
`;
