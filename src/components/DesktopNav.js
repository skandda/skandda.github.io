import { FaSquareGithub, FaLinkedin, FaNewspaper } from 'react-icons/fa6'

function DesktopNav() {
    return (
        <div className="nav-container">
            <span className='name'>SC</span>
            <ul className='desktop-nav-list'>
                <li className='desktop-nav-list-item'><a href='#home'>home</a></li>
                <li className='desktop-nav-list-item'><a href='#aboutme'>about me</a></li>
                <li className='desktop-nav-list-item'><a href='#experience'>experience</a></li>
                <li className='desktop-nav-list-item'><a href='#projects'>projects</a></li>
                <li className='desktop-nav-list-item'><a href='#contact'>contact</a></li>
                <div className='social-container'>
                    <li className='desktop-nav-social'><a href='https://github.com/skandda/' rel="noreferrer" target='_blank'><FaSquareGithub/></a></li>
                    <li className='desktop-nav-social'><a href='https://www.linkedin.com/in/skandda-chandrasekar/' rel='noreferrer' target='_blank'><FaLinkedin/></a></li>
                    <li className='desktop-nav-social'><a href='./assets/ChandrasekarResume2024.pdf' target='_blank'><FaNewspaper/></a></li>
                </div>

            </ul>

        </div>
        
    )
}
export default DesktopNav;