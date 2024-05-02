import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './about.css';

export default function About() {
  return (
    <div className='container col-12 my-5'>
      <div className='almancaSertifikalar' id="almancaSertifikalar">
        <h3 className='fs-5 text mb-4 title'>- Önemli Almanca Dil Sertifikaları</h3>
        <article>
          <section className='mb-3'>
            <h2 className='mb-2'>TestDaF</h2>
            <p>
              TestDaF, Almanya'daki üniversitelere giriş için gereken Almanca
              yeterlilik düzeyini değerlendiren bir sınavdır.
            </p>
          </section>
          <section className='mb-3'>
            <h2 className='mb-2'>Goethe-Institut Sertifikaları</h2>
            <p>
              Goethe-Institut'un sertifikaları, dünya genelinde tanınan ve
              akademik, mesleki ve vize işlemleri için yararlı Almanca
              yeterlilik sınavları sunar.
            </p>
          </section>
          <section className='mb-3'>
            <h2 className='mb-2'>TELC Sertifikaları</h2>
            <p>
              TELC, Almanca dahil olmak üzere çeşitli dillerde, Avrupa genelinde
              akademik ve mesleki bağlamlarda tanınan dil sınavları sunmaktadır.
            </p>
          </section>
        </article>
      </div>
      <div className='almancaUlkeler' id="almancaUlkeler">
        <h3 className='fs-5 text mb-4 title'>
          - Almanca Konuşulan AB Ülkeleri ve Bölgeler
        </h3>
        <article>
          <section className='mb-3'>
            <h2 className='mb-2'>Almanya</h2>
            <p>
              Almanya'da, Almanca resmi dil olarak kabul edilir ve kamusal
              hayatın her alanında, eğitimde ve medyada kullanılır. Bu, Almanca
              konuşulan en kalabalık ülkeyi işaret eder.
            </p>
          </section>
          <section className='mb-3'>
            <h2 className='mb-2'>Avusturya</h2>
            <p>
              Avusturya'da resmi dil Almancadır ve nüfusun büyük çoğunluğu
              tarafından konuşulur. Devlet dairelerinde, okullarda ve medyada
              kullanımı yaygındır.
            </p>
          </section>
          <section className='mb-3'>
            <h2 className='mb-2'>İsviçre</h2>
            <p>
              İsviçre'de Almanca, dört ulusal dil arasında en yaygın olanıdır ve
              nüfusun yaklaşık %63'ü tarafından konuşulur. Resmi durumlarda
              Standart Almanca (Hochdeutsch) kullanılırken, günlük konuşmada
              İsviçre Almancası lehçeleri tercih edilir.
            </p>
          </section>
          <section className='mb-3'>
            <h2 className='mb-2'>Belçika</h2>
            <p>
              Belçika'da Almanca, üç resmi dilden biridir ve nüfusun sadece
              yaklaşık %1'i tarafından konuşulmaktadır, özellikle Almanca
              konuşulan toplulukların bulunduğu doğu bölgelerinde.
            </p>
          </section>
          <section className='mb-3'>
            <h2 className='mb-2'>Lüksemburg</h2>
            <p>
              Lüksemburg'da Almanca, üç yönetim dilinden biri olarak
              kullanılmaktadır. Medyada ve yasaların ana dili olarak hizmet
              verirken, Lüksemburgca ve Fransızca da idarede sıkça kullanılır.
            </p>
          </section>
          <section className='mb-3'>
            <h2 className='mb-2'>İtalya (Güney Tirol)</h2>
            <p>
              İtalya'nın Güney Tirol bölgesinde Almanca, İtalyanca ile birlikte
              resmi dil statüsündedir ve eğitim, kamu yönetimi ve yöresel
              işaretlerde kullanılır.
            </p>
          </section>
        </article>
      </div>
      <div className='almancaKitap' id="almancaKitaplar">
        <h3 className='fs-5 text mb-4 title'>- Almanca Öğrenmek için Kitaplar</h3>
        <article>
          <section className='mb-3'>
            <h2 className='mb-2'>
              Der Die Das: The Secrets of German Gender
            </h2>
            <p>
              Der Die Das, Jenny Audring tarafından Almanca cinsiyet
              kurallarını ve dilbilgisini öğretmek için yazılmıştır; yeni
              başlayanlar için kılavuz niteliğindedir.
            </p>
          </section>
          <section className='mb-3'>
            <h2 className='mb-2'>Living German</h2>
            <p>
              Living German, R. W. Buckley tarafından kaleme alınmış ve dilin
              pratik kullanımına odaklanan, konuşma ve anlama yetilerini
              geliştiren interaktif bir öğrenim kaynağıdır.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
