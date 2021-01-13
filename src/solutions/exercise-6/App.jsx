import React, {createContext} from 'react';
import Header from './components/Header.jsx';
import HomePage from './pages/HomePage.jsx';
import data from '../../data.json';

export const PhotosContext = createContext()

function App() {
    return (
        <PhotosContext.Provider value={{photos: data.photos}} >
            <div>
                <Header />
                <HomePage />
            </div>
        </PhotosContext.Provider>
    );
}

export default App;
