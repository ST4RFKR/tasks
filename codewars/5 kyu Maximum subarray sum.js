var maxSequence = function(arr){
let maxSum = 0;
let currentSum = 0;


for (let i = 0; i < arr.length; i++){
  currentSum += arr[i];
  maxSum = Math.max(maxSum, currentSum)
    if (currentSum < 0) {
      currentSum = 0
    }
}
return maxSum

}