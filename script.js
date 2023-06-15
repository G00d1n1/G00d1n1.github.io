// "use strict"; 


    //  Слайдер
let blocks = document.querySelectorAll('.block')
const right = document.querySelector('.btnRight')
const left = document.querySelector('.btnLeft')
let wrapper = document.querySelector('.wrapper')
let width = 200
let blocksLenght = blocks.length - 1

function sliderSlick() {
    let count = 0;
    right.addEventListener('click', () => {
        count--
        let positiveNumber = Math.abs(count)

        if (positiveNumber > blocksLenght) {
            count = 0
        }
        slickPosition(count)
        console.log(count)
    })
    left.addEventListener('click',() => {
        count++

        if (count > 0) {
            count = -blocksLenght
        }
        slickPosition(count)
        console.log(count)
    })
}
sliderSlick()

function slickPosition(n){
    let slick = n * width
    wrapper.style.left = slick + 'px'
}





    // Случайное целое число
let randomNumber = Math.round(Math.random() * 100) 
    //  Уникальный цвет
let arr16 = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
function getRandomNumber(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min
}
btnColor.addEventListener('click', () => {
    let num1 = arr16[getRandomNumber(0,15)]
    let num2 = arr16[getRandomNumber(0,15)]
    let num3 = arr16[getRandomNumber(0,15)]
    let num4 = arr16[getRandomNumber(0,15)]
    let num5 = arr16[getRandomNumber(0,15)]
    let num6 = arr16[getRandomNumber(0,15)]
    let randomColor = '#' + num1 + num2 + num3 + num4 + num5 + num6
    document.querySelector('body').style.backgroundColor = randomColor
    console.log(randomColor)
})




            // Печатка случайных букв
let letters = ['a','б','в','г','д','е','ё','ж','з','и','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ъ','ы','ь','э','ю','я']
// let works = document.querySelector('#works')
// let letterTimer
// document.querySelector('.lettersBtn').addEventListener('click', () => {
//     letterTimer = setInterval(() => {
//         let letter1 = letters[getRandomNumber(0,32)]
//         works.innerText += letter1 + ' '
//     }, 1000);  
// })
// setTimeout(() =>{
//     clearInterval(letterTimer)
// },3000)






let autoTextLayout = document.querySelector('.autoTextLayout')
            // Автотекст
let autoText = "Привет_Юлечка_любимая!!!"
let result = autoText.split('')
let autoTextObject = Object.assign(result) // объект значений
let group = Object.keys(autoTextObject)  // объект ключей
// console.log(autoTextObject)
let i = 0;


setInterval(() => {
    timerID = setTimeout(function tick() {
        if (i < result.length){
            autoTextLayout.innerText += result[i]
            i++
            timerID = setTimeout(tick, 500)
        }
    },1000)
    timerID
},2000)




        //  тест счетчик
// let justQube = document.querySelector('.justQube')

// function counterPlus() {
//     let countTest = 0;
    
//     btnTestRight.addEventListener('click', () => {
//         countTest++
//         justQubeRight(countTest)
//         console.log(countTest)
//     })

//     btnTestLeft.addEventListener('click', () => {
//         countTest--
//         justQubeRight(countTest)
//     })
    
// }
// counterPlus()

// function justQubeRight(n){
//     let qqq = n * 20
//     justQube.style.left = qqq + 'px'
// }










        // какое то решение счетчика
// function makeCounter() {
//     var currentCount = 1;
  
//     function counter() {
//       return currentCount++;
//     }
  
//     return counter;
//   }

// let  counters = makeCounter();
// console.log(counters())








    //  Замыкания
// function makeCounter() {
//     var currentCount = 0;
  
//     return function() {
//       currentCount = 10
//       return currentCount;
//     };
//   }
  
//   var counter = makeCounter();
  
//   console.log( counter() );

