/* eslint-disable react/prop-types */
import { useState } from 'react';

function App() {
    return (
        <div className="w-full">
            <Header title="Simple React Application" />
            <div className="max-w-md mx-auto">
                <Content />
            </div>
            <Footer quote="Be yourself; everyone else is already taken." />
        </div>
    );
}

function Header({ title }) {
    return <h1 className="text-2xl font-bold mb-4 bg-blue-500 text-white p-4">{title}</h1>;
}

function Content() {
    const [enteredText, setEnteredText] = useState('');
    const [displayedText, setDisplayedText] = useState('');

    const handleButtonClick = () => {
        setDisplayedText(enteredText);
    };

    const handleTextAreaChange = (event) => {
        setEnteredText(event.target.value);
    };

    return (
        <div>
            <textarea className="border p-2 mb-2 w-full" rows="3" cols="30" onChange={handleTextAreaChange} />
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" onClick={handleButtonClick}>
                Display Text
            </button>
            {displayedText && <p className="mt-4">{displayedText}</p>}
        </div>
    );
}

function Footer({ quote }) {
    return (
        <footer className="bg-gray-800 text-white text-center py-4 absolute bottom-0 w-full">
            <p>{quote}</p>
            <p className="text-xs text-gray-500 mt-2">Created By Sarwar Jahan</p>
        </footer>
    );
}

export default App;
