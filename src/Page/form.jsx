import React, { useState } from "react";
import NavBar from "../Component/navBar";
import "./form.css";

function Form() {
  const [formData, setFormData] = useState({
    nama: "",
    jenisKelamin: "",
    angkatan: 0,
    jurusan: "",
    jalurSukses: "",
    hobi: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simpan data ke localStorage
    localStorage.setItem("formData", JSON.stringify(formData));

    setFormData({
      nama: "",
      jenisKelamin: "",
      angkatan: 0,
      jurusan: "",
      jalurSukses: "",
      hobi: "",
    });

    // Atau, Anda dapat memproses data lebih lanjut di sini, misalnya mengirimkannya ke server.
  };

  return (
    <div className="App">
      <NavBar />
      <div className="Form">
        <form className="FormContainer" onSubmit={handleSubmit}>
          <h1>Form</h1>
          <label htmlFor="nama">Nama</label>
          <input
            type="text"
            id="nama"
            onChange={handleInputChange}
            value={formData.nama}
          />
          <br />
          <br />
          <label htmlFor="jenisKelamin">Jenis Kelamin</label>
          <input
            type="text"
            id="jenisKelamin"
            onChange={handleInputChange}
            value={formData.jenisKelamin}
          />
          <br />
          <br />
          <label htmlFor="angkatan">Angkatan</label>
          <input
            type="number"
            id="angkatan"
            onChange={handleInputChange}
            value={formData.angkatan}
          />
          <br />
          <br />
          <label htmlFor="jurusan">Jurusan</label>
          <input
            type="text"
            id="jurusan"
            onChange={handleInputChange}
            value={formData.jurusan}
          />
          <br />
          <br />
          <label htmlFor="jalurSukses">Jalur Sukses</label>
          <input
            type="text"
            id="jalurSukses"
            onChange={handleInputChange}
            value={formData.jalurSukses}
          />
          <br />
          <br />
          <label htmlFor="hobi">Hobi</label>
          <input
            type="text"
            id="hobi"
            onChange={handleInputChange}
            value={formData.hobi}
          />
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
