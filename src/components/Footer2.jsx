import { Link } from 'react-router-dom';

export default function Footer2() {
  return (
    <footer className='container d-flex flex-column flex-sm-row justify-content-between align-items-center pt-5 mt-5'>
      <ul className='list-unstyled mb-0 w-100 text-center d-flex flex-column justify-content-end'>
        <li>
          <Link
            to='/about#almancaSertifikalar'
            className='text-decoration-none footerText '
          >
            📚 Informationen über Deutschlernen
          </Link>
        </li>
        <li>
          <p className='mb-5 mt-3'>© 2024 Ayhan Metin - All rights reserved.</p>
        </li>
      </ul>
    </footer>
  );
}
