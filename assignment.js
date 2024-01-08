let myArray=[5,10,5,5,5,5,5,6,6,7,8,9,6,6,6,7,7];
//pgm-1 Write a JavaScript function to get an array and to read the first element of an array. Check whether it is prime or not. 
firstElementPrime(myArray);
function firstElementPrime(arr)
{
   //check array is empty
   if(arr.length==0){
    console.log("Array empty");
    return;
   }
//Read first element of array
   let firstElement=arr[0];

  if(isPrime(firstElement))
   {
    console.log(firstElement, "is a prime number"); 
   }
   else
   {
    console.log(firstElement, "is not a prime number");
   }
}
   
function isPrime(num)
{
    let i;
    if(num<=1)
    return false;
    for(i=2;i<num;i++)
    {
        if(num%i==0)
        {
            return false;
        }
    }
return true;

}

//pgm-2 Write a JavaScript program to find the most frequent item of an array
let myArray1=[5,10,5,5,5,5,5,6,6,7,8,9,6,6,6,7,7];
mostFrequentItem(myArray1);
function mostFrequentItem(arr1)
{
    let max_occurrence=0;
    let max_value=0;
   
    for(i=0;i<arr1.length;i++)
    {
        let occurrence;
        
        occurrence=0;
        for(j=0;j<arr1.length;j++)
        {
            if(arr1[j]==arr1[i])
            {
                occurrence++; 
                            }
        }
        if(occurrence>max_occurrence)
        {
            max_occurrence=occurrence;
            max_value=arr1[i];
                      
        }
        
        }
    console.log('Most frequent occurring item is:' + max_value+ ' which occurred:' + max_occurrence+ ' times');
    }
    
//Pgm 3:Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, check if the current number is odd or even, and display the message to the screen as odd or even.
  
for(i=0;i<=15;i++)
{
    if(i%2==0)
    {
        console.log(i + ' is even number');
    }
    else
    {
        console.log(i + ' is odd number');
    }

}

//Pgm4:Write a JavaScript program to find the sum of squares of the elements of an array.
let arrsq=[1,2,3,4,5];
let sum=0;
const result=sumsquares(arrsq);
console.log('Sum of squares is ' +result);
function sumsquares(sumsq)
{
    
    for(i=0;i<arrsq.length;i++)
    {
        sum=sum+arrsq[i]*arrsq[i];
    }
    return sum;
}







