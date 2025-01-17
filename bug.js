```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect condition for cleanup function
    return () => {
      if (count > 0) { //This condition will cause issues if count is 0 on unmount
        console.log('cleanup');
      }
    };
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```