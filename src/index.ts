// 1. add two numbers
function add(a:number, b:number): number {return a + b} 

add(2, 2)

function greet(greeting:string): string{ return greeting}

greet("Hello Stranger")


function longestString(arr:string[]):string{return  arr.reduce(function (a, b) {
        return a.length > b.length ? a : b;
    })}


    longestString(["hello", "world", "this", "is", "a", "test"])



    function countSentence(sentence :string):number{return sentence.split(" ").length}

    countSentence("This is a test sentence.")