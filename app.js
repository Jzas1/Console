function add(input){
    var unique = "";
    var counter = 0;
    var different ="";
  for (i = 0; i < input.length; i++) {
    if (input.lastIndexOf(input[i]) == input.indexOf(input[i])) {
      unique += input[i];

    }counter ++;
  var count1 = (input.match(input[i]) || []).length;
  }
    if (counter <= 1)
    {
        console.log("YES");
    }
    else if (counter > 1){
        console.log("NO"); 
    }
}
add('aytssbcd')


// function add(sub1, s1, sub2, s2){
//     let count = 'no'
//     let count2 = 'no'
//     let x = sub1.split('')
//     let x1 = s1.split('')
//     let y = sub2.split('')
//     let y1 = s2.split('')

//     for(let i=0; i < x.length -1; i++){
//         if(x[i].includes(x1[i])){
//             count= "yes"

           
//         }
//     }
//     for(let i=0; i < y.length -1; i++){
//         if(y[i].includes(y1[i])){
//             count2 = "yes"
//         }
//     }
//     return(
//     console.log(count),
//     console.log(count2)
//     )

// }
// console.log(add('hello','world', 'hi', 'world'))
// function add(aOne, bTwo){   
//     let x = aOne.concat(bTwo)
//     console.log(x)
//     x.sort(function(a,b){
//         return a-b
//     })
//     console.log(x) 
//     for(let i = 0; i < x.length -1; i++){
//         x[i] - x[i+1] 
//     }

// }


// arrayOne = [-1, 5, 10, 20, 28, 3]
// arrayTwo = [26, 134, 135, 15, 17]

// add(arrayOne, arrayTwo)


// function moveElementToEnd(array, toMove){
//     for(let i = 0; i < i.length - 1; i++){
//         if(move === array[i]){
//             array[i] = array[array.length-1]
//         }
//     }
//     return array
// }
// console.log( add([1,3,4,2,2,2,2]))




// let add = (inputArr) => {
//     let len = inputArr.length;
//     let swap = 0
//     let swapped;
//     do {
//         swapped = false;
//         for (let i = 0; i < len; i++) {
//             if (inputArr[i] > inputArr[i + 1]) {
//                 let tmp = inputArr[i];
//                 inputArr[i] = inputArr[i + 1];
//                 inputArr[i + 1] = tmp;
//                 swapped = true;
//                 swap++
//             }
//         }
//     } while (swapped);
//         console.log(`Array is sorted in ${swap} swaps`)
//         console.log(`First Element: ${inputArr[0]} `)
//         console.log(`Last Element: ${inputArr[inputArr.length -1]}`)
// };

//  console.log(add([6,4,1]))
//  console.log(add([3,2,1]))
//  console.log(add([2, 1,3]))


// 
// function add(x, prices, y ){
//     let toys =0
//     prices.sort(function(a,b){
//         return a - b

//     })
//     let count =0
//     prices.forEach(number =>{
    
//     if(count + number <= y){
//         count = count + number
//         console.log(count)
//         toys++

//     }
// })
//  return toys

// }
// console.log(add(1,[1, 12, 5, 111, 200, 1000, 10], 50))


// console.log('working')

// function add(str){
    
//     let x =[]
//    x =  str.split('')
//    let count = 0
//     for(let i = 0; i < x.length - 1; i++){
//         if(x[i]===x[i+3] && x[i+1]===x[i+2]){
//             count++
//             count++
//             count++
//         } else if(x[i]===x[i+2] && x[i] === x[i+1]){
//             count++
//             count++
        
//         } else if (x[i]===x[i+2] || x[i] === x[i+1]){
//             count++
//         } 
//     }

        
//     console.log(count + x.length)  
        
//      return count + x.length



// }

// add('asasd')
// add('abcbaba')
// add('aaaa')




// function add(str){
//     let  arr=[], longest = str[0]
     
//     for (let i=1; i<str.length; i++) {
//         let table = {}
//         let ans = ""
//         let count = 0
//             for (let j=i; j<str.length; j++) {
//                 console.log(table[str[j]])
//                 if (table[str[j]] === undefined) { 
//                     table[str[j]] = 1
//                     count++
//                     console.log(table[str[j]])
//                 }
//                 if (count <= str[0]) {
//                    ans += str[j]
//                 }
//             }
//             if (ans.length > longest) {

//                 longest = ans.length
//                 arr.push(ans)
//             }
//     }
//     return arr.sort(function(a,b) {return b.length-a.length})[0]
//     } 





// console.log(add("2aabbcbbbadef"))
// // Output: bbcbbb

// console.log(add("3aabacbebebe"))
// Output: cbebebe

// function Consecutive(arr) { 
//     let x = arr.sort(function(a, b){return a-b})

    
//     let y =   x[x.length-1] - x[0] - (x.length - 2)
//     console.log(y)

//    return arr; 
 
//  }
// Consecutive([1,2,3,4])

// function add(arr){
//     if( arr[1] - arr[0] === arr[2] - arr[1])
//     return 'Arithmetic'
//     else return -1
// }


// function Consecutive(arr) { 
//     let x = arr.sort(function(a, b){return a-b})
   
     
//        let y = (x[x.length-1] - x[0]) - (x.length -1)
   
   
//      return y; 
   
//    }

//    console.log(Consecutive([1,23,5]))
//    console.log(Consecutive([-4,10]))
//    console.log(Consecutive([1,5,9,10,11,12,14]))
//    console.log(Consecutive([5,12,15,17,18,22]))
//    console.log([20, 13, 7, 12])
      



// console.log(add(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]))


// let array = [
//     [1,2,3,4],
//     [12,13,14,5],
//     [11,16,15,6],
//     [10,9,8,7]
// ]
// function add(arr){
//     let arr2 = {...arr}
//     let finale = {...arr2[0]}
//     console.log(finale)
//     for(let i =0; i < arr2.length-1; i++){
//         arr
//     }
// }

// add(array)

// console.log(shift(5))


// array = [141, 1, 17, -7, -17, -27, 18, 541, 9, 7, 7]
// function add(array){
// let x = array.sort(function(a,b){
//         return b-a
// })
// console.log(x[0],x[1],x[2])
// }
// add(array)



// function getNthFib(n) {
// 	if(n ===2){
//         console.log('what')
// 		return 1
// 	} else if (n ===1 ){
// 		return 0
// 	} else {
// 		return getNthFib(n-1) + getNthFib(n - 2)
// 	}
// }
// console.log(getNthFib(6))


// function isValidSubsequence(array, sequence){
//     let seqIdx = 0;
//     for (const value of array){
//         if(seqIdx === sequence.length) break;
//         if (sequence[seqIdx] === value) seqIdx ++
//     }
//     return seqIdx === sequence.length
// }





    // function isValidSubsequence(array, sequence) {
    //       let arrIdx = 0;
    //       let seqIdx = 0;

    //       while(arrIdx < array.length && seqIdx < sequence.length){
    //           if (array[arrIdx] === sequence[seqIdx]) 
    //             console.log(array[arrIdx]);
    //             console.log(sequence[seqIdx])
    //           seqIdx++;
    //           arrIdx++
    //       }
    //       return seqIdx === sequence.length
    //     }  
    
    


// let arr1 = [5,1,22,25,6,-1,8,10]
// let arr2 = [1, 6, -1, 10]

// console.log(isValidSubsequence(arr1,arr2))


// function twoNumberSum(array, targetSum){
//     for(let i = 0; i < array.length - 1; i++){
//     const first = array[i];
//     for (let j = i + 1; j< array.length; j++){
//         const secondNum = array[j]
//         if(first + secondNum === targetSum)
//             return [first, secondNum]
//      }
//     }
//     return [];
// }

// array  = [3,5, -4, 8, 11, 1, -1, 6]
// targetSum = 10 

// console.log( add(array, targetSum))


// function add(array, targetSum){
//     const nums = {};
//     for(const num of array){
//         const potentialMatch = targetSum - num

//         if(potentialMatch in nums){
//         return [potentialMatch, num]
//     } else {
//         nums[num] = true
//     }
// }
//     return [];

// }