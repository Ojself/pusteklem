import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            rel='icon'
            href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🫂</text></svg>'
          />
          <link rel='icon' sizes='16x16 32x32 64x64' href='/favicon.ico' />

          <link
            rel='icon'
            type='image/png'
            sizes='196x196'
            href='/favicon-192.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='160x160'
            href='/favicon-160.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='96x96'
            href='/favicon-96.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='64x64'
            href='/favicon-64.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon-16.png'
          />
          <link rel='apple-touch-icon' href='/favicon-57.png' />
          <link
            rel='apple-touch-icon'
            sizes='114x114'
            href='/favicon-114.png'
          />
          <link rel='apple-touch-icon' sizes='72x72' href='/favicon-72.png' />
          <link
            rel='apple-touch-icon'
            sizes='144x144'
            href='/favicon-144.png'
          />
          <link rel='apple-touch-icon' sizes='60x60' href='/favicon-60.png' />
          <link
            rel='apple-touch-icon'
            sizes='120x120'
            href='/favicon-120.png'
          />
          <link rel='apple-touch-icon' sizes='76x76' href='/favicon-76.png' />
          <link
            rel='apple-touch-icon'
            sizes='152x152'
            href='/favicon-152.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/favicon-180.png'
          />
          <meta
            name='msvalidate.01'
            content='667F65F3A86B4E3F4E661739D1EC5B55'
          />
          <meta name='msapplication-TileColor' content='#FFFFFF' />
          <meta name='msapplication-TileImage' content='/favicon-144.png' />
          <meta name='msapplication-config' content='/browserconfig.xml' />

          <link rel='shortcut icon' href='/favicon.ico' />
          <link rel='manifest' href='/manifest.json' />
          <meta name='theme-color' content='#ACACAC' />
          <meta name='description' content='Pusteklem' />

          <meta property='og:url' content='https://www.pusteklem.no/' />
          <meta property='og:type' content='website' />
          <meta property='og:title' content='Pusteklem' />
          <meta property='og:description' content='Pusteklem' />

          <meta name='twitter:card' content='summary_large_image' />
          <meta property='twitter:domain' content='pusteklem.no' />
          <meta property='twitter:url' content='https://www.pusteklem.no/' />
          <meta name='twitter:title' content='Pusteklem' />
          <meta name='twitter:description' content='Pusteklem' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
