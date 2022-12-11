function factorial(x){

    if(x === 0 || x === 1){
        return 1;
    }else if(x < 0){
        return 0;
    }else{

        return x * factorial(x - 1);

    }
}