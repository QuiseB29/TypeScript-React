import React from 'react';

const filterNumbers = (numbers: number[]): number[] => {
    return numbers.filter(number => number % 2 === 0);
};


const EvenNumbers: React.FC = () => {
    const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const evenNumbers = filterNumbers(numbers);

    return (
        <ul>
            {evenNumbers.map((number, index) => (
                <li key={index}>{number}</li>
            ))}
        </ul>
    );
};

export default EvenNumbers;
