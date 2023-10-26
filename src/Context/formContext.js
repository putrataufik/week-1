import React, { createContext, useState, useContext } from "react";

const FormContext = createContext();

export const useFormContext =()=>{
    return useContext(FormContext);
}

export const formProvider = (children) =>{
    const [formData, setFormData]= useState({
        nama: "",
        jenisKelamin: "",
        angkatan:"",
        jurusan:"",
        jalurSukses:"",
        hobi:""
    });
    return (
        <FormContext.Provider value={{formData, setFormData}}>
            {children}
        </FormContext.Provider>
    );
}