// components/Layout.js
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>MyApp</title>
        <meta name="description" content="My awesome Next.js app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav>
          {/* Navigation links */}
        </nav>
      </header>

      <main>{children}</main>

      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
}
