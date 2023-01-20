(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    function showName() {
        console.log("Вася!");
    }
    setTimeout(showName, 0);
    console.log("Коля!");
    let showMessage;
    if (true) showMessage = function() {
        console.log("Повідомлення");
    };
    showMessage();
    let arr = [ 9, 2, 8 ];
    let reduseValue = arr.reduce((function(previousValue, item, index, array) {
        console.log(previousValue);
    }));
    console.log(reduseValue);
    let users = [ "Ваня", "Іштван", "Оля" ];
    let removed = users.splice(1, 1);
    console.log(removed);
    const elemsLike = document.querySelectorAll(".like");
    console.log(elemsLike);
    const mainElement = document.documentElement;
    const lineWidth = +window.innerWidth - +mainElement.clientWidth;
    console.log(lineWidth);
    const object1 = document.querySelector(".object1");
    const object1Coord = object1.getBoundingClientRect();
    console.log(object1Coord);
    const object2 = document.querySelector(".object2");
    const object2Coord = object2.getBoundingClientRect();
    console.log(object2Coord);
    const object3 = document.querySelector(".object3");
    const object3Coord = object3.getBoundingClientRect();
    console.log(object3Coord);
    window["FLS"] = true;
    isWebp();
})();