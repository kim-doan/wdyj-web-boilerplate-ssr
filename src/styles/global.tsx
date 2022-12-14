import { css, Global } from '@emotion/react';
import React from 'react';

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: 'Pretendard Variable', Pretendard, -apple-system,
          BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI',
          'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic',
          'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      * {
        box-sizing: border-box;
      }
    `}
  />
);
