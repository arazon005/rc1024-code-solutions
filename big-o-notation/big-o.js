/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {}; // _ * _ = O(1)
  const unique = []; // _ * _ = O(1)
  for (
    let i = 0; // _ * _ = O(1)
    i < words.length; // _ * _ = O(N)
    i++ // _ * _ = O(N)
  ) {
    const word = words[i]; // _ * _ = O(N)
    if (!seen[word]) {
      // _ * _ = O(log_2(N))
      seen[word] = true; // _ * _ = O(log_2(N))
      unique[unique.length] = word; // _ * _ = O(log_2(N))
    }
  }
  return unique; // _ * _ = O(1)
} // Big O Notation for uniqueLinear: O(log_2(N))

function uniqueQuadratic(words) {
  const unique = []; // _ * _ = O(1)
  for (
    let i = 0; // _ * _ = O(1)
    i < words.length; // _ * _ = O(N)
    i++ // _ * _ = O(N)
  ) {
    const word = words[i]; // _ * _ = O(N)
    let isUnique = true; // _ * _ = O(N)
    for (
      let c = 0; // _ * _ = O(N)
      c < i; // _ * _ = O(N^2)
      c++ // _ * _ = O(N^2)
    ) {
      const comparing = words[c]; // _ * _ = O(N^2)
      if (comparing === word) {
        // _ * _ = O(N^2)
        isUnique = false; // _ * _ = O(N*log_2(N))
      }
    }
    if (isUnique) {
      // _ * _ = O(N)
      unique[unique.length] = word; // _ * _ = O(log_2(N))
    }
  }
  return unique; // _ * _ = O(1)
} // Big O Notation for uniqueQuadratic: O(N^2)
