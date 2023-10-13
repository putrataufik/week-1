import React from "react";
import opik from "../opik1.jpg"
const [ubahFoto, setUbahFoto] = useState(false);

  const tombolUbahFoto = () =>{
    setUbahFoto(!ubahFoto);
  }
const img = React.createElement('img',{src: opik, className:'profile-photo', alt:'Foto Profil'})
const button = React
const profileImage = React.createElement('div', {className :`profile-image ${ubahFoto ? 'fotoLingkaran' : ''}`}, img);
<button onClick={tombolUbahFoto}>Ubah Foto</button>