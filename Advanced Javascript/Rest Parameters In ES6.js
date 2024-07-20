// rest parameters

function sum(...args){
    let result = 0;

    for(let i = 0; i<args.length;i++){
        result += args[i];
    }
    console.log(result)
}

sum(2,4,6,7);