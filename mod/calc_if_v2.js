const calc = (operation, a, b) => {
  const noRequiredOperands = a === undefined && b === undefined;
  const isNotNan = !Number.isNaN(a) && !Number.isNaN(b);
  const isNumber = typeof a === "number" && typeof b === "number";
  const isValid = isNotNan && isNumber;

  if (noRequiredOperands) {
    return "ошибка передайте оба операнда";
  } else if (!isValid) {
    return "введите число";
  } else if (operation === "add") {
    return a + b;
  } else if (operation === "multi") {
    return a * b;
  } else if (operation === "sub") {
    return a - b;
  } else if (operation === "min") {
    return Math.min(a, b);
  } else if (operation === "max") {
    return Math.max(a, b);
  }
};
console.log(calc("add"));
console.log(calc("add", "1", 1));
console.log(calc("add", 1, 2));
console.log(calc("multi", 2, 3));
console.log(calc("sub", 3, 2));
console.log(calc("min", 200, 1000));
console.log(calc("max", 200, 1000));
