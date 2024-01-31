import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Plus Jakarta Sans';
        src: local('Plus Jakarta Sans'),url(./assets/fonts/PlusJakartaSans.ttf) format('truetype');
    }
    :root {
        --line-height-xxs: 100%;
        --line-height-xs: 115%;
        --line-height-sm: 120%;
        --line-height-md: 133%;
        --line-height-lg: 150%;
        --line-height-xl: 175%;

        --letter-spacing-default: 0px;
        --letter-spacing-sm: -1px;
        --letter-spacing-md: -2px;
        --letter-spacing-lg: -3px;

        --font-size-xxxs: 12px;
        --font-size-xxs: 14px;
        --font-size-xs: 16px;
        --font-size-sm: 20px;
        --font-size-md: 24px;
        --font-size-lg: 32px;
        --font-size-xl: 40px;
        --font-size-xxl: 48px;
        --font-size-xxxl: 64px;
        --font-size-display: 80px;
        --font-size-giant: 96px;

        --border-radius-none: 0px;
        --border-radius-sm: 8px;
        --border-radius-md: 16px;
        --border-radius-lg: 24px;
        --border-radius-pill: 600px;
        --border-radius-circle: 50%;

        --border-width-none: 0px;
        --border-width-hairline: 1px;
        --border-width-thin: 2px;
        --border-width-thick: 4px;
        --border-width-heavy: 8px;

        --spacing-inline-quarck: 4px;
        --spacing-inline-nano: 8px;
        --spacing-inline-xxxs: 16px;
        --spacing-inline-xxs: 24px;
        --spacing-inline-xs: 32px;
        --spacing-inline-sm: 40px;
        --spacing-inline-md: 48px;
        --spacing-inline-lg: 64px;
        --spacing-inline-xl: 80px;

        --spacing-stack-quarck: 4px;
        --spacing-stack-nano: 8px;
        --spacing-stack-xxxs: 16px;
        --spacing-stack-xxs: 24px;
        --spacing-stack-xs: 32px;
        --spacing-stack-sm: 40px;
        --spacing-stack-md: 48px;
        --spacing-stack-lg: 56px;
        --spacing-stack-xl: 64px;
        --spacing-stack-xxl: 80px;
        --spacing-stack-xxxl: 120px;
        --spacing-stack-huge: 160px;
        --spacing-stack-giant: 200px;

        --font-family-base: 'Plus Jakarta Sans','serif';

        --font-weight-extrabold: 800;
        --font-weight-bold: 700;
        --font-weight-semibold: 600;
        --font-weight-medium: 400;
        --font-weight-regular: 300;

        --color-error-light: #ef5350;
        --color-error-main: #d32f2f;
        --color-error-dark: #c62828;
        --color-error-contrast: #ffffff;

        --color-success-light: #4caf50;
        --color-success-main: #2e7d32;
        --color-success-dark: #1b5e20;
        --color-success-contrast: #ffffff;

        --color-warning-light: #ff9800;
        --color-warning-main: #ed6c02;
        --color-warning-dark: #e65100;
        --color-warning-contrast: #211e1e;

        --color-info-light: #03a9f4;
        --color-info-main: #0288d1;
        --color-info-dark: #01579b;
        --color-info-contrast: #ffffff;

        --color-base-dark-secondary: #565454;
        --color-base-dark-main: #333333;
        --color-base-dark-highlight: #211e1e;
        --color-base-dark-contrast: #ffffff;

        --color-base-dark-secondary: #f5f5f5;
        --color-base-dark-main: #ededed;
        --color-base-dark-highlight: #d6d5d5;
        --color-base-dark-contrast: #ffffff;

        --color-back-ground-01: #ffffff;
    }

`

export default GlobalStyle