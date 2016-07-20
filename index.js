const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield']
function destructivelyAppendKitten(kitten) {
  kittens.push(kitten);
}
function destructivelyPrependKitten(kitten) {
  kittens.unshift(kitten);
}
function destructivelyRemoveLastKitten() {
  kittens.pop();
}
function destructivelyRemoveFirstKitten() {
  kittens.shift();
}
function appendKitten(kitten) {
  new_kittens = [...kittens, kitten];
  return new_kittens;
}
function prependKitten(kitten) {
  new_kittens = [kitten, ...kittens];
  return new_kittens;
}
function removeLastKitten() {
  new_kittens = kittens.slice(0, kittens.length - 1);
  return new_kittens;
}
function removeFirstKitten() {
  new_kittens = kittens.slice(1);
  return new_kittens;
}