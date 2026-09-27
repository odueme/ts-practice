// 1. add two numbers


const add = (a:number, b:number): number =>  a + b

console.log(add(2, 2))  


const greet = (name:string): string =>  `Hello there ${name}`

console.log(greet("Francis"))


const longestString = (arr:string[]):string | undefined => {
    if (arr.length === 0) {
        return undefined;
    }
   return  arr.reduce( (a, b) =>  a.length > b.length ? a : b)
    
 }


    console.log(longestString([]))



    const countSentence = (sentence :string):number => {
        const words = sentence.trim().split(" ").filter(word => word !== "");
        return words.length;
    }

    console.log(countSentence("Hello      there"))



    const isEven = (num:number):boolean => num % 2 === 0

    console.log(isEven(2))


const reverseString = (word:string):string => word.split("").reverse().join("")


console.log(reverseString("Hello"))


const countVowels = (word:string):number => {
    let count = 0;
    const countWord = word.toLowerCase();
    for (let i= 0; i < countWord.length; i++){
    if(countWord[i] === "a" || countWord[i] === "e" || countWord[i] === "i" || countWord[i] === "o" || countWord[i] === "u"){
        count++
    }
}
return count
}


console.log(countVowels("Hello"))

const sum = (arr: number[]): number => arr.reduce((a, b) => a + b, 0)

console.log(sum([1, 2, 3, 4, 5]))


const average = (arr:number[]): number => arr.reduce((a, b) => a + b/arr.length, 0) 

console.log(average([1, 2, 3, 4, 5]))

const max = (arr: number[]): number => arr.reduce((a,b) => a > b ? a : b, 0)



console.log(max([1, 2, 3, 4, 5]))

const min = (arr: number[]): number => arr.reduce((a,b) => a < b ? a : b, 0)

const removeDuplicates = (arr: (number | string)[]): (number | string)[] => {
    const uniqueArr : (number | string)[] = [];
    arr.forEach(element => {
        if(!uniqueArr.includes(element)){
           uniqueArr.push(element)
        }
    })
    return uniqueArr
}


console.log(removeDuplicates([1, 2, 3, 4, 5, 1, 2, 3, "hello", "world", "hello"]))


const sortAscending = (arr: number[]): number[] => {
  const sorted =  [...arr].sort((a, b) =>{
        return a - b
    })
    return sorted
}

console.log(sortAscending([5, 1, 3, 2, 4]))


const sortDescending = (arr: number []): number[] => {
    const sorted =[...arr].sort((a, b) =>{
        return a + b
    })
    return sorted
}



console.log(sortDescending([5, 1, 3, 2, 4]))