
import creditcard from '../../Icons/creditcard.svg';
import '../Style/login.css';
export default function HeaderLogin() {
    return (
        <div>
            <div className="logo-panel-header">
                <img src={creditcard} alt="credit card icon" width="100px"/>
                <div>Personal Finance</div>
            </div>
        </div>
    )
}