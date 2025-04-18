import Head from 'next/head';
import Script from 'next/script';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, title = 'CUSpire - Credit Union Innovation Community' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://bootswatch.com/5/darkly/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/js/all.min.js" strategy="beforeInteractive" />
    </>
  );
}
