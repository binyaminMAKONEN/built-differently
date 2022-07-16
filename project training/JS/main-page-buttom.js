let GoodNutritionTip = [
    {
        id:1,
        tip:`Include protein with every meal`,
        description:`ncluding some protein with every meal can help balance blood sugar.
        Some studiesTrusted Source suggest higher protein diets can be beneficial for type 2 diabetes.
        Other researchTrusted Source indicates balancing blood sugar can support weight management and cardiovascular health.`
    },
    {
        id:2,
        tip:` Eat oily fish`,
        description:`According to researchTrusted Source, omega-3 fatty acids in oily fish are essential for cell signaling, gene expression, and brain and eye development.
        Some studiesTrusted Source indicate that omega-3 fatty acids can reduce the risk of cardiovascular disease.
        Other researchTrusted Source suggests the anti-inflammatory properties of omega-3 may effectively manage the early stages of degenerative diseases such as Alzheimer’s disease and Parkinson’s disease.
        `
     },
    {
        id:3,
        tip:`Eat whole grains`,
        description:`The American Heart Association (AHA)Trusted Source recommend people eat whole grains rather than refined grains.
        Whole grains contain nutrients such as B vitamins, iron, and fiber. These nutrients are essential for body functions that include carrying oxygen in the blood, regulating the immune system, and balancing blood sugar.
        `
     },
    {
        id:4,
        tip:`Eat a rainbow`,
        description:`The saying ‘eat a rainbow’ helps remind people to eat different colored fruits and vegetables.
        Varying the color of plant foods means that someone gets a wide variety of antioxidants beneficialTrusted Source to health, for example, carotenoids and anthocyanins.
        `
     },
    {
        id:5,
        tip:`  Eat your greens`,
        description:`Dark green leafy vegetables are a great source of nutrition, according to the Department of Agriculture (USDA).
        Leafy greens are rich in vitamins, minerals, and antioxidants.
        The USDA suggest that folate in leafy greens may help protect against cancer, while vitamin K helps prevent osteoporosis
        `
     },
    {
        id:6,
        tip:`Include healthful fats`,
        description:`People should limit their intake of saturated fats while avoiding trans fats, according to the USDA.
        A person can replace these fats with unsaturated fats, which they can find in foods such as avocado, oily fish, and vegetable oils.
        `
     },
    {
        id:7,
        tip:` Use extra virgin olive oil`,
        description:`As part of the Mediterranean diet, extra virgin olive oil has benefits to the heart, blood pressure, and weight, according to a 2018 health reportTrusted Source.
        A person can include extra virgin olive oil in their diet by adding it to salads or vegetables or cooking food at low temperatures.
        `
     },
    {
        id:8,
        tip:`Eat nuts`,
        description:`According to the AHATrusted Source, eating one serving of nuts daily in place of red or processed meat, french fries, or dessert may benefit health and prevent long-term weight gain.
        The AHA suggest that Brazil nuts, in particular, may help someone feel fuller and stabilize their blood sugar.
        `
     },
    {
        id:9,
        tip:`Get enough fiber`,
        description:`According to the AHATrusted Source, fiber can help improve blood cholesterol levels and lower the risk of heart disease, obesity, and type 2 diabetes.

        People can get enough fiber in their diet by eating whole grains, vegetables, beans, and pulses.
        `
     },
    {
        id:10,
        tip:`Increase plant foods`,
        description:`ResearchTrusted Source suggests that plant-based diets may help prevent overweight and obesity. Doctors associate obesity with many diseases.
        According to some studies, including more plant foods in the diet could reduceTrusted Source the risk of developing diseases such as diabetes and cardiovascular disease.
        `
     },
]

let btnGoodNutrition = document.querySelector('#btnGoodNutrition')
function showGodNutrition() {
         let GoodNutritionContainer = document.querySelector('#GoodNutritionContainer')
         if (GoodNutritionContainer.classList.contains('hidan')) {
          GoodNutritionContainer.classList.remove("hidan")
              GoodNutritionTip.forEach(tip => {
    GoodNutritionContainer.innerHTML+=/*html*/`<div class="bg-light p-3 mb-2"><h2>${tip.id}.${tip.tip}</h2><p>${tip.description}</p></div>`
        
    })
         }else{
          GoodNutritionContainer.innerHTML=''
          GoodNutritionContainer.classList.add("hidan");
         }
   
    
   
}
btnGoodNutrition.addEventListener('click',showGodNutrition);
let HealthyDinnerRecipes = document.querySelector('#HealthyDinnerRecipes')
function showHealthyDinnerRecipes() {
         let HealthyDinnerRecipesContainer = document.querySelector('#HealthyDinnerRecipesContainer')
         let HealthyDinnerHeader = document.querySelector('#HealthyDinnerHeader')
         if (HealthyDinnerRecipesContainer.classList.contains('d-none')&&HealthyDinnerHeader.classList.contains('d-none')) {
          HealthyDinnerRecipesContainer.classList.remove("d-none")
          HealthyDinnerHeader.classList.remove("d-none")
         }else{
          HealthyDinnerRecipesContainer.classList.add("d-none");
          HealthyDinnerHeader.classList.add("d-none");
         }
   
    
   
}
HealthyDinnerRecipes.addEventListener('click',showHealthyDinnerRecipes);
// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     slidesPerGroup: 3,
//     loop: true,
//     loopFillGroupWithBlank: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });

