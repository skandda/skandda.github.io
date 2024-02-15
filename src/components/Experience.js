import { MdStar, MdStarBorder, MdOutlineStarHalf } from 'react-icons/md'
function Experience(props) {
    const { text, stars } = props;

    function getStars(stars) {
        var full = Math.floor(stars);
        var half = stars - full

        var rating = [];

        for(let i = 1; i < 6; ++i) {
            if(i <= full) {
                rating.push(<MdStar/>);
            } else if (half === 0.5) {
                rating.push(<MdOutlineStarHalf/>);
                half = 0;
            } else {
                rating.push(<MdStarBorder/>);
            }
        };

        return rating;

    }

    return (
        <div className='exp-item'>
            <p className ='exp-text'>
                {text}
            </p>
            <div className='star-container'>
                {getStars(stars)}
            </div>

        </div>
    )
}

export default Experience;