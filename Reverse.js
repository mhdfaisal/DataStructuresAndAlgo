let str = "Apple";
let reverse = '';

// First method - 
for(char of str){
    reverse = char + reverse;
}

// Second Method - 
reverse = str.split("").reverse().join("");

// Third Method -
reverse = str.split("").reduce((ack, char)=>{
        return ack = char + ack;
},'');


console.log(reverse);