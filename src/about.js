import './about.css';
import Image from './nature1.jpg';



export function About(){
    return(
        <div className="about">
             <div>
                  <h1>Bubbles</h1>
                  <p>
                     Bubble Shooter is a clone of the Puzzle Bobble arcade game that was released by Taito in 1994.
                     The Bubble Shooter game and IP are owned by Ilyon Dynamics,
                      after they were acquired from Absolutist who released the original game in 2002. 
                  </p>
             </div>
             <div className="image">
                 <img src={Image}/>
             </div>
             </div>

    
    );
}