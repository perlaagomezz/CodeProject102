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

  let question1 = prompt('What is Mr. Mumms favorite color?  A.Blue  B.orange  C.Orange')
  
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
  
  let question12 = prompt('When is Jamaris birthday A.dec 28th B. January 3rd C.Dec 26th')
  
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

  if (question1 ==="a") {
      document.write("<section><h2> 1.What is Mr. Mumms favorite color ?</h2> Question 1 was correct! The answer is blue</p></section>")
  }
  if(question1 !== "a"){
      document.write("<section><h2> 1.What is Mr. Mumms favorite color? </h2> Question 1 was incorrect. The correct answer is C.</p></section>")
  }

  //-----------------------------------Question 2-------------------------------------//

  if (question2 ==="c") {
      document.write("<section><h2> 2. What is Nates favorite color? </h2> Question 2 was correct! the answer is blue. </p></section>")
  }
  if (question2 !=="c") {
      document.write("<section><h2> 2. What is Nates favorite color? </h2> Question 2 was incorrect. The correct answer is blue. </p></section>")
  }

  //-----------------------------------Question 3-------------------------------------//

  if (question3 ==="b") {
      document.write("<section><h2> 3. What is lilys favorite color? </h2> Question 3 was correct! The answer is light purple. </p></section>")
      
  }
  if (question3!=="b") {
      document.write("<section><h2> 3. What is lilys favorite color? </h2> Question 3 was incorrect. The answer is light purple. </p></section?> ")
      
  }

//-----------------------------------Question 4-------------------------------------//

if (question4 ==="b") {
    document.write("<section><h2>  4.What is Jamaris favorite color? </h2> Question 4 was correct! the answer is green. </p><section> ")
}
if (question4 !=="b") {
  document.write("<section><h2>    4.What is Jamaris favorite color? </h2> Question 4 was incorrect. The correct answer is green.</p></section>")
}

//-----------------------------------Question 5-------------------------------------//

if (question5 ==="c") {
    document.write("<section><h2>  5.What is Perlas favorite color? </h2> Question 5 was correct! The answer is blue. </p><section>")
}
if (question5 !=="c") {
  document.write("<section><h2>    5.What is Perlas favorite color? </h2> Question 5 was incorrect. The correct answer is blue.</p></section>")
}

//-----------------------------------Question 6-------------------------------------//

if (question6 ==="b") {
    document.write("<section><h2>   6.What is Tyis favorite color? </h2> Question 6 was correct! The answer is light pink.")
}
if (question6 !=="b") {
    document.write("<section><h2>   6.What is Tyis favorite color? </h2> Question 6 was incorrect. The answer is light pink. ")
}

//-----------------------------------Question 7-------------------------------------//

if (question7 ==="b") {
    document.write("<section><h2>   7.What is Joedens favorite color? </h2> Question 7 was correct! The answer is purple. ")
}
if (question7 !=="b") {
    document.write("<section><h2>   7. What is Joedens favorite color? </h2> Question 7 was incorrect. The answer is purple.")
}

//-----------------------------------Question 8-------------------------------------//

if (question8 ==="c") {
   document.write("<section><h2>    8. What is Camerons favorite color? </h2> Question 8 was correct! The answer is purple. ") 
}
if (question8 !=="c") {
    document.write("<section><h2>    8. What is Camerons favorite color? </h2> Question 8 was incorrect. The answer is purple. ") 
}

//-----------------------------------Question 9-------------------------------------//

if (question9 ==="a") {
    document.write("<section><h2>    9. When is Mr.Mumms birthday? </h2> Question 9 was correct!  Mr.Mumms birthday is September 24th. ")
}
if (question9 !=="a") {
    document.write("<section><h2>    9. When is Mr.Mumms birthday? </h2> Question 9 was incorrect. Mr.Mumms birthday is September 24th. ")
}

//-----------------------------------Question 10-------------------------------------//

if (question10 ==="b") {
    document.write("<section><h2>    10. When is Nates birthday? </h2>  Question 10 was correct! Nates birthday is April 4th. ")
}
if (question10 !=="b") {
    document.write("<section><h2>    10. When is Nates birthday? </h2> Question 10 was incorrect. Nates birthday is April 4th.")
}

//-----------------------------------Question 11-------------------------------------//

if (question11 ==="a") {
    document.write("<selection><h2>  11. When is Lilys birthday? </h2>  Question 11 was correct! Lilys birthday is September 4th.")
 }
 if (question11 !=="a") {
     document.write("<section><h2>   11. When is Lilys birthday? </h2> Question 11 was incorrect. Lilys birthday is September 24th ")
 }

 //-----------------------------------Question 12-------------------------------------//

 if (question12 ==="a") {
     document.write("<selection><h2>  12. When is Jamaris birthday? </h2> Question 12 was correct! Jamaris birthday is December 28th. ")
 }
 if (question12 !=="a") {
     document.write("<section><h2>    12. When is Jamaris birthday? </h2> Question 12 was incorrect. My birthday is December 28th remember it.")
 }