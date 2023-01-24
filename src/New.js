import React from 'react'
import hadhi from './hadhi.png';
import ab from './ab.png';
import desert from './desert.png';
import whats from './whats.png';
import food from './food.png';
import html from './html.png';
import css from './css.png';
import react from './react.png';
import node from './node.png';
import mysql from './mysql.png';
import mongo from './mongo.png';
import aws from './aws.png';
import java from './java.png';











function New() {
  return (
    <div>
   <nav>
      <div class="container">
        <a href="#"><h3 style= {{ color: "#ffffff;" }} >Abdul Hadhi</h3></a>
        <ul>
          <li><a href="#Home" class="active">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Project">Project</a></li>
      
          <li><a href="#Contact">Contact</a></li>
        </ul>
        <button id="menu-btn">
          <span class="material-icons-sharp" > menu </span>
        </button>
        <button id="close-btn">
          <span class="material-icons-sharp" > close </span>
        </button>
      </div>
    </nav>

{/* Home */}

    <section class="landing" id="Home">
      <div class="container">
        <div class="socials">    
          <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=hadhi3336@gmail.com"  target="_blank"><i class="fa fa-envelope" aria-hidden="true"></i></a>
          <a href="https://www.linkedin.com/in/abdul-hadhi-460942216/"  target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
          <a href="https://github.com/Abdulhadhi1"  target="_blank"><i class="fa-brands fa-github"></i></a>
          <a href="https://www.behance.net/abdhadhi"  target="_blank"><i class="fa-brands fa-behance"></i></a>
        </div>
        <div className="info"
        >
          <h1 class="typing"> Hi,I'm Abdul</h1>
          <h3 class="typing1">Full Stack-Developer</h3>
          <p>
          I have completed my MERN stack development course and having hands-on experience in web appilication from creating full stack projects and attend hackathons Currently, I looking for a job from which i get trained technologies like React Js, Node JS and MongoDB.
          </p>
          <a href="#Contact" class="btn btn-primary">Let's Talk</a>
        </div>
        <div class="profile-area">
          <div class="outer-circle">
           {/* <a href="/"  target="_blank"><i class="fa-brands fa-html5" style= {{ color: "#ffffff;" }} ></i></a>
            <a href="/"  target="_blank"><i class="fa-brands fa-aws" ></i></a>
            <a href="/"  target="_blank"><i class="fa-brands fa-node" ></i></a>
            <a href="/"  target="_blank"><i class="fa-brands fa-react" ></i></a> */}

          </div>
          <div class="inner-circle">

          <img src={hadhi} alt="" /> 
          </div>
        </div>
      </div>
    </section>

{/* About */}

<section class="about" id="About" style= {{ backgroundColor: "#252525"}} >
      <h1>About</h1>
      <div class="container" >
        <div class="image">
        <img src={ab} alt="" /> 
        

        </div>
        <div class="info" >
          <p>
            I'm self-taught Web developer with ability to learn and collaborate
            in rapidly changing environments and compositions. I am very
            interested in the web development. That was the reason I have taken
            many Web development course . <br />
            I have learnt Html, Css, JavaScript, Bootstrap, React,Nodejs,MongoDB
            .I'malso familiar with designing Sofware like Figma
            and Adobe XD
          </p>
          <p>
            Post that, my projects boosted my interest in web development as a
            full-time career option. I am also inclined towards creative
            activities such as web designing, public speaking, etc.
            <br />
            I have always been an active student in school and college. I have
            participated in many cultural events during my school and college
            days and have won many awards and certificates.
          </p>
          <div class="links">
            <a href="#Contact" class="btn btn-primary">Let's Talk</a>
           
         <a href="https://drive.google.com/file/d/1ftXO703t4s48IBw3PtzzY9wnLk5GjICJ/view?usp=share_link" class="btn btn-primary" target="_blank" style= {{ color: "black" }}>Download Cv</a>   
          </div>
        </div>
      </div>
    </section>

    {/* <!-- project 1 --> */}
                         

    <section class="recent-work" id="Project">
    <div class="container">
        <h1>My Recent Work</h1>
        <div class="projects">


          <div class="project">
            <div class="thubmnail">
            <img src={desert} alt="" />
            </div>
            <h2>Women Dress Suggestion </h2>
            <p>
              Where users can select and save their favourites and also can do add
              their own dress.the four basic operations a Web application should be able to perform Create, Read, Update, and Delete. In such apps, users must be able to create data, have access to the data in the UI by reading the data, update or edit the data, and delete the data. 
            </p>
            <div class="links">
              <a href="https://github.com/Abdulhadhi1/capstone-frontend" class="btn btn-primary" target="_blank">Front-End</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://github.com/Abdulhadhi1/capstone-backend" class="btn btn-primary" target="_blank">Back-End</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a
                href="https://womendresssuggestion.netlify.app/login"
                class="btn btn-primary"
                target="_blank">View Project</a
              >
            </div>
            
            
          </div>
          
      
          <div class="project">
            <div class="thubmnail">
            




            <img src={whats} alt="" />




            </div>
            <h2>Chat App</h2>
            <p>
             A chat application makes it easy to communicate with people anywhere in the world by sending and receiving messages in real time. With a web or mobile chat app, users are able to receive the same engaging and lively interactions through custom messaging features, just as they would in person.
            </p>
            <div class="links">
              <a href="https://github.com/Abdulhadhi1/chat-app-frontend" class="btn btn-primary" target="_blank">Front-End</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://github.com/Abdulhadhi1/chat-app-backend" class="btn btn-primary" target="_blank">Back-End</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a
                href="https://coruscating-marigold-1dfe69.netlify.app/"
                class="btn btn-primary"
                target="_blank">View Project</a>
            </div>
          </div>
   
        <div class="project">
          <div class="thubmnail">
          <img src={food} alt="" />
          </div>
          <h2>Food Deliveryapp</h2>
          <p>
            An online food ordering system or an online ordering platform is a place where customers can directly order foods.It is a web-based ordering system where customers using a mobile app can use the online user interface to order online
          </p>
          <div class="links">
            <a href="https://github.com/Abdulhadhi1/foodapp-front-end" class="btn btn-primary" target="_blank">Front-End</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://github.com/Abdulhadhi1/foodapp-back-end" class="btn btn-primary" target="_blank">Back-End</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="https://littlenugget.netlify.app/home"
              class="btn btn-primary"
              target="_blank">View Project</a>
          </div>
        </div>
     
      </div>
      </div>
      <br />
      <br /><br /> <br /><br />
      </section>
{/*       
skills */}


<div class="inner">
  <div class="header">

    <h1 className='skillset'>Skills</h1>
  </div>
  <div class="container-icons">
    <div class="skill-box">
      <div class="skill-title">
        <div class="img">
        <img src={html} alt="" />
        </div>
        <h3 class="html">Html</h3>
        
      
      </div>
   
    
 
</div>
<div class="skill-box">
  <div class="skill-title">
    <div class="img">
    <img src={css} alt="" />
    </div>
    <h3 class="html" >Css</h3>
    
  
  </div>
</div>
<div class="skill-box">
  <div class="skill-title">
    <div class="img">
    <img src={java} alt="" />
    </div>
    <h3 class="html">JavaScript</h3>
    
  
  </div>
</div>
<div class="skill-box">
  <div class="skill-title">
    <div class="img">
    <img src={react} alt="" />
    </div>
    <h3 class="html">React</h3>
    
    
  
  </div>
</div>
<div class="skill-box">
  <div class="skill-title">
    <div class="img">
    <img src={node} alt="" />
    </div>
    <h3 class="html">Node.js</h3>
    
  
  </div>
</div>
<div class="skill-box">
  <div class="skill-title">
    <div class="img">
    <img src={mongo} alt="" />
    </div>
    <h3 class="html">MongoDB</h3>
    
  
  </div>

</div>
<div class="skill-box">
  <div class="skill-title">
    <div class="img">
    <img src={mysql} alt="" />
    </div>
    <h3 class="html">mySQL</h3>
    
  
  </div>

</div>
<div class="skill-box">
  <div class="skill-title">
    <div class="img">
    <img src={aws} alt="" />
    </div>
    <h3 class="html">Aws</h3>
    
 
  </div></div>

</div>
</div>

{/* contact */}



<section class="contact" id="Contact"  >
      <div class="over">
        <div class="container" >
          <h1>Let's Talk</h1>
          <p>Feel Free to reach Me</p>
          <form target="_blank" action="https://formsubmit.co/hadhi3336@gmail.com" method="POST"  >
            <input type="text" name="Name" placeholder="Name " required />
            <input type="email" name="Email" placeholder="Email" required />
            <input type="text" name="Subject" placeholder="Subject" required />
            <textarea name="Message"  placeholder="Message" required></textarea>
            <input type="submit" value="Submit" class="btn btn-primary "  />
          </form>
          
        </div>
      </div>
    </section>

    <footer>
    <div class="container">
      <a href="#"><h3>Abdulhadhi</h3></a>
   
    <div class="socials">
        <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=hadhi3336@gmail.com"  target="_blank"><i class="fa fa-envelope" aria-hidden="true"></i></a>
        <a href="https://www.linkedin.com/in/abdul-hadhi-460942216/"  target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
        <a href="https://github.com/Abdulhadhi1"  target="_blank"><i class="fa-brands fa-github"></i></a>
        <a href="https://www.behance.net/abdhadhi"  target="_blank"><i class="fa-brands fa-behance"></i></a>

    </div></div>

  
  </footer>




 

       

  </div>
  )
}

export default New

