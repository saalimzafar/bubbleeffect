import styles from './Navbar.module.css'

import Bubble from './Bubble'

export default function Navbar() {
    
    
    
    return (
        <>
        <body className={styles.bd}>
          <nav className={styles.nav}>
           
           <div className={styles.hamburger} onClick={Bubble}>
               
               <div className={styles.line}></div>
               <div className={styles.line}></div>
               <div className={styles.line}></div>
           </div>
           <ul className={styles.navlinks}>
               <li>Home</li>
               <li>About</li>
               <li>Contact</li>
           </ul>
       </nav> 
       <section className={styles.landing}>
           <h2>The Hamburger Menu</h2>
          
       </section>
       
            

       
       </body>
        </>
        )
}



     