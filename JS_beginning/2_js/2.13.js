if (4 == 9) {
   console.log("ok!");
} else {
   console.log("error");
}



if (num < 49) {
   console.log("error");
} else if (num > 100) {
   console.log("Mnogo");
} else {
   console.log("ok!");
}


(num === 50) ? console.log("ok!") : console.log("error"); тернарный оператор

const num = 50;

switch (num) {
    case 49:
        console.log('Neverno');
        break;
    case 100:
        console.log('Neverno');
        break;
    case 50:
        console.log('Pravda');
        break;
    default:
        console.log('Ne v itot raz');
        break;
}