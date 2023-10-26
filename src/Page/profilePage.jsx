import React,{useState} from 'react'
import AccordionItem from "../Component/accordion";
import opik from "../opik1.jpg";
import NavBar from '../Component/navBar';
function ProfilePage() {
    const [ubahFoto, setUbahFoto] = useState(false);
    const formDataJSON = localStorage.getItem("formData");

    const formData = JSON.parse(formDataJSON);

  
    const tombolUbahFoto = () => {
      setUbahFoto(!ubahFoto);
    };
  
    return (
      <div className="App">
        <NavBar/>
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
              <h1>{formData.nama}</h1>
            </div>
            <div className="details">
              <AccordionItem label="JalurSukses :" content={formData.jalurSukses} />
              <AccordionItem label="Hobi :" content={formData.hobi} />
              <AccordionItem label="Jurusan :" content={formData.jurusan} />
              <AccordionItem label="Angkatan :" content={formData.angkatan} />
              <AccordionItem label="Jalur Sukses :" content={formData.jalurSukses} />
              <AccordionItem label="Jenis Kelamin :" content={formData.jenisKelamin} />
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

  export default ProfilePage;