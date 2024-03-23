try {
  // ...
} catch (err) {
  if (err instanceof Error) {
    console.log(err.message);
  }
}