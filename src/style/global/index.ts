import { createGlobalStyle, css } from 'styled-components';
import reboot from './reboot';
import antd from './antd';
import nprogress from './nprogress';

const global = css`
  html,
  body {
    font-size: 1rem;
    margin: 0;
    padding: 0;
  }

  body {
    background: rgb(240, 242, 245);
  }

  input[type='text'],
  input[type='password'] {
    font-size: 1rem;
  }

  button:focus {
    outline: none;
  }

  .remove-left-margin {
    margin-left: 0;
  }

  @media (max-width: 768px) {
    input,
    textarea,
    select {
      font-size: 16px;
    }
  }
`;

export default createGlobalStyle<{}>`
  ${reboot}
  ${global}
  ${antd}
  ${nprogress}
`;
