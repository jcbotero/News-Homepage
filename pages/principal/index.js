import styles from '/styles/Home.module.css'

export default function GridMain() {
    return (
        <>
         <div className={styles.gridcontainer}>
            <div className={styles.imagen}>
                <img className={styles.des} src="/principal desktop.jpg" alt="pdesktot" ></img>
                <img className={styles.mob} src="/principal mobile.jpg" alt="pmobile" ></img>
            </div>
            <div className={styles.botondiv} >
                <div>
                    <h1>The Bright Future of Web 3.0?</h1>
                </div>
                <div>
                    <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                    <button>READ MORE</button>
                </div>
            </div>
            <div className={styles.new}>
               <div>
                    <h2>New</h2>
               </div>
               <div className={styles.setion}>
                    <h4>
                        Hydrogen VS Electrc Cars
                    </h4>
                    <p>
                        Will hydrogen-fueled cars ever catch up to EVs?
                    </p>
               </div>
               <div className={styles.setion}>
                    <h4>
                        The Downsides of AI Artistry
                    </h4>
                    <p>
                        What are the possible adverser effects of on-demand AI image generation?
                    </p>
               </div>
               <div className={styles.ultimo}>
                    <h4>
                        Is VC Funding Drying Up?
                    </h4>
                    <p>
                        Private funding by VC firms is down 50% YOY. We take a look at what that means
                    </p>
               </div>
            </div> 
         </div>          
        </>
    )
}