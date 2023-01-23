import styles from '/styles/Home.module.css'

export default function FooterGrid() {
    return (
        <>
         <div className={styles.footer}>
            <div className={styles.set1}>
                <div>
                      <img src="/second1.jpg" alt="second1" ></img>
                </div>
                <div className={styles.text1}>
                    <h3>01</h3>
                    <h4>Reviving Retro PCs</h4>
                    <p>What happens when old PCs are given modern upgrades?</p> 
                </div>
            </div>
            <div className={styles.set2}>
                <div>
                      <img src="/second2.jpg" alt="second2" ></img>
                </div>
                <div className={styles.text2}>
                    <h3>02</h3>
                    <h4>Top 10 Laptops of 2022</h4>
                    <p>Our best picks for various need and budgets.</p>
                </div>
            </div>          
            <div className={styles.set1}>
                <div>
                      <img src="/second3.jpg" alt="second3" ></img>
                </div>
                <div className={styles.text3}>
                    <h3>03</h3>
                    <h4>The Growth of Gaming</h4>
                    <p>How the pandemic has sparked fresh oppoptunities.</p>    
                </div>
             </div>
         </div>          
        </>
    )
}