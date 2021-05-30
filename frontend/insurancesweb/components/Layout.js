import Head from 'next/head';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="Vörður tryggingar" content="tryggingar" />
        <meta lang="is" />
        <title>Vörður tryggingar</title>
      </Head>
      <div className="content">
        <Navbar />
        {children}
      </div>
    </>
  );
};

export default Layout;
