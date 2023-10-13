// console.log('ciao')

// richiamiamo l'elemento grid dal dom 
const gridDomeElement = document.querySelector('.grid');
console.log(gridDomeElement);



//richaimo l'elemento button play dal DOM
const btnPlayDomElement = document.getElementById('btn-play');

// aggiungo l'evento click del pulsante play
btnPlayDomElement.addEventListener('click', function () {
    // console.log('click')

    gridDomeElement.innerHTML = ''
    // usiamo il ciclo for per ricavare i numeri da 1 a 100
    // che metteremo nelle celle
    for (let i = 0; i < 100; i++ ) {
    const n = i + 1;
    // console.log(n)

    // inizializziamo una costante dove creeremo dei div nel DOM(html)
    const htmlcell = `<div class="cell">${n}</div>`
    console.log(htmlcell);

    // importiamo i div creati nel dom
    gridDomeElement.innerHTML += htmlcell;


    }

})