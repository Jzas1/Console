

function shift(a,b){
    let y = []
    for(let i = 0; i <= a-1; i++){
        y[i] = i+1
    }
    for(let j = y.length - 1; j >= 0; j-- ){
       if(b-1 -j > 0) 
    }
}

shift(4,5)

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