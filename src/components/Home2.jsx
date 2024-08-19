import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home2 = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header className="bg-dark text-white text-center py-3">
        <h1>My Home2</h1>
      </header>
      <main className="flex-grow-1 d-flex justify-content-center align-items-center py-3">
        <section className="container">
          <h2 className="text-center mb-4">Featured Items</h2>
          <ul className="list-unstyled">
            <li className="bg-light border rounded p-3 mb-3">
              <h3>Item 1</h3>
              <p>Description for item 1.</p>
            </li>
            <li className="bg-light border rounded p-3 mb-3">
              <h3>Item 2</h3>
              <p>Description for item 2.</p>
            </li>
            <li className="bg-light border rounded p-3 mb-3">
              <h3>Item 3</h3>
              <p>Description for item 3.</p>
            </li>
            <li className="bg-light border rounded p-3 mb-3">
              <h3>Item 4</h3>
              <p>Description for item 4.</p>
            </li>
          </ul>
        </section>
      </main>
      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; 2024 My Home2. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home2;
