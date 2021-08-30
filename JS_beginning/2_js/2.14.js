let num = 50;

/*   1 цикл */
while (num <= 55) {
   console.log(num);
   num++;
}

/*   2 цикл */
do {
   console.log(num);
   num++;
} while (num < 55);

/*  3 цикл */
for (let i = 1; i < 10; i++) {
   if (i === 6) {
      break;
      /* continue; */
   }

   console.log(i);
}
