import { Link } from 'react-router-dom';
import notFound from '../assets/notfound.svg'
import '../css/pages/notFound.css'
import useLoad from '../utilities/hooks/useLoad';
import Footer from "./components/Footer";
import Navbar from './components/Navbar';

const NotFound = () => {
  useLoad()
  return ( 
    <>
      <Navbar/>
      <div className="page">
        <div className="content">
          <h1>Not Found</h1>
          <img src={ notFound } alt="Not Found" />
          <p>Sorry, but the content you are looking for does not exist or has been moved</p>
          <Link to="/" className="btn btn-primary">Back to Home</Link>
        </div>
      </div>
      <Footer/>
    </>
   );
}

export default NotFound;