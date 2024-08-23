import React, { useContext } from 'react'
import styles from "./ProfileWidget.module.css"
import userAvatar from "../assets/image 14.png"
import { AppContext } from '../context/AppContext'

function ProfileWidget() {
    const { user, selectedGenres } = useContext(AppContext);
    // console.log(user);
    return (
        <div className={styles.container}>
            <div className={styles.avatar} >
                <img src={userAvatar} alt="avatar img" />
            </div>
            <div className={styles.details}>
                <p className={styles.name}>{user?.name}</p>
                <p className={styles.email}>{user?.email}</p>
                <p className={styles.username}>{user?.username}</p>
                <div className={styles.genres}>
                    {selectedGenres.slice(0,4).map((genre,index)=>(
                        <div className={styles.choice} key={index}>
                            {genre}
                        </div>

                    ))}
                    
                </div>
            </div>
        </div>
    )
}

export default ProfileWidget;
