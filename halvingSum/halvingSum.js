// https://www.codewars.com/kata/5a58d46cfd56cb4e8600009d

// Task
// Given a positive integer n, calculate the following sum:

// n + n/2 + n/4 + n/8 + ...
// All elements of the sum are the results of integer division.

// Example
// 25  =>  25 + 12 + 6 + 3 + 1 = 47


function halvingSum(n) {

    // while(n>=1){
    //     total += n;
    //     n = Math.floor(n/2);
    // }
    // return total;
    
    
///////recursiveSum
    // ////////////Call Stack
    // // num, total
    // recursiveSum(127, 0) return  247
    // recursiveSum(63, 127) return 247
    // recursiveSum(31, 190) return 247
    // recursiveSum(15, 221) return 247
    // recursiveSum(7, 236) return 247
    // recursiveSum(3, 243) return 247
    // recursiveSum(1, 246) return 247
    // ////////////Call Stack

    // function recursiveSum(num, total){
    //     if(num<=1) return total + num; // Base case
    //     return recursiveSum(Math.floor(num/2), total + num);
    // }
///////recursiveSum

////////recursiveSumNoTotal

    // ////////////Call Stack
    // // num, total
    // recursiveSum(127) return 147
    // recursiveSum(63) return 120
    // recursiveSum(31) return 57
    // recursiveSum(15) return 26
    // recursiveSum(7) return 11
    // recursiveSum(3) return 4
    // recursiveSum(1) return 1
    // ////////////Call Stack
    // function recursiveSumNoTotal(num){
    //     if(num<=1) return num;
    //     return num + recursiveSumNoTotal(Math.floor(num/2)); 
    // }
    // console.log(recursiveSumNoTotal(n));

//////////recursiveSumNoTotal


    // if(n<=1) return n;
    // return n + halvingSum(Math.floor(n/2)); 

    return n && n + halvingSum(Math.floor(n/2))
}


console.log(halvingSum(127));