import opik from './opik1.jpg';
import './App.css';
import React , {useState}from 'react';

function App() {
  const [ubahFoto, setUbahFoto] = useState(false);

  const tombolUbahFoto = () =>{
    setUbahFoto(!ubahFoto);
  }
  return (
    <div className="App">
      <header className="profile">
        <div className={`profile-image ${ubahFoto ? 'fotoLingkaran' : ''}`}>
          <img src={opik} className="profile-photo" alt="Foto Profil" />
          <p>Gender : Male</p>
          <p>Alamat : Hertasning</p>
        </div>
        <div className='profile-details'>
          <div className='name'>
            <h1>Putra Taufik Syaharuddin</h1>
          </div> 
          <div className='details'>
            <div className='detail-item'>
              <span className='detail-label'>Hobi :</span>
              <span className='detail-value'>Main Futsal</span>
            </div>
            <div className='detail-item'>
              <span className='detail-label'>Jalur Sukses :</span>
              <span className='detail-value'>Family Business</span>
            </div>
            <div className='detail-item'>
              <span className='detail-label'>Jurusan :</span>
              <span className='detail-value'>Informatika</span>
            </div>
            <div className='detail-item'>
              <span className='detail-label'>Cita-Cita :</span>
              <span className='detail-value'>Punya Banyak Uang</span>
            </div>
            <button onClick={tombolUbahFoto}>Ubah Foto</button>
          </div>
        </div>
      </header>
      <div className='experience'>
        <h1>Organization Experience</h1>
        <div className='experience-list'>
          <div className='column'>
            <div className='infinity'>
              <h3>Infinity (2022 - until death)</h3>
              <p>Infinity adalah organisasi mahasiswa terbesar di UC Makassar. </p>
            </div>
            <br></br>
            <div className='oweek'>
              <h3>O-Week 2023</h3>
              <p>O-Week adalah kepanitiaan Orientasi Mahasiswa di UC Makassar. </p>
            </div>
          </div>
          <div className='column'>
            <div className='nplc'>
              <h3>National Programming and Logic Competition 2023</h3>
              <p>National Programming and Logic Competition 2023 adalah sebuah event yang dimana meruapakan event IMT </p>
            </div>
            <br></br>
            <div className='Informatika Student Union'>
              <h3>Informatika Student Union</h3>
              <p>Informatika Student Union merupakan organisasi mahasiswa di program studi Informatika</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
