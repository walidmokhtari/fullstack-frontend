import React from "react";
import TitlePage from "../../components/UI/Title/TitlePage";
import Input from "../../components/UI/Input/Input";
import styles from "./index.module.scss";
const Index = () => {
  return (
    <div>
          <TitlePage title="Inscription" />
          <p className="text-center">
            Inscrivez vous pour vous connecter à votre profil
          </p>
      <form className={styles.form__register}>
        <Input
          type="text"
          label="Nom"
          id="firstName"
          name="firstName"
          placeholder="Mon nom"
          required={true}
          onChange={(e) => {
            console.log("test");
          }}
        />
        <Input
          type="text"
          label="Prénom"
          id="lasttName"
          name="lastName"
          placeholder="Mon prénom"
          required={true}
          onChange={(e) => {
            console.log("test");
          }}
        />
        <Input
          type="email"
          label="Email"
          id="email"
          name="email"
          placeholder="Mon email"
          required={true}
          onChange={(e) => {
            console.log("test");
          }}
        />
        <Input
          type="password"
          label="Mot de passe"
          id="password"
          name="password"
          placeholder="Mon mot de passe"
          required={true}
          onChange={(e) => {
            console.log("test");
          }}
              />
        <input className="btn btn-black" type="submit" value="M'inscrire"/>
      </form>
    </div>
  );
};

export default Index;
