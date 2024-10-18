import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import wordData from '../wordData';
import './nav.css';

export default function Nav() {
  const wordCount = wordData.length;

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center navMain1">
        <div className="navMain2">
          <span className="navMain3">
            <Link to="/" className="text-body-secondary count m-0 p-0">
              <i className="flag">📚</i>
              <span className="totalWords">{wordCount}</span>
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}
