import React, {useState} from "react";
import TitlePage from "../../components/UI/Title/TitlePage";
import Input from "../../components/UI/Input/Input";
import styles from "./index.module.scss";
const Index = () => {
  const [user, setUser] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    fetch("http://localhost:3131/api/v1/users/register", {
      method: "POST",
      headers: {
        "content-type":"application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res=>res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

  return (
    <div className="page__register">
          <TitlePage title="Inscription" />
          <p className="text-center">
            Inscrivez vous pour vous connecter à votre profil
          </p>
      <form className={styles.form__register} onSubmit={(e) => handleSubmit(e)}>
        <Input
          type="text"
          label="Nom"
          id="firstName"
          name="firstName"
          placeholder="Mon nom"
          required={true}
          onChange={(e) => {
            setUser({ ...user, firstName: e.target.value })
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
            setUser({ ...user, lastName: e.target.value })
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
            setUser({ ...user, email: e.target.value })
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
            setUser({ ...user, password: e.target.value })
          }}
              />
        <input className="btn btn-black" type="submit" value="M'inscrire"/>
      </form>
    </div>
  );
};

export default Index;
