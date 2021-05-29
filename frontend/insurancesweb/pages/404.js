import Link from 'next/link';

const NotFound = () => {
  return (
    <div>
      <div className="not-found">
        <h1>Úps...</h1>
        <h2>Þessi síða fannst ekki.</h2>
        <p>
          Aftur á <Link href="/">heimasíðu</Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
