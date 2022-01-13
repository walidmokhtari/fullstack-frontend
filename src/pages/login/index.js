import React from 'react';
import TitlePage from "../../components/UI/Title/TitlePage";
const Index = () => {
    return (
        <div>
            <TitlePage title="Login"/>
            <form className={styles.form__register} onSubmit={(e) => handleSubmit(e)}>
                <Input
                type="text"
                label="Email"
                id="email"
                name="email"
                placeholder="Mon email"
                required={true}
                onChange={(e) => {
                    setUser({ ...user, email: e.target.value });
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
                    setUser({ ...user, lastName: e.target.value });
                }}
                />
            </form>
        </div>
    );
}

export default Index;
