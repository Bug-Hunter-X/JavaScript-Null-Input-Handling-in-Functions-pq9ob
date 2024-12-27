function foo(a, b) {
  a = a === null ? 0 : a; // Set default to 0 if null
  b = b === null ? 0 : b; // Set default to 0 if null

  // ... rest of the function. Now safe to use 'a' and 'b'
  return a + b;
}