const list1 = document.getElementById("list-1");
const list2 = document.getElementById("list-2");
const firstImg1 = document.getElementById("1-first-img");
const secondImg1 = document.getElementById("1-second-img");
const firstImg2 = document.getElementById("2-first-img");
const secondImg2 = document.getElementById("2-second-img");
const featuresCard = document.getElementById("features");
const companyCard = document.getElementById("companyCard");
const mobileList1 = document.getElementById("mobile-list-1");
const mobileList2 = document.getElementById("mobile-list-2");
const mblFirstImg1 = document.getElementById("m1-first-img");
const mblSecondImg1 = document.getElementById("m1-second-img");
const mblFirstImg2 = document.getElementById("m2-first-img");
const mblSecondImg2 = document.getElementById("m2-second-img");
const mobileFeaturesCard = document.getElementById("mobile-features-card");
const mobileCompanyCard = document.getElementById("mobile-company-card");
const openMenuBtn = document.getElementById("open-menu-btn");
const closeMenuBtn = document.getElementById("close-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

openMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
});

closeMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
});

//nav ul list
list1.addEventListener("click", () => {
  featuresCard.classList.toggle("hidden");
  firstImg1.classList.toggle("hidden");
  secondImg1.classList.toggle("hidden");
});

list2.addEventListener("click", () => {
  companyCard.classList.toggle("hidden");
  firstImg2.classList.toggle("hidden");
  secondImg2.classList.toggle("hidden");
});

//mobile ul list
mobileList1.addEventListener("mouseover", () => {
  mobileFeaturesCard.classList.toggle("hidden");
  mblFirstImg1.style.display = "none";
  mblSecondImg1.classList.remove("hidden");
});

mobileList1.addEventListener("mouseout", () => {
  mobileFeaturesCard.classList.toggle("hidden");
  mblFirstImg1.style.display = "block";
  mblSecondImg1.classList.add("hidden");
});

mobileList2.addEventListener("mouseover", () => {
  mobileCompanyCard.classList.toggle("hidden");
  mblFirstImg2.style.display = "none";
  mblSecondImg2.classList.remove("hidden");
});

mobileList2.addEventListener("mouseout", () => {
  mobileCompanyCard.classList.toggle("hidden");
  mblFirstImg2.style.display = "block";
  mblSecondImg2.classList.add("hidden");
});
