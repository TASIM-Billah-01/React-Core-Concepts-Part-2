// Example to understand usestate .

const {name, age} = {name : "tasim", age : 24};
console.log(name, age);


const [a,b] = [11,12];
console.log(a,b);


function getSome() {
    return [10,2]
}

const [first, second] = getSome();

console.log(first, second);



function getSomeThing(number) { 
    function innerValue(params) {
        number = params
    }
        return [number, innerValue];
    }
    
    const [first1, second1] = getSomeThing(3);
    console.log(first1, second1);
    
    