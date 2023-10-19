import Header from "../components/Header";
import HighlightedContent from "../components/HomePage/HighlightedContent";
import FeaturedCollection from "../components/HomePage/FeaturedCollection";
import NFTSection from "../components/HomePage/NFTSection";
import Footer from "../components/Footer";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";

function HomePage() {
    const [showButtonUp, setShowButtonUp] = useState(false);
    const { scrollTop } = useContext(UserContext);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollTop.current) {
                if (window.pageYOffset > scrollTop.current.offsetTop) {
                    setShowButtonUp(true);
                } else {
                    setShowButtonUp(false);
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrollTop]);

    const goUp = () => {
        if (scrollTop.current) {
            scrollTop.current.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div className="home">
            <Header />
            <HighlightedContent />
            <FeaturedCollection />
            <NFTSection />
            <Footer />
            <div className="button-up" onClick={goUp} style={{display: `${showButtonUp === true ? '' : 'none'}`}}>
                <i className="fa-sharp fa-solid fa-arrow-up fa-bounce"></i>
            </div>
        </div>
    );
}

export default HomePage;