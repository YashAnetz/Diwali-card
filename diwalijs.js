"use strict";

let c1 = document.getElementById("d1");
let c2 = document.getElementById("d2");
let c3 = document.getElementById("d3");
let c4 = document.getElementById("d4");
let c5 = document.getElementById("d5");
let c6 = document.getElementById("d6");
let c7 = document.getElementById("d7");
let c8 = document.getElementById("d8");
let c9 = document.getElementById("d9");
let c10 = document.getElementById("d10");
let c11 = document.getElementById("d11");
let c12 = document.getElementById("d12");
let c13 = document.getElementById("d13");
let c14 = document.getElementById("d14");
let t1 = document.getElementById("t1");
let t2 = document.getElementById("t2");
let t3 = document.getElementById("t3");
let t4 = document.getElementById("t4");
let t5 = document.getElementById("t5");
let t6 = document.getElementById("t6");
let t7 = document.getElementById("t7");
let t8 = document.getElementById("t8");
let t9 = document.getElementById("t9");
let t10 = document.getElementById("t10");
let t11 = document.getElementById("t11");
let page1 = document.querySelector(".first");
let page2 = document.querySelector(".second");
let page3 = document.querySelector(".third");
let page4 = document.querySelector(".forth");
let name1 = document.querySelector(".name");
let submit = document.querySelector(".submit");
let final = document.querySelector(".final");
let from = document.querySelector(".from");
let disptext = document.querySelector(".text");
let again = document.querySelector(".again");

let card;
let text;

again.addEventListener("click", function () {
  page4.classList.add("hide");
  page1.classList.remove("hide");
});

submit.addEventListener("click", function () {
  if (name1.value == "") {
    name1.placeholder = "Enter Details";
    console.log("hi");
  } else {
    page3.classList.add("hide");
    page4.classList.remove("hide");
    final.src = `/${card}.jpg`;
    disptext.src = `/${text}.png`;
    from.textContent = `from - ${name1.value} 🪔 `;
  }
});

c1.addEventListener("click", function () {
  card = "diwali1";
  console.log(card);
  page1.classList.add("hide");
  page2.classList.remove("hide");
});

c2.addEventListener("click", function () {
  card = "diwali2";
  console.log(card);
  page1.classList.add("hide");
  page2.classList.remove("hide");
});

c3.addEventListener("click", function () {
  card = "diwali3";
  console.log(card);
  page1.classList.add("hide");
  page2.classList.remove("hide");
});

c4.addEventListener("click", function () {
  card = "diwali4";
  console.log(card);
  page1.classList.add("hide");
  page2.classList.remove("hide");
});

c5.addEventListener("click", function () {
  card = "diwali5";
  console.log(card);
  page1.classList.add("hide");
  page2.classList.remove("hide");
});

c6.addEventListener("click", function () {
  card = "diwali6";
  console.log(card);
  page1.classList.add("hide");
  page2.classList.remove("hide");
});

c7.addEventListener("click", function () {
  card = "diwali7";
  console.log(card);
  page1.classList.add("hide");
  page2.classList.remove("hide");
});

c8.addEventListener("click", function () {
  card = "diwali8";
  console.log(card);
  page1.classList.add("hide");
  page2.classList.remove("hide");
});

c9.addEventListener("click", function () {
  card = "diwali9";
  console.log(card);
  page1.classList.add("hide");
  page2.classList.remove("hide");
});

c10.addEventListener("click", function () {
  card = "diwali10";
  console.log(card);
  page1.classList.add("hide");
  page2.classList.remove("hide");
});

c11.addEventListener("click", function () {
  card = "diwali11";
  page1.classList.add("hide");
  page2.classList.remove("hide");
  console.log(card);
});

c12.addEventListener("click", function () {
  card = "diwali12";
  console.log(card);
  page1.classList.add("hide");
  page2.classList.remove("hide");
});

c13.addEventListener("click", function () {
  card = "diwali13";
  console.log(card);
  page1.classList.add("hide");
  page2.classList.remove("hide");
});

c14.addEventListener("click", function () {
  card = "diwali14";
  console.log(card);
  page1.classList.add("hide");
  page2.classList.remove("hide");
});

t1.addEventListener("click", function () {
  text = "text1";
  console.log(text);
  page2.classList.add("hide");
  page3.classList.remove("hide");
});

t2.addEventListener("click", function () {
  text = "text2";
  console.log(text);
  page2.classList.add("hide");
  page3.classList.remove("hide");
});

t3.addEventListener("click", function () {
  text = "text3";
  console.log(text);
  page2.classList.add("hide");
  page3.classList.remove("hide");
});

t4.addEventListener("click", function () {
  text = "text4";
  console.log(text);
  page2.classList.add("hide");
  page3.classList.remove("hide");
});

t5.addEventListener("click", function () {
  text = "text5";
  console.log(text);
  page2.classList.add("hide");
  page3.classList.remove("hide");
});

t6.addEventListener("click", function () {
  text = "text6";
  console.log(text);
  page2.classList.add("hide");
  page3.classList.remove("hide");
});

t7.addEventListener("click", function () {
  text = "text7";
  console.log(text);
  page2.classList.add("hide");
  page3.classList.remove("hide");
});

t8.addEventListener("click", function () {
  text = "text8";
  console.log(text);
  page2.classList.add("hide");
  page3.classList.remove("hide");
});

t9.addEventListener("click", function () {
  text = "text9";
  console.log(text);
  page2.classList.add("hide");
  page3.classList.remove("hide");
});

t10.addEventListener("click", function () {
  text = "text10";
  console.log(text);
  page2.classList.add("hide");
  page3.classList.remove("hide");
});

t11.addEventListener("click", function () {
  text = "text11";
  console.log(text);
  page2.classList.add("hide");
  page3.classList.remove("hide");
});
