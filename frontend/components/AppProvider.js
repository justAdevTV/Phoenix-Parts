import { ThemeProvider } from "styled-components";
import Head from "next/head";
import PropTypes from "prop-types";
import GlobalStyle from "./_settings/_base";

/**
 * AppProvider
 * Props {
 *  children // <App /> goes here
 *  theme // obj for colors, shadows and misc
 *  DOMtitle // Title for Website
 * }
 * **/
function AppProvider({ children, theme, DOMtitle }) {
  // Header data
  function Meta() {
    return (
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap"
          rel="stylesheet"
        />
        <title>{DOMtitle}</title>
      </Head>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <Meta />
        {children}
        <GlobalStyle />
      </>
    </ThemeProvider>
  );
}

// TODO: Remove this maybe when typescript is added
AppProvider.defaultProps = {
  DOMtitle: "Phoenix Parts"
};

AppProvider.propTypes = {
  /**
   * Title for webpage tab
   */
  DOMtitle: PropTypes.string,
  /**
   * Object for colors and shadows
   */
  theme: PropTypes.object.isRequired,
  /**
   * Content for everything in the app
   */
  children: PropTypes.node.isRequired
};

export default AppProvider;
