
import creditcard from '../../Icons/creditcard.svg';
import history from '../../Icons/history.svg';
export default function HistoryHeader() {
    return(
        <div>
            <div className="history-header-container">
                <img src={creditcard} alt="credit card icon" width="50px" />
                <div className='history-title-panel'>
                    <img src={history} alt="History icon" width="15px" />History
                </div>
            </div>
        </div>
    )
}