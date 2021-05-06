console.log("We are in js");

const percent = document.getElementById('percent');
const clear = document.getElementById('clear');
const clearall = document.getElementById('clear-all');
const dlt = document.getElementById('dlt');
const onebyx = document.getElementById('onebyx');
const sqr = document.getElementById('sqr');
const sqrrt = document.getElementById('sqr-rt');
const divide = document.getElementById('divide');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine  = document.getElementById('nine');
const multiply = document.getElementById('multiply');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const minus = document.getElementById('minus');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const doublezero = document.getElementById('doublezero');
const zero = document.getElementById('zero');
const decimal = document.getElementById('decimal');
const equal = document.getElementById('equal');
const answer = document.getElementById('answer');
const plus = document.getElementById('plus');

let operand1 = null;
let operand2 = null;
let operator = null;

// answer.innerHTML = operand1;
clear.addEventListener('click',function(){
    console.log("CLwae");
    if(operand1!=null && operand2!=null)
    {
        operand2 = null;
        answer.innerHTML = operand2;
    }
    else if(operand2==null && operand1!=null)
    {
        operand1=null;
        answer.innerHTML = operand1;
        
    }
    
});

clearall.addEventListener('click',function(){
    operand1=null;
    operand2=null;
    // console.log("CLwae");
    answer.innerHTML = null;
});

percent.addEventListener('click',function(){
    operator='%';
    // console.log(operator);
})

dlt.addEventListener('click',function(){
   
//    answer.innerText= operand1;
    operand1 = operand1.slice(0, -1);
    answer.innerText = operand1; 
});

onebyx.addEventListener('click',function(){
    answer.innerText = 1/operand1;
  
});

one.addEventListener('click',function(){
    operand1=answer.innerText;
    operand1 = operand1+'1';
    answer.innerText = operand1;
});
two.addEventListener('click',function(){
    operand1=answer.innerText;
    operand1 = operand1+'2';
    answer.innerText = operand1;
});
three.addEventListener('click',function(){
    operand1=answer.innerText;
    operand1 = operand1+'3';
    answer.innerText = operand1;
});
four.addEventListener('click',function(){
    operand1=answer.innerText;
    operand1 = operand1+'4';
    answer.innerText = operand1;
});
five.addEventListener('click',function(){
    operand1=answer.innerText;
    operand1 = operand1+'5';
    answer.innerText = operand1;
});
six.addEventListener('click',function(){
    operand1=answer.innerText;
    operand1 = operand1+'6';
    answer.innerText = operand1;
});
seven.addEventListener('click',function(){
    operand1=answer.innerText;
    operand1 = operand1+'7';
    answer.innerText = operand1;
});
eight.addEventListener('click',function(){
    operand1=answer.innerText;
    operand1 = operand1+'8';
    answer.innerText = operand1;
});
nine.addEventListener('click',function(){
    operand1=answer.innerText;
    operand1 = operand1+'9';
    answer.innerText = operand1;
});
zero.addEventListener('click',function(){
    operand1=answer.innerText;
    operand1 = operand1+'0';
    answer.innerText = operand1;
});
doublezero.addEventListener('click',function(){
    operand1=answer.innerText;
    operand1 = operand1+'00';
    answer.innerText = operand1;
});
decimal.addEventListener('click',function(){
    operand1=answer.innerText;
    operand1 = operand1+'.';
    answer.innerText = operand1;
});

sqr.addEventListener('click',function(){
    
    answer.innerText = operand1*operand1;

});

sqrrt.addEventListener('click',function(){
    answer.innerText = Math.sqrt(operand1);
});

multiply.addEventListener('click',function(){
    operator='*';
    operand2 =operand1;
    operand1=null;
    answer.innerText = null;
   
});

divide.addEventListener('click',function(){
    operator = '/';
    operand2 = operand1;
    operand1 = null;
    answer.innerText = null;
});
plus.addEventListener('click',function(){
    operator = '+';
    operand2 = operand1;
    operand1 = null;
    answer.innerText = null;
});

minus.addEventListener('click',function(){
    operator = '-';
    operand2 = operand1;
    operand1 = null;
    answer.innerText = null;
 
})

percent.addEventListener('click',function(){
    var percemnt = operand1/100;
    operator = percemnt;
    answer.innerText = percemnt;
    
});


equal.addEventListener('click',function(){
    
    var ans = eval(operand2+operator+operand1);
    answer.innerText = ans;
    ans=0;
    answer = 0;
    operand1=0;
    operand2=0;
    operator=0;
})