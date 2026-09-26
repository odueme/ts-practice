// 1. add two numbers


function add(a:number, b:number): number {return a + b} 

console.log(add(2, 2))  


function greet(name:string): string{ return `Hello there ${name}`}

console.log(greet("Francis"))


function longestString(arr:string[]):string | undefined{
    if (arr.length === 0) {
        return undefined;
    }
   return  arr.reduce(function (a, b) {
        return a.length > b.length ? a : b;
    })
    
 }


    console.log(longestString([]))



    function countSentence(sentence :string):number{
        const words = sentence.trim().split(" ").filter(word => word !== "");
        return words.length;
    }

    console.log(countSentence("Hello      there"))



    function isEven(num:number):boolean{return num % 2 === 0}

    console.log(isEven(2))


function reverseString(word:string):string{
    return word.split("").reverse().join("")
}

console.log(reverseString("Hello"))


function countVowels(word:string):number{
    let count = 0;
    const countWord = word.toLowerCase();
    for (let i= 0; i < countWord.length; i++){
    if(countWord[i] === "a" || countWord[i] === "e" || countWord[i] === "i" || countWord[i] === "o" || countWord[i] === "u"){
        count++
    }
}
return count
}


console.log(countVowels("ba ba ba ba lol"))