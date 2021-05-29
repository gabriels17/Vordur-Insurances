import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);

  return (
    <>
      <Head>
        <title>Vörður tryggingar</title>
        <meta name="Vörður tryggingar" content="tryggingar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="not-found">
          <h1>Úps...</h1>
          <h2>Þessi síða fannst ekki.</h2>
          <p>
            Aftur á <Link href="/">heimasíðu</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default NotFound;
