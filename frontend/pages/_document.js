import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';

/**
 * It should be noted that the only reason you should be customizing
 * renderPage is for usage with css-in-js libraries that need to
 * wrap the application to properly work with server-side rendering.
 * Reference: https://nextjs.org/docs/advanced-features/custom-document#customizing-renderpage
 *
 * ServerStyleSheet: https://styled-components.com/docs/advanced#server-side-rendering
 */
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
