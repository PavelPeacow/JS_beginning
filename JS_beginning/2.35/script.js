const p = document.querySelectorAll('p');
console.log(p);



function loadScript(scr) {
    const script = document.createElement('script');
    script.src = scr;
    script.async = false;
    document.body.append(script);
}

loadScript('test.js');
loadScript('some.js');