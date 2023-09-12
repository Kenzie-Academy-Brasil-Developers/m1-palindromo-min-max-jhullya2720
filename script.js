function isPalindrome(str) {
  str = str.replace(/\s/g, '').toLowerCase();

  let start = 0;
  let end = str.length - 1;

  for (let i = 0; i < str.length; i++) {
    if (str[start] !== str[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
}

function arrayMaxMin(arr) {
  if (arr.length == 0) {
    return [];
  }
  let min = arr[0]
  let max = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];

    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  let resultado = [min, max];
  return resultado
}
isPalindrome()
arrayMaxMin()