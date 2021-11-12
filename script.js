// console.log ('hello')

alert ('Do you really know your classmates, guess the correct answers!')

const userName = prompt('Please Enter Your Name');
let rightAnswer = 0;
let wrongAnswer = 0;

function percent(numerator){
    total = ((numerator/21)*100);
    rounded = Math.round(total *10/10);
    return rounded;
  }

  let question1 = prompt ('What is Mr. Mums favorite color?  A.Green  B.Purple  C.Blue')
  let question2 = prompt(' What is Nates favorite color?  A.Lime green  B.Red  C.Blue ')
  let question3 = prompt('What is Lilys favorite color?  A.Pink  B.Light  Purple  C.Purple')
  let question4 = prompt('What is Jamaris favorite color?  A.Brown  B.Green  C.Yellow')
  let question5 = prompt('What is Perlas favorite color?  A.Black  B.Red  C.Blue')
  let question6 = prompt('When is Mr. Mums birthday A.sept 24th  B.Nov 1st C. July 14th')
  let question7 = prompt('When is Nates birthday A.March 5th B. April 4th C.Apil 12th')
  let question8 = prompt('When is Lilys birthday A.Sep 13th B.October 4th C.August 27th')
  let question9 = prompt('When is Jamaris birthday A.Dec 26st B. January 3rd C.Dec 28th')