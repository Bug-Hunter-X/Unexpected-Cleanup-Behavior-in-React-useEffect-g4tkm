# React useEffect Cleanup Bug

This repository demonstrates a common error in React's `useEffect` hook: a cleanup function with a conditional that depends on the component's state. This can cause unexpected behavior, particularly when the component unmounts prematurely.

## Problem

The `bug.js` file contains a component that uses `useEffect` to log a message when the component is unmounted. However, the cleanup function only executes if the `count` state variable is greater than 0. This means that if the component unmounts while `count` is 0, the cleanup function will not run, potentially leading to issues like memory leaks or unexpected side effects.

## Solution

The `bugSolution.js` file provides a corrected version of the component. The cleanup function is now unconditional, ensuring it always executes when the component is unmounted, regardless of the state.

## How to run

1. Clone this repository.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the necessary dependencies.
4. Run `npm start` to start the development server.

This will start a simple React app demonstrating the bug and its solution.