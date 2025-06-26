// console.log('hi');

 let fruits = ['яблоко', 'банан', 'апельсин', 'груша', 'киви'];
  let shift = fruits.shift();
  let pop = fruits.pop();
  let unshift = fruits.unshift( 'ананас');
 let push = fruits.push('манго');
 console.log(fruits)
 console.log(fruits.indexOf('апельсин') , 'индекс апельсин');
 console.log(fruits.includes('виноград') , );
 console.log(fruits.length  , 'длина итогово массива');


 let numbers = [15, 8, 23, 42, 4, 16, 9, 31]; 
 console.log(numbers.sort((a,b) =>a-b), 'по возрастанию');
 let first = numbers.slice(0,4);
 console.log(first, 'первые 4')
 let second = numbers.slice(5,8);
 console.log(second ,' последние 3')
 console.log(...first,...second , ' обьединили')
 console.log(...first.join( " | " )," | ",...second.join( " | " ))

  let mixedArray = [12, 'hello', 25, true, 8, 'world', 33, false, 7];
//   for(let element  of mixedArray){
//     if(element *1 === element){
//         console.log(element)
//     }
//   }
for(let element of mixedArray){
    if(typeof element === 'number'){
        console.log(element , ' число из массива ')
    }
}
  for(let element  of mixedArray){
    if(typeof element==='string' ){
        console.log(element , ' строка из массива')
    }
  }


 let sums=0
for(let element of mixedArray){
    if(typeof element === 'number'){
        sums++
        
    }
}
console.log(sums , ' количество чисел ')



 let sum=0
for(let element of mixedArray){
    if(typeof element === 'number'){
        sum+=element
        
    }
}
console.log(sum ,' сумма всех чисел ')


for(let element of  mixedArray ){
    if(typeof element === 'number' && element % 2 === 0 ){
        // element++
        console.log(element , ' четные элемент массива')
    }
}


 let grades = [85, 92, 78, 96, 87, 73, 89, 94, 82, 90];
console.log(grades.sort((a,b) => a-b).slice(-1) , 'максимальная оценка');
console.log(grades.sort((a,b) => a-b).slice(0,1) , 'минимальная оценка');


let sum2 = 0
for(element of grades){
sum2 += element
}
console.log(sum2 / grades.length , ' средняя оценка ')




// let mas = []
// for(element of grades){
//     if(element >= 90){
//           mas.push(element)
//     }
// }
// console.log(mas)


let obsh = 0
 for(let element of grades){
    if(element > 85 ){
        obsh ++
        // element++    
    
    }
 }
  console.log(obsh, 'оценки выше 85')

let mas = []
for(let element of grades){
    if(element>=90){
        mas.push(element)
    }
}
console.log(mas , ' отличными оценками (90 и выше)')


 
 console.log(grades.sort().reverse() , ' оценки в порядке убывания')

//  let grades = [85, 92, 78, 96, 87, 73, 89, 94, 82, 90];
//  for(let element of grades){
//     if(element > 85 ){
//      console.log(element , 'оценки выше 85')
       
//     }
//  }