/*function myTest(sentence) {

    let sen1 = sentence + '!'
    let sen2 = sentence + '!!'
    let sen3 = sentence + '!!!'
    let sen4 = sentence + '!!!!'
    let sen5 = sentence + '!!!!!'

    let result = (sen1.concat(sen2, sen3, sen4, sen5))

    console.log(result)

    return result
}myTest('a kurva anyját az egésznek')

function myTest2(str) {

    let result = "";

    for(let i = 1; i <= 5; i++) {

        result += str + '!'.repeat(i)

    }
    console.log(result)
    return result

}myTest2('faszomtelevan')

function isEven(number) {

    if( number % 2 == 0 ){
        return true
    } else {
        return false
    }

    
}isEven(3)*/

/*function isEven(n) {

    if (n % 2 == 0) {
    return true
 } else {
     return false
 }
 
}
 console.log(isEven(8))*/

 /*function unEqual(number1, number2) {

    if ( number1 !== number2) {

        return true
    } else {
        return false
    }

 }
 console.log(unEqual(1, 2))*/

 /*function isThreeDigit(number) {

    if ( number >= 100 && number < 1000 ) {

        return true

    } else {

        return false

    }

 }
 console.log(isThreeDigit(500))

 function equals(number1, number2) {

    if ( number1 === number2 ) {

        return 'EQUAL'

    } else {

        return 'UNEQUAL'
    }


 }
 console.log(equals(1,1))*/


 function addTo(number) {

    let result = 0;

    for (let i = 1; i <= 3; i++ ) {

        result = result + i;

    }
    console.log(result)

 }
 addTo(5)