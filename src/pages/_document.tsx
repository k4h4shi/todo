// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head>
          <title>Todoリスト</title>
          {/* import normalize css */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css"
          />
          <style jsx global>{`
            .app {
              display: flex;
              min-height: 100vh;
              flex-direction: column;
              color: #454545;
            }
            .app-content {
              flex: 1;
            }

            header {
              color: white;
              background-color: #454545;
            }

            footer {
              color: white;
              background-color: #454545;
            }

            header > h1 {
              margin-left: 20px;
              font-size: 28px;
            }

            h2 {
              margin: 8px;
              font-size: 22px;
            }

            h3 {
              margin: 10px 8px;
              font-size: 18px;
            }

            h4 {
              font-size: 16px;
            }
            a:link {
              color: #454545;
            }
            a:visited {
              color: #c8c8c8;
            }

            .app-content {
              flex: 1;
              margin: 40px 100px;
            }

            .error-message {
              color: #f76776;
            }

            .success-message {
              color: #72eaa6;
            }

            .copy-right {
              text-align: center;
            }

            .copy-right > a {
              color: white;
              text-decoration: none;
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
