import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from "../Login/login";
import Home from "../HomePage/Home";
import Signup from "../Signup/Signup";
export default function RoutesApp() {
    return(
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Auth" element={<Login />} />
                    <Route path="/SignIn" element={<Signup />} />
                </Routes>
            </Router>
        </>
    )
}