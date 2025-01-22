import "./App.css";
import Article from "./components/Article/Article";
import Blogpost from "./components/Blogpost/Blogpost";
import Contact from "./components/Contact/Contact";
import Context from "./components/Context/Context";
import Feature from "./components/Feature/Feature";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Tours from "./components/Tours/Tours";

function App() {
    return (
        <>
            <Header />
            <Context />
            <Article />
            <Tours />
            <Feature />
            <Blogpost />
            <Profile />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
