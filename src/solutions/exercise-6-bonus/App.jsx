import React, {createContext, useState} from 'react';
import Header from './components/Header.jsx';
import HomePage from './pages/HomePage.jsx';
import data from '../../data.json';

export const PhotosContext = createContext()

function App() {
    const [photos, setPhotos] = useState(data.photos)
    const addPhoto = (url) => {
        setPhotos((prevState) => {
            const newPhoto = {
                url: url,
                likes: 0
            }
            return prevState.concat(newPhoto)

            // Photo added to the beginning of array SOLUTION
            // instead of the above return statement use:
            // return prevState.splice(0, 0, newPhoto)
        })
    }
    return (
        <PhotosContext.Provider value={{photos, addPhoto}} >
            <div>
                <Header />
                <HomePage />
            </div>
        </PhotosContext.Provider>
    );
}

export default App;