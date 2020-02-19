const cookieBanner = document.querySelector(".cookie-")
const cookieBtn = document.querySelector(".cookieBtn");

cookieBtn.addEventListener("click", removeElement);

    // pobieram mój przycisk utworzony kilka linijek powyżej, szukając button w elemencie LI
    const btn = li.querySelector('button');
    
    //przypisuję do niego akcję kliknięcia, która ma na celu usuwanie elementu
    btn.addEventListener("click", removeElementFromList);
    return li;
}

// funkcja mająca na celu usuwanie elementu z drzewa DOM
const removeElementFromList = function (event) {
    // event.target jest to mój element, który został kliknięty, w tym przypadku jest to mój BUTTON
    const pressedBtn = event.target;

    // Pobieram jego rodzica, którym jest LI, w celu jego skasowania
    const li = pressedBtn.parentElement;

    // usuwam li  DOM
    li.remove();

    // aktualizuje stan w localstorage
    saveToLocalStorage();
}
