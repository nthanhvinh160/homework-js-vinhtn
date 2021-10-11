console.log("---Bài 1---")

function evenOrOdd(a) {
    if ((a % 2) === 0) {
        console.log(a + " Là số chẵn")
    } else {
        console.log(a + "  Là số lẻ")
    }
    return a;
}
evenOrOdd(6)
console.log("---Bài 1.2---")

function check(a) {
    if (evenOrOdd(a) >= 0) {
        console.log('và là số Dương')
    } else if (evenOrOdd(a) < 0) {
        console.log('và là số Âm')
    }
}
check(7)
console.log("---Bài 2---")

function leapYear(nam) {
    if ((nam % 4 === 0 && nam % 100 !== 0) || (nam % 400 === 0)) {
        return 1;
    } else {
        return 0;
    }
}
if (leapYear(2021) == 1) {
    function dateTime(thang) {
        switch (thang) {
            case 1:
                console.log('Tháng 1 có 31 ngày')
                break;
            case 2:
                console.log('Tháng 2 có 29 ngày')
                break;
            case 3:
                console.log('Tháng 3 có 31 ngày')
                break;
            case 4:
                console.log('Tháng 4 có 30 ngày')
                break;
            case 5:
                console.log('Tháng 5 có 31 ngày')
                break;
            case 6:
                console.log('Tháng 6 có 30 ngày')
                break;
            case 7:
                console.log('Tháng 2 có 31 ngày')
                break;
            case 8:
                console.log('Tháng 8 có 31 ngày')
                break;
            case 9:
                console.log('Tháng 9 có 30 ngày')
                break;
            case 10:
                console.log('Tháng 10 có 31 ngày')
                break;
            case 11:
                console.log('Tháng 11 có 30 ngày')
                break;
            case 12:
                console.log('Tháng 12 có 31 ngày')
                break;
            default:
                console.log('Bạn phải nhập từ 1 -> 12');
        }
    }
    dateTime(2)
} else {
    function dateTime(thang) {
        switch (thang) {
            case 1:
                console.log('Tháng 1 có 31 ngày')
                break;
            case 2:
                console.log('Tháng 2 có 28 ngày')
                break;
            case 3:
                console.log('Tháng 3 có 31 ngày')
                break;
            case 4:
                console.log('Tháng 4 có 30 ngày')
                break;
            case 5:
                console.log('Tháng 5 có 31 ngày')
                break;
            case 6:
                console.log('Tháng 6 có 30 ngày')
                break;
            case 7:
                console.log('Tháng 2 có 31 ngày')
                break;
            case 8:
                console.log('Tháng 8 có 31 ngày')
                break;
            case 9:
                console.log('Tháng 9 có 30 ngày')
                break;
            case 10:
                console.log('Tháng 10 có 31 ngày')
                break;
            case 11:
                console.log('Tháng 11 có 30 ngày')
                break;
            case 12:
                console.log('Tháng 12 có 31 ngày')
                break;
            default:
                console.log('Bạn phải nhập từ 1 -> 12');
        }
    }
    dateTime(2)
}

console.log("---Bài 3---")

function checkNumber(soNguyen) {
    if (soNguyen === 0) {
        console.log("Là số 0")
    } else if (soNguyen === parseInt(soNguyen) && soNguyen > 0) {
        console.log(soNguyen + " Là số Nguyên Dương")
    } else if (soNguyen === parseInt(soNguyen) && soNguyen < 0) {
        console.log(soNguyen + " Là số Nguyên Âm")
    } else {
        console.log(soNguyen + " Không phải là số Nguyên!")
    }
}
checkNumber(3)
console.log("---Bài 4---")
function calculator(a, b, c) {
    if( (typeof a === 'string') || (typeof b === 'string') ){
        console.log('Dữ liệu nhập vào không phải là số!')
    } else {
        a = parseInt(a)
        b = parseInt(b)
        switch (c) {
            case '+':
                console.log(a + b);
                break;
            case '-':
                console.log(a - b);
                break;
            case '*':
                console.log(a * b);
                break;
            case '/':
                console.log(a / b);
                break;
        }
    }
}
calculator(4, 7, '*')
