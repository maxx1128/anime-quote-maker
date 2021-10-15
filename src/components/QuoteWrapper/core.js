export function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}

export function randomColorCode(characters) {
  const getRandomChar = () => characters[Math.floor(Math.random()*characters.length)];

  return `#${getRandomChar()}${getRandomChar()}${getRandomChar()}${getRandomChar()}${getRandomChar()}${getRandomChar()}`
}
