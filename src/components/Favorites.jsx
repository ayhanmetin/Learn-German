import React from 'react';

export default function Favorites() {
  const handlePrint = word => {
    const currentScrollPosition = window.scrollY;
    const printContent = `
    <html>
      <head>
        <title>Print</title>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 20px;
            display: flex;
            justify-content: center;
          }
          .content {
            text-align: left;
            width: 80%; /* Adjust width as needed for your design preference */
          }
          h1 {
            font-size: 24px;
            margin-top: 20px;
          }
          p {
            font-size: 18px;
            margin: 10px 0;
          }
          .header {
            font-size: 20px;
            font-weight: bold;
            margin-top: 30px;
          }
        </style>
      </head>
      <body>
        <div class="content">
          <h1>${word.word}</h1>
          <p>${word.grammar}</p>
          <p>Example 1: ${word.example1}</p>
          <p>Example 2: ${word.example2}</p>
          <p>English: ${word.meaningENG} </p>
          <p>Türkce: ${word.meaningTR}</p>
          <p>Date: ${new Date().toLocaleDateString()}</p>
        </div>
      </body>
    </html>`;

    const printWindow = window.open('', '', 'height=800,width=1000');
    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.print();
    printWindow.onafterprint = () => {
      printWindow.close();
      window.scrollTo(0, currentScrollPosition);
    };
  };
  return (
    <>
      {/* <div className='container col-12'>Fav</div>
      {filteredWords.map(word => (
        <div
          className='border-bottom border-dark-subtle p-4 mb-3'
          key={word.id}
        >
          <div className='d-flex justify-content-center mb-3'>
            <div
              className='textWord1 fs-7 mt-1 text ms-0 me-3 position-relative'
              style={{ top: '2px' }}
            >
              {word.date}
            </div>
            <div className='d-flex gap-3 text-body-emphasis'>
              <button
                className='btnTop ms-0 text-body-emphasis'
                onClick={() => handlePrint(word)}
              >
                <PrintIcon />
              </button>
              <button className='btnTop btnTop1 ms-0 text-body-emphasis'>
                <BookIcon />
              </button>
            </div>
          </div> */}
    </>
  );
}
