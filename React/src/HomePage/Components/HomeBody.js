import starIcon from '../../Icons/star.svg';
import {Link} from 'react-router-dom';
export default function HomeBody() {
    return(
        <div className='home-body-container'>
           <div className='part1-header-body'>
                <div className='desc-panel-body1'>
                    <img src={require('../../Icons/team-work.png')} width="300px" alt='team work'/>
                </div>
                <div className='desc-panel-body2'>
                    <div className='star-desc-panel'>
                       <img src={starIcon} alt="icon star" width="18px" />
                       <label>Track when Your Spend Your Budget</label>
                    </div>
                    <div className='star-desc-panel'>
                       <img src={starIcon} alt="icon star" width="18px" />
                       <label>Use Dashboard and Statistics</label>
                    </div>
                    <div className='star-desc-panel'>
                       <img src={starIcon} alt="icon star" width="18px" />
                       <label>add Your Spends and Save it Online</label>
                    </div>
                </div>
                
            </div> 
            <div className='panel-getStarted-home'>
                <Link to={'/SignIn'} className='link-getStarted-home'>
                    Get Started
                </Link>
            </div>
        </div>
    )
}