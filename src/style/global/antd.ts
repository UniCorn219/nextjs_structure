import { css } from 'styled-components';
import breakpoint from 'src/constants/breakpoints';

export default css`
  .side-nav {
    height: 100vh;

    @media screen and (max-width: ${breakpoint.lg}) {
      display: none;
    }
  }

  .ant-layout {
    height: 100vh;
    position: relative;

    @media screen and (max-width: ${breakpoint.lg}) {
      display: block;
      height: auto;
    }
  }

  .sidemenu-drawer .ant-drawer-close {
    color: rgba(255, 255, 255, 0.65);
  }

  .idetification-modal {
    .ant-modal {
      /* height: 80vh; */
      width: 70% !important;
      @media screen and (max-width: ${breakpoint.lg}) {
        width: 100% !important;
        top: 25%;
      }
    }
    .ant-modal-content {
      background-color: transparent;
      box-shadow: none;

      .ant-modal-body {
        text-align: center;
      }

      .ant-modal-close {
        color: #ffffff;
        .ant-modal-close-x {
          font-size: 2rem;
          @media screen and (max-width: ${breakpoint.lg}) {
            font-size: 1.2rem;
          }
        }
      }
    }
  }
  .anticon {
    vertical-align: 0.125em;
  }

  .ant-calendar-range-picker-input {
    height: 100%;
  }

  .ant-modal-confirm-content {
    margin-left: 0;
  }
  .ant-descriptions-item-content {
    word-break: break-all;
  }
`;
