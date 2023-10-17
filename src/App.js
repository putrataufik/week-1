import React, { useState } from "react";
import opik from "./opik1.jpg";
import "./App.css";

function AccordionItem({ label, content }) {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`detail-item ${isActive ? 'active' : ''}`}>
      <div className="detail-label" onClick={toggleAccordion}>
        {label}
        <span className={isActive ? "minus" : "plus"}>{isActive ? "-" : "+"}</span>
      </div>
      {isActive && <span className="detail-value">{content}</span>}
    </div>
  );
}


function App() {
  const [ubahFoto, setUbahFoto] = useState(false);

  const tombolUbahFoto = () => {
    setUbahFoto(!ubahFoto);
  };

  return (
    <div className="App">
      <header className="profile">
        <div className="profile-image">
          {ubahFoto ? (
            <img src={opik} className="profile-photo" alt="Foto Profil" />
          ) : (
            <div className="profile-photo"></div>
          )}
          <div className="button-container">
            <button onClick={tombolUbahFoto}>Ubah Foto</button>
          </div>
          <div className="dibawah-profile">
            <p>Gender : Male</p>
            <p>Alamat : Hertasning</p>
          </div>
        </div>
        <div className="profile-details">
          <div className="name">
            <h1>Putra Taufik Syaharuddin</h1>
          </div>
          <div className="details">
            <AccordionItem label="Cita-Cita :" content="Banyak Uang" />
            <AccordionItem label="Hobi :" content="Main Futsal" />
            <AccordionItem label="Jurusan :" content="Informatika" />
            <AccordionItem label="Tempat Tanggal Lahir :" content="Ambon 03-08-2002" />
          </div>
        </div>
      </header>
      <div className="experience">
        <h1>Organization Experience</h1>
        <div className="experience-list">
          <div className="column">
            <div className="infinity">
              <h3>Infinity (2022 - until death)</h3>
              <p>
                Infinity adalah organisasi mahasiswa terbesar di UC Makassar.
              </p>
            </div>
            <br />
            <div className="oweek">
              <h3>O-Week 2023</h3>
              <p>
                O-Week adalah kepanitiaan Orientasi Mahasiswa di UC Makassar.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="nplc">
              <h3>National Programming and Logic Competition 2023</h3>
              <p>
                National Programming and Logic Competition 2023 adalah sebuah
                event yang dimana meruapakan event IMT
              </p>
            </div>
            <br />
            <div className="Informatika Student Union">
              <h3>Informatika Student Union</h3>
              <p>
                Informatika Student Union merupakan organisasi mahasiswa di
                program studi Informatika
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
