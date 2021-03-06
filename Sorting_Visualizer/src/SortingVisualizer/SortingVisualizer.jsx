import React from 'react';
import Select from 'react-select'
import './SortingVisualizer.css';

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],

        };
    }

    componentDidMount() { 
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < 125; i++) {
            array.push(randomIntFromInterval(5, 1000));
        }
        this.setState({array});
    }

    mergeSort() {}

    quickSort() {}
    
    heapSort() {}

    bubbleSort() {}

    render() {
        const {array} = this.state;

        return (
          <div className="array-container">  
            {array.map((value, idx) => (
                <div 
                  className="array-bar" 
                  key={idx}
                  style={{height: `${value}px`}}></div>
            ))}  
            <button onClick={() => this.resetArray()}>Generate New Array</button>
            <button onClick={() => this.mergeSort()}>Merge Sort</button>
            <button onClick={() => this.quickSort()}>Quick Sort</button>
            <button onClick={() => this.heapSort()}>Heap Sort</button>
            <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
          </div>
        )
    }
}

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}