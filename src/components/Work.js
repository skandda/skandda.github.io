import { ImMenu3, ImMenu4 } from 'react-icons/im'
import { useState } from 'react';
import { FaLocationDot } from 'react-icons/fa6'
import { MdDoubleArrow } from "react-icons/md";

function Work(props) {
    const { title, company, img, dates, desc, skills, location, start } = props;
    const [isOpen, setIsOpen] = useState(start);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
      };

    function renderSkills(skills) {
        var skillDiv = []

        for(let i = 0; i < skills.length; ++i) {
            skillDiv.push(
                <div className='skill-item'>
                    <p className='skill-text'>{skills[i]}</p>
                </div>
            )
        }

        return skillDiv

    }



    return (
        <>
            <div className={`accordian ${isOpen ? 'open' : ''}`} onClick={toggleAccordion}>
                <div>
                <div className='job-desc'>
                    <p>{title} <MdDoubleArrow className='arrow'/>  {company}</p>

                {!isOpen && <div className='right'>
                            <p className='dates'>{dates}</p>
                            <ImMenu3 className='menu-button'/>
                          </div>}

                {isOpen && <div className='right'>
                            <p className='dates'>{dates}</p>
                            <ImMenu4 className='menu-button'/>
                            </div>}
                </div>
                </div>

            </div>
            {isOpen && (
            <div className='accordian-content'>
                <div className='half-exp-desc'>
                    <p className='work-desc'><FaLocationDot className='loc'/>{location}</p>
                    <p>{desc}</p>
                    <div className='skill-container'>
                        {renderSkills(skills)}
                    </div>
                </div>
                <div className='half-exp-img'>
                    <img alt={img} className='exp-img' src={img}></img>
                </div>
            </div>
            )}

        </>
    )

}


export default Work;