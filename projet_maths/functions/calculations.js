export function calculations(sValue1, sValue2, operatorChoice) {    
    switch(operatorChoice) {
        case 'x':
        case '*':
            return sValue1*sValue2;
        case '/':
            var divisao = sValue1/sValue2;
            return divisao.toFixed(1);
        case '%':
            return sValue1%sValue2;
        case '^':
            return Math.pow(sValue1, sValue2);
        case '+':
            return sValue1 + sValue2;
        case '-':
            return sValue1 - sValue2;
    }
}