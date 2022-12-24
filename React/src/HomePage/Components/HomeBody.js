import starIcon from '../../Icons/star.svg';
export default function HomeBody() {
    return(
        <div>
           <div className='part1-header-body'>
                <div className='desc-panel-body1'>
                    <img src={require('../../Icons/team-work.png')} width="200px" alt='team work'/>
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
                </div>
            </div> 
        </div>
    )
}