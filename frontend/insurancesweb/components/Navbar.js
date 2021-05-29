import Link from 'next/link';
import VordurLogo from '../public/Vordur_logo.svg';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <img src={VordurLogo} alt="Vörður logo" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
