import opik from './opik1.jpg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [ubahFoto, setUbahFoto] = useState(false);

  const tombolUbahFoto = () => {
    setUbahFoto(!ubahFoto);
  }

  // ini untuk ubah nama class img agar bisa mengganti-ganit class untuk foto kotak dan foto lingkaran
  const profileImageClass = `profile-image ${ubahFoto ? 'fotoLingkaran' : ''}`;


  return React.createElement('div', { className: 'App' },
    React.createElement('header', { className: 'profile' },

    //ini image
      React.createElement('div', { className: profileImageClass },
        React.createElement('img', { src: opik, className: 'profile-photo', alt: 'Foto Profil' })
      ),

      // ini bagian profile detail Nama
      React.createElement('div', { className: 'profile-details' },
        React.createElement('div', { className: 'name' },
          React.createElement('h1', null, 'Putra Taufik Syaharuddin')
        ),
        // kemudian ini untuk detail-detail nya
        React.createElement('div', { className: 'details' },
          React.createElement('div', { className: 'detail-item' },
            React.createElement('span', { className: 'detail-label' }, 'Hobi :'),
            React.createElement('span', { className: 'detail-value' }, 'Main Futsal')
          ),
          React.createElement('div', { className: 'detail-item' },
            React.createElement('span', { className: 'detail-label' }, 'Jalur Sukses :'),
            React.createElement('span', { className: 'detail-value' }, 'Family Business')
          ),
          React.createElement('div', { className: 'detail-item' },
            React.createElement('span', { className: 'detail-label' }, 'Jurusan :'),
            React.createElement('span', { className: 'detail-value' }, 'Informatika')
          ),
          React.createElement('div', { className: 'detail-item' },
            React.createElement('span', { className: 'detail-label' }, 'Cita-Cita :'),
            React.createElement('span', { className: 'detail-value' }, 'Punya Banyak Uang')
          ),
          React.createElement('button', { onClick: tombolUbahFoto }, 'Ubah Foto')
          //batas detail-detail
        )
      )
    ),
    React.createElement('div', { className: 'dibawah-profile' },
      React.createElement('p', null, 'Gender : Male'),
      React.createElement('p', null, 'Alamat : Hertasning')
    ),
    React.createElement('div', { className: 'experience' },
      React.createElement('h1', null, 'Organization Experience'),
      React.createElement('div', { className: 'experience-list' },
        React.createElement('div', { className: 'column' },
          React.createElement('div', { className: 'infinity' },
            React.createElement('h3', null, 'Infinity (2022 - until death)'),
            React.createElement('p', null, 'Infinity adalah organisasi mahasiswa terbesar di UC Makassar.')
          ),
          React.createElement('br'),
          React.createElement('div', { className: 'oweek' },
            React.createElement('h3', null, 'O-Week 2023'),
            React.createElement('p', null, 'O-Week adalah kepanitiaan Orientasi Mahasiswa di UC Makassar.')
          )
        ),
        React.createElement('div', { className: 'column' },
          React.createElement('div', { className: 'nplc' },
            React.createElement('h3', null, 'National Programming and Logic Competition 2023'),
            React.createElement('p', null, 'National Programming and Logic Competition 2023 adalah sebuah event yang dimana meruapakan event IMT')
          ),
          React.createElement('br'),
          React.createElement('div', { className: 'Informatika Student Union' },
            React.createElement('h3', null, 'Informatika Student Union'),
            React.createElement('p', null, 'Informatika Student Union merupakan organisasi mahasiswa di program studi Informatika')
          )
        )
      )
    )
  );
}

export default App;
