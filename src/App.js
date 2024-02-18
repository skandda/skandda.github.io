import DesktopNav from './components/DesktopNav';
import HomeButton from './components/HomeButton';
import Experience from './components/Experience';
import Work from './components/Work';
import Project from './components/Project';
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaSquareGithub, FaLinkedin, FaNewspaper } from 'react-icons/fa6'
import './style.css';
import './media.css';

function App() {
  return (
    <>
    <div className='Mobile'>
      <h4>Please view on a computer/full screen for specific content.</h4>
      <p>Please still feel free to contact me or browse my socials and resume.</p>
      <p>(972)-983-9230 | schandrasekar@g.hmc.edu</p>
      <ul className='mobile-nav-list'>
        <div className='mobile-social-container'>
          <li className='mobile-nav-social'><a href='https://github.com/skandda/' rel="noreferrer" target='_blank'><FaSquareGithub/></a></li>
          <li className='mobile-nav-social'><a href='https://www.linkedin.com/in/skandda-chandrasekar/' rel='noreferrer' target='_blank'><FaLinkedin/></a></li>
          <li className='mobile-nav-social'><a href='/assets/ChandrasekarResume2024.pdf' target='_blank'><FaNewspaper/></a></li>          
        </div>
      </ul>
    </div>
    <div className="App">
      <div>
        <DesktopNav />
      </div>
      <section id='home'>
      <div className='intro'>
        <h3>Hey! I'm Skandda Chandrasekar</h3>
        <p>I am an aspiring Software Engineer studying Computer Science at Harvey
          Mudd College<br/>who is super passionate about full-stack development and machine learning {'{natural language processing}'}
          <br/>I am open to any <strong>internship</strong> opportunities for Summer 2024, don't hesitate to 
          <strong><a className='contact' href='./'> contact me.</a></strong>  
        </p>
        <HomeButton />
      </div>
      </section>
      <section id='aboutme'>
      <div className='aboutme'>
        <h3>About Me</h3>
        <p>Learn more about me personally as well as my technical and soft skills.</p>
        <div className='about-container'>
          <div className='half about-text'>
            <h4>A Short Introduction</h4>
            <p>Hey! As before, I'm an aspiring Software Engineer studying Computer Science at 
              Harvey Mudd College, with an expected graduation of May 2025.</p>
            <p>In the past, I have enjoyed personal projects with Python, 
              focusing especially on large language models such as GPT. More
              recently, I've picked up a passion for front-end projects as well.</p>
            <p>Apart from technical interests, I consider myself to be both a
              leader and a team player, understanding the importance of both listening
              and making important decisions effectively. I emphasize learning new skills
              throughout a project cycle all while focusing on detailed planning and 
              quick problem solving.
            </p>
          </div>
          <div className='half about-skills'>
            <h4>Skills</h4>
            <div className='exp-container'>
              <Experience text={"Python"} stars={5} />
              <Experience text={"C++"} stars={4} />
              <Experience text={"JavaScript"} stars={3.5} />
              <Experience text={"React.js"} stars={3.5} />   
              <Experience text={"HTML/CSS"} stars={3} />       
              <Experience text={"C"} stars={3.5} />
              <Experience text={"Git"} stars={4} />
              <Experience text={"BeautifulSoup"} stars={4} />
              <Experience text={"Numpy/Pandas"} stars={3} />
              <Experience text={"PyTorch/TensorFlow"} stars={3} />
            </div>
          </div>
        </div>
      </div>
      </section>
      <section id='experience'>
      <div className='work'>
        <h3>Experience</h3>
        <p>Learn about my industry and on-campus experiences.</p> 
        <div className='work-container'>
          <Work title='Software Engineer Intern' company='Eltropy' dates='May - July 2023'
          desc='Developed web-scraping and embedding solutions for semantic search to provide context for in-site responsive chat-bots.' 
          location='Remote' img='/assets/eltropy.png'
          skills={['Python', 'Semantic Search', 'Embeddings', 'Web Scraping']}
          start={true}/>
          <Work title='Data Structures Course Tutor' company='Harvey Mudd College' dates='Jan - Dec 2023'
          desc='Tutored and graded students enrolled in Data Structures, helping them implement
          data structures as well as teaching C++ fundamentals.'
          location='Claremont, CA' img='/assets/harveymudd.jpg'
          start={false}
          skills={['Data Structures', 'Leadership', 'C++', 'Mentorship']}/>
          <Work title='Intro to CS Course Tutor' company='Harvey Mudd College' dates='Aug - Dec 2022'
          desc='Tutored and graded students enrolled in Intro to CS, helping them understand basic
          programming concepts in Python and various other languages.'
          location='Claremont, CA' img='/assets/harveymudd.jpg' start={false}
          skills={['Python', 'Racket', 'Recursion', 'Leadership', 'Mentorship']}
          />
        </div>
      </div>
      </section>
      <section id='projects'>
      <div className='projects'>
        <h3>Projects</h3>
        <p>See the code behind my projects as well as try some out!</p>
        <div className='project-container'>
          <Project title='To-Do List' desc='A functional to-do list made with React.' 
          img='/assets/todolist.png'
          skills={['React.js', 'HTML/CSS']}
          link='https://skandda.github.io/To-Do-List/'
          github='https://github.com/skandda/To-Do-List'/>
          <Project title='Playlist Cover Art'
          desc='Automatically creates Spotify playlist covers based on the playlist content.'
          img='/assets/spotify.jpg'
          skills={['Python', 'Spotify API', 'OpenAI API']}
          github='https://github.com/skandda/Automatic-Spotify-Cover-Art'/>
          <Project title='Voice-Enabled Chat-Bot'
          desc='A responsive chat-bot that can take audio quesitons and return audio answers.'
          img='/assets/voice.jpg'
          skills={['Python', 'OpenAI API', 'NLP']}
          github='https://github.com/skandda/Voice-Enabled-Responsive-Chat-Bot' 
          />
          <Project title='Cascade Dungeon Game'
          desc='A wave based survival game with power-ups, various enemies, and more.'
          img='/assets/game.jpg'
          skills={['C#', 'JavaScript', 'Unity']}
          github='https://github.com/skandda/Cascade-Dungeon-Wave-Survival-Game'/>
        </div>
      </div>
      </section>
      <section id='contact'>
        <div className='contactme'>
          <div className='leftside'>
            <img src='/assets/Skandda_uncrop_1.jpg' alt='Headshot'/>
          </div>
          <div className='rightside'>
            <div className='right-left'>
              <h3>Skandda Chandrasekar</h3>
              <p>I am still open to any job or project opportunities, should
                you be interested, please do not hesitate to reach out.
              </p>
              <p>
              <button onClick={() => window.open('/assets/ChandrasekarResume2024.pdf')}>
              [Download Resume]
              </button>
              </p>
            </div>
            <div className='right-right'>
              <h3>Contact Me</h3>
              <p>(972)-983-9230</p>
              <div className='contact-container'>
                <a href='mailto:schandrasekar@g.hmc.edu'><MdEmail className='contact-icons'/></a>
                <a href='https://www.linkedin.com/in/skandda-chandrasekar/'><FaLinkedinIn className='contact-icons'/></a>
                <a href='https://github.com/skandda/'><FaGithub className='contact-icons'/></a>
              </div>

            </div>
            <footer>      
            <p>Copyright &#169; 2024 Skandda Chandrasekar. All Rights Reserved.</p>
            </footer>
          </div>

        </div>
      </section>
    </div>
    </>
  );
}

export default App;
