
import creditcard from '../../Icons/creditcard.svg';
import '../Style/SignIn.css';
import { Link } from 'react-router-dom';
export default function SignInHeader() {
    return(
        <div>
            <div className='logo-app-signin'>
                <img src={creditcard} alt="credit card" width="100px" />
                <div>Personal Finance</div>
            </div>
            <div className='login-message-signin'>
                if You have Already an Account Please <Link id='link' to={'/Auth'}>LogIn</Link>
            </div>
        </div>
    )
}