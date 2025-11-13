import * as readline from "readline";

function binarySearch(arr: number[], target: number): number{
    let left = 0;
    let right = arr.length - 1;

    while(left <= right)
    {
        const mid = Math.floor(left + (right - left) / 2);

        if(arr[mid] === target)
        {
           return mid;
        }
        else if(arr[mid] < target)
        {
            left = mid + 1;
        }
        else
        {
            right = mid - 1;
        }
    }

    return -1;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("enter an unsorted array: ", (arrayInput) => {
   const arr = arrayInput
   .trim()
   .split(/[\s,]+/)
   .map(Number); //.split turns the string 
   //into an array of strings. tHEN the .map() turns each string to a number
   //so finally it is an array of numbers

   rl.question("Enter the element to search: ", (targetInput) => {
    const target = Number(targetInput);

    const sortedArr = [...arr].sort((a,b) => a - b);

    const index = binarySearch(sortedArr, target)

    console.log("\n Sorted array:", sortedArr)

    if(index !== -1)
    {
        console.log(`Element ${target} found at index ${index}`);
        
    }
    else{
        console.log(`Element ${target} not found`);
        
    }

    rl.close()
    
   })
})

