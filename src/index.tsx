import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Operations, parseStack } from './utils/parseStack';
import { ColorModeContextProvider } from './theme/ColorModeContext';
import { Wrapper } from './components/Wrapper/Wrapper';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ColorModeContextProvider>
      <Wrapper>
        <App />
      </Wrapper>
    </ColorModeContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const test1 = [
  5, '+', 2
];
console.log(`test ${test1.join(' ')}:`, parseStack(test1));
console.log('Actual answer:', 5 + 2, '\n');

const test2 = [
  5, '-', 2
];
console.log(`test ${test2.join(' ')}:`, parseStack(test2));
console.log('Actual answer:', 5 - 2, '\n');

const test3 = [
  5, '*', 2
];
console.log(`test ${test3.join(' ')}:`, parseStack(test3));
console.log('Actual answer:', 5 * 2, '\n');

const test4 = [
  5, '/', 2
];
console.log(`test ${test4.join(' ')}:`, parseStack(test4));
console.log('Actual answer:', 5 / 2, '\n');

const test5 = [
  5, '+'
];
console.log(`test ${test5.join(' ')}:`, parseStack(test5));
console.log('Actual answer:', undefined, '\n');

const test6 = [
  5, '-', 10, '-', 2
];
console.log(`test ${test6.join(' ')}:`, parseStack(test6));
console.log('Actual answer:', 5 - 10 - 2, '\n');

const test7 = [
  5, '+', 10, '-', 2
];
console.log(`test ${test7.join(' ')}:`, parseStack(test7));
console.log('Actual answer:', 5 + 10 - 2, '\n');

const test8 = [
  10, '+', 2, '*', 5
];
console.log(`test ${test8.join(' ')}:`, parseStack(test8));
console.log('Actual answer:', 10 + 2 * 5, '\n');

const test9 = [
  10, Operations.ADDITION, 2, Operations.MULTIPLICATION, 5
];
console.log(`test ${test9.join(' ')}:`, parseStack(test9));
console.log('Actual answer:', 10 + 2 * 5, '\n');

const test10 = [
  10, Operations.ADDITION, 2, Operations.MULTIPLICATION, [5, Operations.ADDITION, 5], Operations.DIVISION, 10
];
console.log(`test 10 + 2 * (5 + 5) / 10:`, parseStack(test10));
console.log('Actual answer:', 10 + 2 * (5 + 5) / 10, '\n');
