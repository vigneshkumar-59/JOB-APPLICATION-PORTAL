import React from "react";
import "./company.css"
import { Link } from 'react-router-dom';

function Company(){
    return(
        <div className="cart">
            <img
                    src="https://tse4.mm.bing.net/th?id=OIP.wp2v0I4NRDQ_OzYFzp4WdQHaEU&pid=Api&P=0&h=220"
                    alt="img"
                  /><br></br>
            <p><h9><b>Wipro</b></h9><br></br>
            Role : Developer<br></br>              
            Onsite : Fulltime<br></br>               
            Skills : computerScience, Java, Python
             <br></br>
             <Link to="/Wipro"><button>APPLY</button></Link></p><br></br><br></br>
             <img
                    src="https://tse3.mm.bing.net/th?id=OIP.ec_v6Ps8aPr1y2O1YoM2rQHaEK&pid=Api&P=0&h=220"
                    alt="img"
            />
             <p><h9><b>Entiovi Technologies</b></h9><br></br>
            Role :Mobile App Developer<br></br>              
            Onsite : Fulltime<br></br>               
            Skills : Android Studio, Mobile Application Development, computerScience
             <br></br>
             <Link to="/EntioviTech"><button>APPLY</button></Link></p><br></br><br></br>
             <img
                    src="https://tse1.mm.bing.net/th?id=OIP.aMoVSpiXHkBRvQqeHwYfxgAAAA&pid=Api&P=0&h=220"
                    alt="img"
                  />
             <p><h9><b>TCS</b></h9><br></br>
            Role : Ab initio Developer<br></br>              
            Onsite : <br></br>               
            Skills : computerScience, Javascript, Python, JSX Code
             <br></br>
             <Link to="/TCS"><button>APPLY</button></Link></p><br></br><br></br>
             <img
                    src="https://tse3.mm.bing.net/th?id=OIP.gMakATWN9c4_D9iTvuZyIQHaEo&pid=Api&P=0&h=220"
                    alt="img"
                  />
             <p><h9><b>Infosys</b></h9><br></br>
            Role :Node.js Developer<br></br>              
            Onsite :HalfTime<br></br>               
            Skills :Nodejs, Visual Studio Code, Java,Javascript
             <br></br>
             <Link to="/Infosys"><button>APPLY</button></Link></p><br></br><br></br>
             <img
                    src="https://tse2.mm.bing.net/th?id=OIP.xQQH3KuEkT29EnLtwtV4XAHaCj&pid=Api&P=0&h=220"
                    alt="img"
                  />
             <p><h9><b>InfoVision</b></h9><br></br>
            Role :BackEndDeveleper<br></br>              
            Onsite :Fulltime<br></br>               
            Skills :Java, DBMS, Html, Css, MongoDb, FireBase
             <br></br>
             <Link to="/Infovision"><button>APPLY</button></Link></p><br></br><br></br>
             <img
                    src="https://tse4.mm.bing.net/th?id=OIP.nGJLxLtQ3RwLKQlkD931BQHaHa&pid=Api&P=0&h=220"
                    alt="img"
                  />
             <p><h9><b>Tech Mahindra</b></h9><br></br>
            Role :Customer Support Associative<br></br>              
            Onsite :Fulltime<br></br>               
            Skills :ComputerScience, DataAnalysis, Communication
             <br></br>
             <Link to="/TechMahindra"><button>APPLY</button></Link></p><br></br><br></br>
              </div>    );
}

export default Company;