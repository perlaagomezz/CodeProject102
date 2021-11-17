// console.log ('hello')

alert ('Do you really know your classmates, guess the correct answers! Answer in lowercase.')

const userName = prompt('Please Enter Your Name');
let rightAnswer = 0;
let wrongAnswer = 0;

function percent(numerator){
    total = ((numerator/21)*100);
    rounded = Math.round(total *10/10);
    return rounded;
  }

  let question1 = prompt('What is Mr. Mumms favorite color?  A.Green  B.orange  C.Blue')
  
  let question2 = prompt(' What is Nates favorite color?  A.Lime green  B.Red  C.Blue ')
  
  let question3 = prompt('What is Lilys favorite color?  A.Pink  B.Light  Purple  C.Purple')
  
  let question4 = prompt('What is Jamaris favorite color?  A.Brown  B.Green  C.Yellow')
  
  let question5 = prompt('What is Perlas favorite color?  A.Black  B.Red  C.Blue')

  let question6 = prompt('what is Tyis favorite color? A.salmon B.light pink C.coral')

  let question7 = prompt('What is Joedens favorite color? A.Blue B.Purple C.Pink')
  
  let question8 = prompt('What is Camerons favorite color? A.Orange B.Green C.Purple')
  
  let question9 = prompt('When is Mr. Mumms birthda?y A.Sept 24th  B.Nov 1st C.July 14th')
  
  let question10 = prompt('When is Nates birthday? A.March 5th B.April 4th C.Apil 12th')
  
  let question11 = prompt('When is Lilys birthday?? A.Sep 13th B.October 4th C.August 27th')
  
  let question12 = prompt('When is Jamaris birthday A.Dec 26st B. January 3rd C.Dec 28th')
  
  let question13 = prompt('When is Perlas birthday? A.May 1st B.March 21st C. April 3rd')

  let question14 = prompt('When is Tyis birthday? A.Oct 7th B.July 28th C.Dec 22nd')

  let question15 = prompt('When is Joedens birthday? A.Nov 5th B.Oct 27th C.Dec 1st ')
  
  let question16 = prompt('When is Camerons birthday? A.Dec 30th B.Jan 5th C.Jan 1st')

  let question17 = prompt('What is Mr.Mumms favorite animal? A.Dog B.Zebra C.Elephant')
  
  let question18 = prompt('What is Nates favorite animal? A.Shark B.Blob fish C.Puffer Fish')

  let question19 = prompt('What is Lilys favorite animal A.Cat B.Bear C.Spider')

  let question20 = prompt('What is Jamaris favorite animal? A.Lion B.Panda C.Rihno')

  let question21 = prompt('What is Tyis favorite animal? A.Panther B.Siberian Tigar C.Tigar')


  //-----------------------------------Question 1-------------------------------------//

  if (question1 ==="c") {
      document.write("<section><h2> 1.What is Mr. Mumms favorite color?</h2> Question 1 was correct! The answer is blue</p></section>")
  }
  if(question1 !== "c"){
      document.write("<section><h2> 1.What is Mr. Mumms favorite color?</h2><p> Question 1 was incorrect. The correct answer is C.</p></section>")
  }

  //-----------------------------------Question 2-------------------------------------//

  if (question2 ==="c") {
      document.write("<section><h2> 2. What is Nates favorite color?</h2> Question 2 was correct! the answer is Blue. </p></section>")
  }
  if (question2 !=="c") {
      document.write("<section><h2> 2. What is Nates favorite color?</h2> Question 2 was incorrect. The correct answer is C.</p></section>")
  }

  //-----------------------------------Question 3-------------------------------------//

  if (question3 ==="b") {
      document.write("<section><h2> 3.What is Lilys favorite color?</h2> Question 3 was correct! the answer is light purple. </p><section ")
  }
  if (question2 !=="b") {
    document.write("<section><h2>   3. What is Lilys favorite color?</h2> Question 3 was incorrect. The correct answer is B.</p></section>")
}

//-----------------------------------Question 4-------------------------------------//

if (question4 ==="b") {
    document.write("<section><h2>  4.What is Jamaris favorite color?</h2> Question 4 was correct! the answer is Green. </p><section ")
}
if (question4 !=="b") {
  document.write("<section><h2>    4.What is Jamaris favorite color?</h2> Question 4 was incorrect. The correct answer is B.</p></section>")
}

//-----------------------------------Question 5-------------------------------------//

if (question5 ==="c") {
    document.write("<section><h2>  5.What is Perlas favorite color?</h2> Question 5 was correct! the answer is Blue. </p><section ")
}
if (question5 !=="c") {
  document.write("<section><h2>    5.What is Perlas favorite color?</h2> Question 5 was incorrect. The correct answer is C.</p></section>")
}
