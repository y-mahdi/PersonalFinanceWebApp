import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from "../Login/login";
import Home from "../HomePage/Home";
import Signup from "../Signup/Signup";
import Application from "../Application/Application";
import History from "../SpendHistory/History";
export default function RoutesApp() {
    return(
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Auth" element={<Login />} />
                    <Route path="/SignIn" element={<Signup />} />
                    <Route path="/Application" element={<Application />} />
                    <Route path="/Application/History" element={<History />} />
                </Routes>
            </Router>
        </>
    )
}