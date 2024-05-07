import { Link } from 'react-router-dom';

export default function Footer2() {
  return (
    <footer className='container d-flex flex-column flex-sm-row justify-content-between pt-4 mb-3 fs-6'>
      <ul className='list-unstyled'>
        <li>
          <a
            className='text-decoration-none text-secondary'
            href='/about#almancaSertifikalar'
          >
            Almanca öğrenmek için kitaplar
          </a>
        </li>
        <li>
          <a
            className='text-decoration-none text-secondary'
            href='/about#almancaUlkeler'
          >
            Almanca konuşulan AB ülkeleri{' '}
          </a>
        </li>
        <li>
          <a
            className='text-decoration-none text-secondary'
            href='/about#almancaKitaplar'
          >
            Almanca Öğrenmek için Kitaplar{' '}
          </a>
        </li>
      </ul>
      <div>© 2024</div>
    </footer>
  );
}
