var num = parseInt(prompt('Enter a number'))

switch(true) {
    case (num >= 20 && num <= 100):
        console.log('Number is between 20 and 100')
        break;
    
    case (num >= 101 && num <= 400):
        console.log('Number is between 101 and 400')
        break;

    default:
        console.log('Number is not between 20 and 400');
}


