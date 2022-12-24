import creditcard from '../../Icons/creditcard.svg';
import '../Style/Home.css';
import { Link } from 'react-router-dom';
export default function Header() {
    return(
        <div>
            <div className="Header-panel">
                <div>
                    <img src={creditcard} alt="wallet logo" width="80px"/> 
                </div>
                <div className="Title-logo-header">
                    <div>
                        Manage Your Personal Finance
                    </div>
                </div>
                <div className='btn-nav-header'>
                    <Link to={'/Auth'} className="link-style-header">
                        Login
                    </Link>
                </div>
                <div className='btn-nav-header'>
                    <Link to={'/SignIn'} className="link-style-header">
                        Sign In
                    </Link>
                </div>
            </div>
        </div>
    )
}