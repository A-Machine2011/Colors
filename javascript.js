const all1 = document.querySelector(".pink");
const all2 = document.querySelector(".blue");
const all3 = document.querySelector(".yellow");
const trap = document.querySelector(".opposite")

trap.addEventListener('click', function () {
    all1.classList.toggle("green")
});

trap.addEventListener('click', function () {
    all2.classList.toggle("orange")
});

trap.addEventListener('click', function () {
    all3.classList.toggle("purple")
});