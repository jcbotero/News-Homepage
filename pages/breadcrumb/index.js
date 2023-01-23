
import styles from '/styles/Home.module.css'
import React from 'react'
import Dark from '../darkdiv'


export default function Bread() {

function menu() {
    document.getElementById("bread").style.display = "block"
    document.getElementById("close").style.display = "block"
    document.getElementById("dark").style.display = "block"
}

function close() {
    document.getElementById("bread").style.display = "none"
    document.getElementById("close").style.display = "none"
    document.getElementById("dark").style.display = "none"
}

    return (
        <>
         <div className={styles.bread}>
            <div>
                <img src="/logo.svg" alt="Logo" ></img>
            </div>
            <div id='bread' className={styles.breadp}>
                <p>Home</p> 
                <p>New</p> 
                <p>Popular</p> 
                <p>Trending</p> 
                <p>Categories</p>
            </div> 
            <div className={styles.mobile}>
                <img className={styles.menu} onClick={menu} src="/menu.svg" alt="menu" ></img>
                <img id='close' onClick={close} className={styles.close} src="/close.svg" alt="close" ></img>
            </div>
         </div>          
        </>
    )
}

