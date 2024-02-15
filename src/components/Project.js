

function Project(props) {
    const { title, desc, link, img, github, skills } = props;


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
        <div className='project-item'>
            <h4>{title}</h4>
            <img alt={img} src={img}></img>
            <p className='project-desc'>{desc}</p>
            <div className='skill-container'>
                {renderSkills(skills)}
            </div>
            <div className='button-manager'>
            {link && 
                <a href={link} className='project-button'>Try Me</a>
            }
            <a href={github} className='project-button'>GitHub Code</a>
            </div>
        </div>
    )
}


export default Project;