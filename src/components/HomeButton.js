import { BiChevronsRight, BiChevronsLeft } from "react-icons/bi";
import { useState } from 'react'

function HomeButton() {

    var content =  [{title: 'To-Do List', desc: 'A functional to-do list created with React.', link: '/todo-build', b: 'Try Me'},
                    {title: 'Resume', desc: 'Download my resume.', link:'./assets/ChandrasekerResume2024', b: "Download"}]; 
    const [activeContent, setActiveContent] = useState(0);
    const [slideDirection, setSlideDirection] = useState('');

    const slide = () => {
        setSlideDirection('left');
        setTimeout(() => {
            setSlideDirection('');
        }, 500); 

    }

    const changeFeatured = () => {
        slide(true);
        setTimeout(() => {
            if(activeContent === 0) {
                setActiveContent(content.length - 1);
            } else {
                setActiveContent(activeContent - 1)
            }
        }, 500);
    }

    return (
        <div className ='container'>
            <BiChevronsLeft className='l' onClick={() => changeFeatured()} />
            <div className ={`homebutton ${slideDirection}`}>
                <h5>Featured: {content[activeContent].title}</h5>
                <p>{content[activeContent].desc}</p>

                <button className='b' onClick={() => window.open(content[activeContent].link)}>{content[activeContent].b}</button>
            </div>
            <BiChevronsRight className='l' onClick={() => changeFeatured()}/>

        </div>



    )

    
}

export default HomeButton;