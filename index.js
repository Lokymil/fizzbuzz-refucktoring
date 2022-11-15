const FIZZ = 'fizz';
const BUZZ = 'buzz';

const isMultipleOf = (factor) => (number) => {
  return number % factor === 0;
};

const fizzBuzz = (number) => {
  const isFizz = isMultipleOf(3)(number);
  const isBuzz = isMultipleOf(5)(number);

  let result = '';

  if (isFizz) {
    result += FIZZ;
  }

  if (isBuzz) {
    result += BUZZ;
  }

  if (!isFizz && !isBuzz) {
    result += number;
  }

  return result;
};

module.exports = {
  fizzBuzz,
};
