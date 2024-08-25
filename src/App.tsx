import React from 'react';
import ColorList from './components/colorList';
import EvenNumbers from './components/evenNumber';
import UserList from './components/UserList';


const App: React.FC = () => {
    // Task 1
    const greeting: string = "Hello, TypeScript!";
    
    // Task 2
    const numberList: number[] = [5, 10, 15];
    
    // Task 3
    const calculateSum = (a: number, b: number): number => {
        return a + b;
    };

    return (
        <div>
            <h1>{greeting}</h1>
            <h2>Number List:</h2>
            <ul>
                {numberList.map((number, index) => (
                    <li key={index}>{number}</li>
                ))}
            </ul>
            <h2>Sum of 5 and 10:</h2>
            <p>{calculateSum(5, 10)}</p>
            <section>
              <h2>Color List</h2>
              <ColorList />
            </section>
            <section>
              <h2>Even Numbers</h2>
              <EvenNumbers />
            </section>
            <section>
              <h2>User List</h2>
              <UserList />
            </section>
        </div>
    );
};

export default App;
