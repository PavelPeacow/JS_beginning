/* Какое будет выведено значение: let x = 5; alert( x++ ); ?    6

Чему равно такое выражение: [ ] + false - null + true ?     NaN     

Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?  2

Чему равна сумма [ ] + 1 + 2?       3

Что выведет этот код: alert( "1"[0] )?  1

Чему равно 2 && 1 && null && 0 && undefined ? null

Есть ли разница между выражениями? !!( a && b ) и (a && b)?

Что выведет этот код: alert( null || 2 && 3 || 4 ); ?

a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?

Что выведет этот код: alert( +"Infinity" ); ? 

Верно ли сравнение: "Ёжик" > "яблоко"?  false

Чему равно 0 || "" || 2 || undefined || true || falsе ? null   2
 */



/* let x = 5; alert( x++ );  */ // 5

/* [ ] + false - null + true ? */
/* console.log(typeof([] + false)); */ // false

/* let y = 1;
let x = y = 2;
alert(x); */

/* alert( "1"[0] ); */

/* console.log(2 && 1 && null && 0 && undefined); */
// И запинается на лжи
// ИЛИ запинется на правде


/* console.log(!!( 1 && 2 ) === (1 && 2)); */
/*   
        3        3    3  
alert( null || 2 && 3 || 4 );
 */

/* const a = [1, 2, 3]; 
const b = [1, 2, 3]; */

console.log(0 || "" || 2 || undefined || true || falsе);