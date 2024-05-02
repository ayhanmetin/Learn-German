import { Link } from 'react-router-dom';

export default function Footer2() {
  return (
    <footer className='container d-flex flex-column flex-sm-row justify-content-between pt-4 mb-3 fs-6'>
      <ul className='list-unstyled'>
        <li>
          <Link to="/about#almancaKitaplar" className='text-decoration-none text-secondary'>
            Almanca Öğrenmek için Kitaplar
          </Link>
        </li>
        <li>
          <Link to="/about#almancaUlkeler" className='text-decoration-none text-secondary'>
            Almanca Konuşulan AB Ülkeleri ve Bölgeler
          </Link>
        </li>
        <li>
          <Link to="/about#almancaSertifikalar" className='text-decoration-none text-secondary'>
            Önemli Almanca Dil Sertifikaları
          </Link>
        </li>
      </ul>
      <div>© 2024</div>
    </footer>
  );
}
