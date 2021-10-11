// *** Qui tắc khai báo tên biến: (Đúng)
// let true_variable1 
// let trueVariable2 
// let _trueNumber 
// let $newNumber 
// let __lastNumber 


// *** Khai báo tên biến: (Sai) 
// let 2number
// let FalseVariable1 
// let False_Variable2 
// let false%variable
// let &lastVariable

// -------------Bai-2-------------------------
let number1 = 2
console.log('Number1: ' + number1)
let number2 = 4
console.log('Number2: ' + number2)
console.log('Toan tu +: ' + (number1 + number2))
console.log('Toan tu -: ' + (number1 - number2))
console.log('Toan tu *: ' + (number1 * number2))
console.log('Toan tu /: ' + (number1 / number2))
console.log('Toan tu %: ' + (number1 % number2))

// -------------Bai-3-------------------------
console.log('Bai 3.1')
let x1 = 5
let sum = ++x1 + x1++ - --x1 - x1-- // 6 + 6 - 6 - 6
console.log(sum)

console.log('Bai 3.2')
let x2 = 6
let y2 = 10 
// Tính: ++y - y++ + x++ + x-- - --x - --y
let sum2 = ++y2 - y2++ + x2++ + x2-- - --x2 - --y2 // 11 - 11 + 6 + 7 - 5 - 11 
console.log(sum2)

console.log('Bai 3.3')
let x3 = 10
let y3 = 12 
let z3 = 16
// Tính: ++y - y++ + x++ + x-- - --x - --y
let sum3 = x3++ + z3-- - --x3 + --y3 - y3-- + ++y3 + ++z3 + --z3 + x3-- //  10 + 16 - 10 + 11 - 11 + 11 + 16 + 15 +10 
console.log(sum3)

// x3=9, z3 = 15, y3=11
console.log('Bai 3.3 lan` 2')
sum4 = ++x3 - x3++ + z3++ + ++y3 - y3-- // 10 - 10 + 15 + 12 - 12
console.log(sum4)

// -------------Bai-4-------------------------
console.log('Bai 4 - khai bao 5 kieu du lieu: ')
let number = 16
let string = 'Chao mung den voi Fe004'
let obj = {firstName: 'Vinh', lastName: 'Nguyen'}
let array = [0,1,2,3,4,5]
let boolean = true
// console.log(boolean, typeof boolean)

// -------------Bai-5-------------------------
let array2 = [1,2,3,4,5,6,7,8,9,10]
let sumArray = array2[0] + array2[1]
let tich = array2[0] * array2[9]
console.log(array2)
console.log('Tong 2 phan tu [0] vs [1] cua mang la: ' + sumArray)
console.log('Tich 2 phan tu [0] vs [9] cua mang la: ' + tich)

// -------------Bai-6-------------------------
let obj2 = {firstName:'Vinh', lastName:'Nguyen', age:'21', favorite:'badminton'}
console.log(obj2)
obj2.firstName = 'Thanh'
obj2.lastName = 'Le'
console.log('Firstname moi: ')
console.log(obj2.firstName)
console.log('Lastname moi: ')
console.log(obj2.lastName)