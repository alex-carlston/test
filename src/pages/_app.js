import '../styles/globals.css';
// Remove default Bootstrap CSS import
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import Head from 'next/head';
// Import Font Awesome config
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

// Prevent Font Awesome from adding its CSS since we did it manually above
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                {/* Only use Bootswatch Darkly theme for Bootstrap styles */}
                <link rel="stylesheet" href="https://bootswatch.com/5/darkly/bootstrap.min.css" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
