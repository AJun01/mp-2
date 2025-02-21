import React, { useState } from "react";
import './App.css';  

function App() {
  const [inputText, setInputText] = useState("");
  const [imageData, setImageData] = useState({
    id: 0, 
    name: "",
    imageUrl: "",
    timestamp: "",
    size: "300x300",
  });

  const [currentId, setCurrentId] = useState(0);  
  const [history, setHistory] = useState<{ id: number; name: string; imageUrl: string; timestamp: string; size: string }[]>([]);
  const [selectedImage, setSelectedImage] = useState<{ id: number; name: string; imageUrl: string; timestamp: string; size: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleButtonClick = () => {
    if (inputText.trim() !== "") {
      const newImageData = {
        id: currentId, 
        name: inputText,
        imageUrl: `https://robohash.org/${inputText}.png`,
        timestamp: new Date().toLocaleString(),
        size: "300x300",
      };

      setHistory((prevHistory) => [...prevHistory, newImageData]);

      setImageData(newImageData);

      setCurrentId(prevId => prevId + 1);
    }
  };

  const handleHistorySelect = (id: number) => {
    const image = history.find((item) => item.id === id);
    setSelectedImage(image || null);

  };

  return (
    <div className="wrapper">
      <h1>Do it, Generate a bot just for you</h1>
      <div className="form-container">
        <input
          type="text"
          placeholder="Enter a name"
          value={inputText}
          onChange={handleInputChange}
        />
        <button onClick={handleButtonClick}>Generate</button>
      </div>

       
      {history.length > 0 && (
        <div>
          <label htmlFor="history">Select a Bot from History:</label>
          <select
            id="history"
            onChange={(e) => handleHistorySelect(Number(e.target.value))}
            value={selectedImage ? selectedImage.id : ""}
          >
            <option value="" disabled>Select an image</option>
            {history.map((item) => (
              <option key={item.id} value={item.id}>
                Bot {item.id} - {item.name}
              </option>
            ))}
          </select>
        </div>
      )}

      {(selectedImage || imageData.imageUrl) && (
        <div>
          <h3>Here is your Robo Image:</h3>
          <img
            src={(selectedImage || imageData).imageUrl}
            alt={`Generated Robo Image: ${(selectedImage || imageData).name}`}
            width={(selectedImage || imageData).size.split('x')[0]}
            height={(selectedImage || imageData).size.split('x')[1]}
          />
          <div>
            <p><strong>ID:</strong> {(selectedImage || imageData).id}</p>
            <p><strong>Name:</strong> {(selectedImage || imageData).name}</p>
            <p><strong>Generated At:</strong> {(selectedImage || imageData).timestamp}</p>
            <p><strong>Image Size:</strong> {(selectedImage || imageData).size}</p>
          </div>
        </div>
      )}

      {!imageData.imageUrl && <p className="message">Please enter a name for a random funny-looking bot</p>}
    </div>
  );
}

export default App;
