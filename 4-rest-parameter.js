export default function returnHowManyArguments(...num) {
  let sum = 0;

  for (let i = 0; i < num.length; i += 1) {
    sum += 1;
  }
  return sum;
}
