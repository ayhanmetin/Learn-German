import { Link } from 'react-router-dom';

export default function Footer2() {
  return (
    <footer className='container d-flex flex-column flex-sm-row justify-content-between pt-4 mb-3 fs-6'>
      <ul className='list-unstyled'>
        <li>
          <Link
            to='/about#almancaKitaplar'
            className='text-decoration-none text-secondary'
          >
            Almanca öğrenmek için kitaplar
          </Link>
        </li>
        <li>
          <Link
            to='/about#almancaUlkeler'
            className='text-decoration-none text-secondary'
          >
            Almanca konuşulan AB ülkeleri
          </Link>
        </li>
        <li>
          <Link
            to='/about#almancaSertifikalar'
            className='text-decoration-none text-secondary'
          >
            Almanca dil sertifikaları
          </Link>
        </li>
      </ul>
      <div>© 2024</div>
    </footer>
  );
}
