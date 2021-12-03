import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';

import {Header} from '../components/Header';
import {Home} from '../components/Home';
import {About} from '../components/About';
import {Dashboard} from '../components/Dashboard';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
};

