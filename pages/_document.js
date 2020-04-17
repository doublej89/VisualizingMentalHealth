import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Varela+Round"
            rel="stylesheet"
          />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
            rel="stylesheet"
          />
        </Head>
        <body id="page-top">
          <Main />
          <NextScript />
          <script type="text/javascript" src="/jquery.min.js" />
          <script type="text/javascript" src="/jquery.easing.min.js" />
          <script type="text/javascript" src="/bootstrap.bundle.min.js" />
          <script type="text/javascript" src="/grayscale.min.js" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
