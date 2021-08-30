const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');    

/* btn.onclick = function() {
    alert('123');
}; */


/* btn.addEventListener('click', () => {
    alert('123');
}); */

/* let i = 0; */
const deleteElement = (event) => {
    console.log(event.currentTarget);
    console.log(event.type);

/*     i++;
    if (i == 1) {
        btn.removeEventListener('click', deleteElement);
    } */
};


/* btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement); */

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});
});

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();

    console.log(event.target);
});