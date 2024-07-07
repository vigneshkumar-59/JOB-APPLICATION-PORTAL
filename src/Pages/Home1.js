import React from 'react';
import logo from './fb.png';
import './Home1.css';
function Home1() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Code Convent Foundation</title>
        <link rel="stylesheet" href="./App.css" />
        <link rel="stylesheet" href="./res.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>
      </head>
      <body>
        <div className="fixed-top">
          <header>
            <div className="container">
              <nav className="navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand" href="#home">
                      Naukri                 
                </a> 
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <a className="nav-link" href="/Company">
                        Companies
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/Home1">
                        Terms&Conditions
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/">
                        LogOut
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </header>
                <div className="col-lg-6">
                  <div className="social">
                    <a href="#">
                      <img src={logo} alt="facebook" class="pm"/>
                    </a>
              </div>
            </div>
        </div>
        <section className="home-sec" id="home">
            <div className="home-content">
              <div className="row">
                  <div className="home-info">
                    <br></br>
                    <br></br>
                    <br></br>
                    <h2>
                             <span> . .  .  .  .Welcome to Nakuri. . . .   </span> 
                                 There Are Several Roles IN Different Fields <br></br><br></br> Find Your Role and Start Your Career
                    </h2>
                    <h3><i><u>Our Sponsered Companies</u></i> </h3>
                    <img src="https://logodix.com/logo/834000.png" alt="img" />
                  </div>
                </div>
              </div>
        </section>
        <section className="don-sec" id="donation">
          <div className="container">
          <h2>
            Discover Jobs across popular roles and Choose Yours Best                    
            </h2>
            <div className="row">
              <div className="col-lg-4">
                <div className="don-box">
                <img
                    src="https://tse2.mm.bing.net/th?id=OIP.xQQH3KuEkT29EnLtwtV4XAHaCj&pid=Api&P=0&h=220"
                    alt="img"
                  />
                  <h3>InfoVision .Inc</h3><br></br>
                  <a href="/Wipro" className="button">
                    Role : BackEndDeveleper
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="don-box">
                <img
                    src="https://tse1.mm.bing.net/th?id=OIP.aMoVSpiXHkBRvQqeHwYfxgAAAA&pid=Api&P=0&h=220"
                    alt="img"
                  />  
                <h3>TCS</h3><br></br>
                  <a href="/Wipro" className="button">
                   Role : Ab initio Develope
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="don-box">
                <img
                    src="https://tse3.mm.bing.net/th?id=OIP.ec_v6Ps8aPr1y2O1YoM2rQHaEK&pid=Api&P=0&h=220"
                    alt="img"
                  />
                  <h3>Entiovi Technologies</h3><br></br>
                  <a href="/Wipro" className="button">
                    Role : Mobile App Developer
                  </a><br></br>
                </div>
              </div>
            </div>
            <br></br><br></br>
          </div>
        </section>
        <section className="about-id" id="about">
          <div className="container">
            <div className="heading">
              <h3>About US</h3>
              <p>
              As one of the very few profitable pure play internet companies in the country, Info Edge is India’s premier online classifieds company in recruitment, matrimony, real estate, education and related services.
              </p><br></br>
              <h4>Portfolio comprises:</h4><p1>
1.Recruitment: Online recruitment classifieds, www.naukri.com, a clear market leader in the Indian e-recruitment space, www.naukrigulf.com, a job site focused at the Middle East market, offline executive search (www.quadranglesearch.com) and a fresher hiring site (www.firstnaukri.com). Additionally, Info Edge provides jobseekers value added services (Naukri Fast Forward) such as resume writing.<br></br>
2.Matrimony: Online matrimony classifieds, www.jeevansathi.com, is among the top three in India’s online matrimonial space, and has offline Jeevansathi Match Points and franchisees.<br></br>
3.Real Estate: Online real estate classifieds, www.99acres.com, is India’s largest property marketplace covering almost all the major cities and a large number of agents and developers.<br></br>
4.Education: Online education classifieds, www.shiksha.com, is the smartest gateway for students to achieve their goals.<br></br></p1>
            </div><br></br>
            <img src="https://tse3.mm.bing.net/th?id=OIP.U_KEJqS28KaGzjZt-NEZyAHaEK&pid=Api&P=0&h=220" alt="img" />
            <img src="https://tse3.mm.bing.net/th?id=OIP.pcDdsAFMmymJCudeNd6DOQHaHa&pid=Api&P=0&h=220" alt="img" />
            <img src="https://tse4.mm.bing.net/th?id=OIP.1weQp5zjU7kQZwsKCYQ81AHaE8&pid=Api&P=0&h=220 " alt="img" />
          </div>
        </section>  
        <footer>
        <section className="Association" id="Association">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="col-one">
                  <h4> Nakuri </h4>
                  <h5>Social Media</h5>
                  <div className="social">
                    <a href="#">
                      <img src="https://img.freepik.com/premium-vector/vinnitsyaukrainejanuary-24-2021facebook-vector-image-flat-icon-with-letter-f-blue-color-button-with-letter-isolated-white-background_736051-65.jpg" alt="facebook" />
                    </a>
                    <a href="#">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL2__NOQ1ZLsjPL_IqgD9fP5jNSbIIbHugRg&usqp=CAU" alt="inatagram" />
                    </a>
                    <a href="#">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTanFxQQbxmCbCuzFHrlXGS0nogyFrPVpdrkWCenFYBXGZwPoUdsEnEDb35OJiVu3gQB5Y&usqp=CAU" alt="youtube" />
                    </a>
                    <a href="#">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrefHFmS_OINItmSqPWM0V5J846e_rFuxNGPt42UZ1G3P3QVhzIhPAmGYEqxImqlhs_ag&usqp=CAU" alt="linkedin" />
                    </a>
                    <a href="#">
                      <img src="https://cdn.iconscout.com/icon/free/png-256/gmail-2981844-2476484.png?f=webp&w=256" alt="gmail" />
                    </a>
                  </div>
                  <p>Copyright &copy; 2023 | All Right Reserved</p>
              </div>
              </div>
              <div className="col-lg-4">
                <div className="col-two">
                  <ul>
                  <li>
                      <a href="#home">Home</a>
                    </li>
                    <li>
                      <a href="#donation">Careers</a>
                    </li>
                    <li>
                      <a href="#mission-id">About US</a>
                    </li>
                    <li>
                      <a href="#instructions">Companies</a>
                    </li>
                  </ul>
                </div>
              </div>
                                <div className="col-lg-4">
                  <div className="col-two">
                  <ul>
                  <li> 
                    <a href="#">HelpCenter</a> 
                  </li> 
                  <li> 
                    <a href="#">Report issues</a> 
                  </li> 
                  <li> 
                    <a href="#">Terms&Conditions</a>
                  </li> 
                  <li> 
                    <a href="#">PrivacyPolicy</a> 
                  </li>
                   </ul> 
                </div>
              </div>
            </div>
          </div>
          </section>
        </footer>

        <script src="js/script.js"></script>
      </body>
    </html>
  );
}

export default Home1;


