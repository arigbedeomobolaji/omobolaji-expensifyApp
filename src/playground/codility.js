// const solution = (num) => {
//  const numBinary = num.toString(2)
//  const binaryGapAay = []
//  let binaryGapCount = 0;
//  for (let i = 0; i < numBinary.length; i++) {
//   if (i > 0) {
//    if (numBinary[i] === "0") {
//     binaryGapCount += 1
//    } else {
//     binaryGapArray.push(binaryGapCount)
//     binaryGapCount = 0
//     }
//   }
//  }
//  console.log(numBinary)
//  if (binaryGapArray.length > 0) {
//   const sortedArray = binaryGapArray.sort()
//   return sortedArray[sortedArray.length-1]
//  } else {
//   return 0;
//  }
//  }


// function solution(A, K) {
//  // write your code in JavaScript (Node.js 8.9.4)
//  let temp = []
//  for(let i = 0; i < A.length; i++){
//      if( i === A.length - 1){
//          temp[K - 1] = A[A.length - 1]
//      }else{
//          //When K + i is greater than A.length - 1
//          if((K + i) > A.length - 1){
//              let compute = (K + i ) % (A.length - 1)
//              if(compute === 0){
//                  temp[i] = A[i]
//              }else{
//                  temp[compute - 1] = A[i]
//              }
//          }else{
//              temp[K + i] = A[i]
//          }
//      }
//  }
//  return temp
// }


 //  for (var i = 0; i < arr.length; i++) {
 //   console.log(i)
 //   for (var j = i + 1; j < arr.length; j++){
 //    if (arr[i] === arr[j]) {
 //     removeElement(i, 1)
 //     removeElement(j, 1)
 //     console.log(arr)
 //     break
 //    }
 //   }
 //  }
 // }


 function solution(A) {

  function removeElement(n, shift) {
   if (n === 0) {
    A.shift()
   } else if (n === A.length - 1) {
    A.pop()
   } else {
    A.splice(n-shift, 1)
   }
  }
 
  function removeElementJ(n, shift){
   if(n === 0){
    A.shift(n,1)
   }else{
    A.shift(n)
   }
  }
 
  if (A.length % 2 === 1) {
   let i = 0
   while (i <= 1) {
    for (let j = i + 1; j < A.length; j++) {
     if (A[i] === A[j]) {
      console.log(A)
      removeElement(i, 1)
      console.log("after i is popped", A)
      console.log(i)
      removeElement(j-1, 1)
      console.log(A)
      i = 0
     break
     } else {
      if( j === A.length) {i = 1}
     }
    }
    if(A.length < 2) {
     i = 20000000000
     break
    }
   }
  }
 
  return A
 }
  
 console.log(solution([9,3,9,3,9,7,9,8,8]))