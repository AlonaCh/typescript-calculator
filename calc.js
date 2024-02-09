// let a = '';
// let b = '';
// let sign = '';
// let finish = false;

// const integer = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// const action = ['-', '+', 'X', '/'];

// const view = document.querySelector('.calc-view');

// function clear() {
//     a = '';
//     b = '';
//     sign = '';
//     finish = false;
//     view.textContent = 0;
// }
// document.querySelector('.ac').onclick = clear;

// document.querySelector('.buttonContainer').onclick = (e) => {
//     if (!e.target.classList.contains('btn')) return;
//     if (e.target.classList.contains('ac')) return;

//     view.textContent = '';

//     const key = e.target.textContent;

//     if (integer.includes(key)) {
//         if (b === '' && sign === '') {
//             a += key;
//             view.textContent = a;

//         } else if (a !== '' && sign !== '' && finish) {

//             b = key;
//             finish = false;
//             view.textContent = b;
//         } else {
//             b += key;
//             view.textContent = b;
//         } return;
//     }
//     if (action.includes(key)) {
//         sign = key;
//         view.textContent = sign;
//         return;
//     };
//     if (key === '=') {
//         if (b === '') b = a;
//         switch (sign) {
//             case '+':
//                 a = (+a) + (+b);
//                 break;
//             case '-':
//                 a = a - b;
//                 break;
//             case 'X':
//                 a = a * b;
//                 break;
//             case '/':
//                 if (b === '0') {
//                     view.textContent = 'Error';
//                     a = '';
//                     b = '';
//                     sign = '';
//                     return;
//                 }
//                 a = a / b;
//                 break;
//         }
//         finish = true;
//         view.textContent = a;
//     }
// } 
