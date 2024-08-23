import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import styles from "./Reg.module.css";
import Form from "../components/Form";
import validateForm from "../utils/validateForm";
import {  useNavigate } from "react-router-dom";

export default function Reg() {

    const { user, setUser } = useContext(AppContext);
    const [name, setName] = useState(user?.name || "");
    const [username, setUsername] = useState(user?.username || "");
    const [email, setEmail] = useState(user?.email || "");
    const [phone, setPhone] = useState(user?.phone || "");
    const [error, setError] = useState();
    const navigate = useNavigate();
    const submitHandler = () => {
        const { valid, invalid } = validateForm(name, email, username, phone);
        if (!valid) {
      
            setError({...invalid});
            console.log(invalid)
            return;
        }
        setError(null);
        setUser({ name, username, email, phone })
      navigate("/genres");
    };


    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.background}></div>
                <div className={styles.label}>Discover new things on Superapp</div>
            </div>
            <div className={styles.right}>
                <div className={styles.header}>
                    <h2 className={styles.heading}>Super app</h2>
                    <h3 className={styles.subHeading}>Create your new account</h3>
                </div>
                <Form
                    name={name}
                    setName={setName}
                    username={username}
                    setUsername={setUsername}
                    email={email}
                    setEmail={setEmail}
                    phone={phone}
                    setPhone={setPhone}
                    error={error}
                    setError={setError}
                    submitHandler={submitHandler}
                    user={user}
                    setUser={setUser}

                />
                <div className={styles.footer}>
                    <p>
                        By clicking on Sign up. you agree to Superapp{" "}
                        <span>Terms and Conditions of Use</span>
                    </p>
                    <p>
                        To learn more about how Superapp collects, uses, shares and protects
                        your personal data please head Superapp <span>Privacy Policy</span>
                    </p>
                </div>
            </div>
        </div>
    );
}