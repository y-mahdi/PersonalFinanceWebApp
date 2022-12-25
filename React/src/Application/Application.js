import FooterApp from "./Components/FooterApp"
import HeaderApp from "./Components/HeaderApp";
import BodyApp from "./Components/BodyApp";

export default function Application() {
    return (
        <div className="Application-Container">
            <HeaderApp />
            <BodyApp />
            <FooterApp />
        </div>
    )
}