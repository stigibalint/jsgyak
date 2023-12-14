const jelentkezokLista = document.getElementById('jelentkezok');
const tovabbjutottakLista = document.getElementById('tovabbjutottak');

// Kiválasztja az összes "li" elemet a "main" elemen belül
const liElemek = document.querySelectorAll('li');

// Arrow függvény
const kezeljLiElemeket = () => {
    liElemek.forEach(liElem => {
        liElem.addEventListener('click', () => {
            // Ha már a tovabbjutottak között van, akkor visszakerül a jelentkezők listába
            if (tovabbjutottakLista.contains(liElem)) {
                tovabbjutottakLista.removeChild(liElem);
                jelentkezokLista.appendChild(liElem);
            } else {
                // Ellenkező esetben átkerül a tovabbjutottak listába
                jelentkezokLista.removeChild(liElem);
                tovabbjutottakLista.appendChild(liElem);
            }
        });

        liElem.addEventListener('dblclick', () => {
            // Ellenőrizzük, hogy az elem már a jelentkezők listájában van-e
            const martovabbJutott = tovabbjutottakLista.contains(liElem);

            // Ha csak egyszer kattintunk és az elem nem a jelentkezők listájában van, adj hozzá sárga keretet
            
                liElem.classList.toggle('sajat-kijeloles');
            
        });
    });
    /*
    meretesGomb.addEventListener('click', () => {
        // Méretre állítjuk az összes jelentkező képét
        jelentkezokLista.querySelectorAll('li img').forEach(imgElem => {
            imgElem.classList.toggle('meretes-kep');
        });
    });
        szamolGomb.addEventListener('click', () => {
        let osszeg = 0;

        // Gyűjtsük össze a jelentkezők listájában lévő képek alt szövegeit és számoljuk össze őket
        const imgElemek = jelentkezokLista.querySelectorAll('li img');
        for (let i = 0; i < imgElemek.length; i++) {
            const altSzam = parseInt(imgElemek[i].alt, 10);
            if (!isNaN(altSzam)) {
                osszeg += altSzam;
            }
        }
    */
};

// Függvény hozzáadása a "load" eseményhez
window.addEventListener('load', kezeljLiElemeket);
