import "./App.css";
import Chart from "./components/chart";
import Histogram from "./components/chart2";
import React, { useState } from "react";

function App() {
  const [freqArray, setFreqArray] = useState(undefined);

  const handleClick = () => {
    fetch("https://www.terriblytinytales.com/test.txt")
      .then((response) => response.text())
      .then((data) => {
        const lowerCaseData = data.toLowerCase();

        const words = lowerCaseData.split(" ");

        // Create an object to store word frequencies
        const frequencies = words.reduce((acc, word) => {
          if (!acc[word]) {
            acc[word] = 1;
          } else {
            acc[word] += 1;
          }
          return acc;
        }, {});

        // Convert the object to an array of key-value pairs
        const frequenciesArray = Object.entries(frequencies);

        // Sort the array by frequency in descending order
        frequenciesArray.sort((a, b) => b[1] - a[1]);

        // Get the 20 most frequent words
        const top20Frequencies = frequenciesArray.slice(0, 20);

        // Set the freqArray state variable to the top 20 frequencies
        setFreqArray(top20Frequencies);
        console.log(freqArray);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <button onClick={handleClick} className="submit-btn">Submit</button>

      <Chart array={freqArray} />
      <Histogram array={freqArray} />
    </div>
  );
}

export default App;
