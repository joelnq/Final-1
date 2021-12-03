import { Link } from 'react-router-dom';


export const Header = () => {
    return (
        <header>
            <nav>
               
                    <Link to="/" className="link"> Home </Link>
                    <Link to="/about" className="link"> About </Link>
                    <Link to="/dashboard" className="link"> Dashboard </Link>
        
            </nav>
        </header>
    );
};
