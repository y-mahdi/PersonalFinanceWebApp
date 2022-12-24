import Header from "./Components/Header";
import HomeBody from "./Components/HomeBody";
import Footer from "./Components/Footer";

export default function Home() {
    return(
        <div className="Home-container">
            <Header />
            <HomeBody />
            <Footer />
        </div>
    )
}