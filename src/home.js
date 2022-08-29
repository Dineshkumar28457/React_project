import './home.css';
import Image from './nature.jpeg';




export function Home(){
    return(
        <div className="home">
            <div className="image">
               <img src={Image}/>
            </div>
                <div>
                   <h1>Nature</h1>
                     <p>
                      Nature, in the broadest sense, is the physical world or universe. 
                      Nature  can refer to the phenomena of the physical world, and also to life in general.
                      The study of nature is a large, if not the only, part of science.
                      Although humans are part of nature,
                      human activity is often understood as a separate category from other natural phenomena.
                    </p>
                </div>
        </div>

    
       
    );
}