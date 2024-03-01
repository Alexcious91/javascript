let start = 10; 

function loop1(val) { 
    console.log(val); 
    if (val < 1) { 
        return; 
    } 
    return loop1(val - 1); 
} 

loop1(start); 

function loop2(valueA) { 
    console.log(valueA); 
    if (valueA > 0) { 
        valueA--; 
        return loop2(valueA); 
    } 
    return; 
} 
loop2(start);
