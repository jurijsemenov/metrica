function calc(operation, a, b) {
  const noRequiredOperands = a === undefined && b === undefined;
  const isNotNan = !Number.isNaN(a) && !Number.isNaN(b);
  const isNumber = typeof a === "number" && typeof b === "number";
  const isValid = isNumber && isNotNan;

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
}
console.log(calc("add"));
console.log(calc("add", "1", 1));
console.log(calc("add", 1, 2));
console.log(calc("multi", 2, 3));
console.log(calc("sub", 3, 2));
console.log(calc("min", 200, 1000));
console.log(calc("max", 200, 1000));
// const age = '1';
// const isNotNaN = !Number.isNaN(age); // сохраним проверку на NaN в константу
// const isNumber = typeof age === 'number'; // сохраним проверку типа в константу
// const isValid = isNumber && isNotNaN; // сохраним логический результат двух проверок

// if (!isValid) { // если не валидно
//   console.log("возраст должен быть числом"); // покажем сообщение об ошибке
// }

// остальная логика

function calc(operation, a, b) {
  switch (operation) {
    case "add":
      return console.log(a + b);
    case "multi":
      return console.log(a * b);
    case "sub":
      return console.log(a - b);
  }
}

calc("add", 1, 2);
calc("multi", 2, 3);
calc("sub", 3, 2);

//switch
// function calc(operation, a, b) {
//     switch(operation) {
//     case 'add':
//         return a + b;
//         case 'multi':
//          return a * b;
//      case 'sub':
//         return a - b;
//     }
//     }
//     console.log(calc('add', 1, 2));
//     console.log(calc('multi', 2, 3));
//     console.log(calc('sub', 3, 2));

// switch(calc) {
//     case 'add':
//        console.log(a + b);
//     case 'multi':
//        console.log(a * b);

//     case 'sub':
//        console.log(a - b);

//     }
// calc('add', 1, 2);
// calc('multi', 1, 2);
// calc('sub', 3, 2);

// function rating(){
// switch(+rating) {
//     case 1:
//     case 2:
//             console.log('низкикй рейтинг');
//             break;
//     case 3:
//     case 4:
//         console.log('средний рейтинг');
//         break;

//         case 5:
//         console.log('высокий рейтинг');
//         break;

//         default:
//         console.log('рейтинг не определен');
//         break;
// }
// }
// rating(1);

// switch(operation, a, b) {
//     case 'add':
//          a + b;
//         case 'multi':
//        return a * b;

//         case 'sub':
//         return a - b;

// }

// console.log(calc('add', 1, 2));
// console.log(calc('multi', 1, 2));
// console.log(calc('sub', 3, 2));
