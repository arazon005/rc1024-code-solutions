function waitTwoSeconds(): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Done Waiting!');
    }, 2000);
  });
}

async function performWait(): Promise<void> {
  try {
    const wait = await waitTwoSeconds();
    console.log('I waited,', wait);
  } catch (error) {
    console.error('I did not wait', error);
  }
}

performWait();
