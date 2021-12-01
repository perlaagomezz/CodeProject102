// console.log ('hello')

alert ('Do you really know your classmates, guess the correct answers! Answer in lowercase.');

const userName = prompt('Please Enter Your Name');
let rightAnswer = 0;
let wrongAnswer = 0;




  let question1 = prompt('1. What is Mr. Mumms favorite color?  A.Blue  B.orange  C.Yellow');
  
  let question2 = prompt('2.  What is Nates favorite color?  A.Lime green  B.Red  C.Orange ');

  let question3 = prompt('1. What is Mr. Mumms favorite color?  A.Blue  B.orange  C.Orange');
  
  let question2 = prompt('2.  What is Nates favorite color?  A.Lime green  B.Red  C.Blue ');
 
  let question4 = prompt('3. What is Lilys favorite color?  A.Pink  B.Light  Purple  C.Purple');
  
  let question4 = prompt('4. What is Jamaris favorite color?  A.Brown  B.Green  C.Yellow');
  
  let question5 = prompt('5. What is Perlas favorite color?  A.Black  B.Red  C.Blue');

  let question6 = prompt('6. what is Tyis favorite color? A.light pink B.salmon C.coral');


  let question7 = prompt('7. What is Joedens favorite color? A.Blue B.Purple C.Black')

  let question7 = prompt('7. What is Joedens favorite color? A.Blue B.Purple C.Pink');

  
  let question8 = prompt('8. What is Camerons favorite color? A.Orange B.Green C.Purple');
  
  let question9 = prompt('9. When is Mr. Mumms birthda?y A.Sept 24th  B.Nov 1st C.July 14th');
  
  let question10 = prompt('10. When is Nates birthday? A.March 5th B.April 4th C.Apil 12th');
  
  let question11 = prompt('11. When is Lilys birthday?? A.Aug 24th B.October 4th C.Sep 13th');
  
  let question12 = prompt('12. When is Jamaris birthday A.dec 28th B. January 3rd C.Dec 26th');
  
  let question13 = prompt('13. When is Perlas birthday? A.May 1st B.March 21st C. April 3rd');

  let question14 = prompt('14. When is Tyis birthday? A.Oct 22nd B.July 28th C.Dec 22nd');

  let question15 = prompt('15. When is Joedens birthday? A.Nov 5th B.Oct 27th C.Dec 1st ');
  
  let question16 = prompt('16. When is Camerons birthday? A.Dec 30th B.Jan 5th C.Jan 1st');

  let question17 = prompt('17. What is Mr.Mumms favorite animal? A.Dog B.Zebra C.Elephant');
  
  let question18 = prompt('18. What is Nates favorite animal? A.Shark B.Puffer fish C.Blob fish');

  let question19 = prompt('19. What is Lilys favorite animal A.Cat B.Bear C.Spider');

  let question20 = prompt('20. What is Joedens favorite animal? A.okapi B.Panda C.Rihno');

  let question21 = prompt('21. What is Tyis favorite animal? A.Panther B.Siberian Tigar C.Tigar');


  //-----------------------------------Question 1-------------------------------------//

  if (question1 ==="a") {

      document.write("<section><h2> 1.What is Mr. Mumms favorite color ?</h2> <h3> Question 1 was correct! Mr. Mumms favorite color is blue. </h3>")
  }
  if(question1 !== "a"){
      document.write("<section><h2> 1.What is Mr. Mumms favorite color? </h2> <h3> Question 1 was incorrect. Mr. Mumms favorite color is blue. </h3>")
  }


  //-----------------------------------Question 2-------------------------------------//

  if (question2 ==="c") {
       document.write( "<h2> 2. What is Nates favorite color?</h2><section> Question 2 was correct! the answer is blue.</section>")
 
      document.write("<section><h2> 2. What is Nates favorite color? </h2> <h3> Question 2 was correct! Nates favorite color is Orange. </h3>")
  }


  //-----------------------------------Question 3-------------------------------------//

  if (question3 ==="b") {
      document.write("<section><h2> 3. What is lilys favorite color? </h2>  <h3>Question 3 was correct! lilys favorite color is light purple. </h3>")
      
  }
  if (question3!=="b") {
      document.write("<section><h2> 3. What is lilys favorite color? </h2>  <h3>Question 3 was incorrect. lilys favorite color is light purple. </h3> ")
      
  }

      document.write( "<h2> 2. What is Nates favorite color?</h2><section> Question 2 was correct! the answer is blue.</section>")
   ;
  if (question2 !=="c") {
      document.write("<h2> 2. What is Nates favorite color? </h2> <section> Question 2 was incorrect. The correct answer is blue. </section>") 
  };
  //-----------------------------------Question 3-------------------------------------//

  if (question3 ==="b") {
      document.write("<h2> 3. What is lilys favorite color? </h2> <section> Question 3 was correct! The answer is light purple. </section>")  
  };
  if (question3!=="b") {
      document.write("<h2> 3. What is lilys favorite color? </h2> <section> Question 3 was incorrect. The answer is light purple.</section>")  
  };


//-----------------------------------Question 4-------------------------------------//

if (question4 ==="a") {
    document.write("<section><h2>  4.What is Jamaris favorite color? </h2>  <h3>Question 4 was correct! Jamaris favorite is brown. </h3> ")
}
if (question4 !=="a") {
  document.write("<section><h2>    4.What is Jamaris favorite color? </h2>  <h3>Question 4 was incorrect. Jamaris favorite is brown. </h3> ")
}

//-----------------------------------Question 5-------------------------------------//

if (question5 ==="c") {
    document.write("<section><h2>  5.What is Perlas favorite color? </h2> <h3> Question 5 was correct! Perlas favorite color is blue. </h3> ")
}
if (question5 !=="c") {
  document.write("<section><h2>    5.What is Perlas favorite color? </h2> <h3> Question 5 was incorrect. Perlas favorite color is blue. </h3> ")
}


//-----------------------------------Question 6-------------------------------------//

if (question6 ==="a") {
    document.write("<section><h2>   6.What is Tyis favorite color? </h2> <h3> Question 6 was correct! Tyis favorite color is light pink.</h3>")
}
if (question6 !=="a") {
    document.write("<section><h2>   6.What is Tyis favorite color? </h2> <h3> Question 6 was incorrect. Tyis favorite color is light pink. </h3> ")
}

//-----------------------------------Question 7-------------------------------------//

if (question7 ==="b") {
    document.write("<section><h2>   7.What is Joedens favorite color? </h2> <h3> Question 7 was correct! Joedens favorite color is purple. </h3> ")
}
if (question7 !=="b") {
    document.write("<section><h2>   7. What is Joedens favorite color? </h2> <h3> Question 7 was incorrect. Joedens favorite color is purple. </h3> ")

    //---------------------------Question 8-------------------------------------//

if (question8 ==="c") {

   document.write("<section><h2>    8. What is Camerons favorite color? </h2> <h3> Question 8 was correct! Camerons favorite color is purple. </h3> ") 
}
if (question8 !=="c") {
    document.write("<section><h2>    8. What is Camerons favorite color? </h2> <h3> Question 8 was incorrect.Camerons favorite color is purple. </h3> ") 
}


//-----------------------------------Question 6-------------------------------------//

if (question6 ==="b") {
    document.write("<h2>6.What is Tyis favorite color? </h2><section>Question 6 was correct! The answer is light pink.</section></h2")
};
if (question6 !=="b") {
    document.write("<h2>6.What is Tyis favorite color? </h2><section>Question 6 was incorrect. The answer is light pink.</h2></section>")
};

//-----------------------------------Question 7-------------------------------------//

if (question7 ==="b") {
    document.write("<h2>7.What is Joedens favorite color? </h2><section> Question 7 was correct! The answer is purple.</section>")
};
if (question7 !=="b") {
    document.write("<h2>7. What is Joedens favorite color? </h2><section> Question 7 was incorrect. The answer is purple.</section>")
};

//-----------------------------------Question 8-------------------------------------//

if (question8 ==="c") {
   document.write("<h2>8. What is Camerons favorite color?</h2><section>Question 8 was correct! The answer is purple.</section>") 
};
if (question8 !=="c") {
    document.write("<h2>8. What is Camerons favorite color? </h2> <section>Question 8 was incorrect. The answer is purple.</section>") 
};



//-----------------------------------Question 9-------------------------------------//

if (question9 ==="a") {
    document.write("<h2>9. When is Mr.Mumms birthday? </h2><section>Question 9 was correct!  Mr.Mumms birthday is September 24th. </h3></section>")
};
if (question9 !=="a") {
    document.write("<h2>9. When is Mr.Mumms birthday? </h2><section>Question 9 was incorrect. Mr.Mumms birthday is September 24th. </h3></section>")
};

//-----------------------------------Question 10-------------------------------------//

if (question10 ==="b") {
    document.write("<h2>10. When is Nates birthday? </h2><section>Question 10 was correct! Nates birthday is April 4th.</section>")
};
if (question10 !=="b") {
    document.write("<h2>10. When is Nates birthday? </h2><section>Question 10 was incorrect. Nates birthday is April 4th.</section>")
};

//-----------------------------------Question 11-------------------------------------//

if (question11 ==="c") {
    document.write("<h2>11. When is Lilys birthday? </h2><section> Question 11 was correct! Lilys birthday is September 4th.</section>")
 };
 if (question11 !=="c") {
     document.write("<h2>11. When is Lilys birthday? </h2><section>Question 11 was incorrect. Lilys birthday is September 24th.</section>")
 };

 //-----------------------------------Question 12-------------------------------------//

 if (question12 ==="a") {
     document.write("<h2>12. When is Jamaris birthday? </h2><section> Question 12 was correct! Jamaris birthday is December 28th. </section>")
 };
 if (question12 !=="a") {
     document.write("<h2>12. When is Jamaris birthday? </h2><section>Question 12 was incorrect. My birthday is December 28th remember it.</section>")
 };

 //-----------------------------------Question 13-------------------------------------//

 if (question13 ==="b") {
     document.write("<h2>13. When is Perlas birthday? </h2><section>Question 13 was correct! Perlas birthday is March 21st.</section>")
 };
 if (question13 !=="b") {
     document.write("<h2>13. When is Perlas birthday? </h2><section>Question 13 was incorrect. Perlas birthday is March 21st so remember it! </h3></section>")
 };

 //-----------------------------------Question 14-------------------------------------//

 if (question14 ==="c") {
     document.write("<h2> 14. When is Tyis birthday?  </h2><section>Question 14 was correct! Tyis birthday is December 22nd.</section>")
 };
if (question14 !=="c") {
    document.write("<h2> 14. When is Tyis birthday? </h2><section>Question 14 was incorrect. Tyis birthday is December 22nd.</section>")
};

 //-----------------------------------Question 15-------------------------------------//

if (question15 ==="a") {
    document.write("<h2> 15. When is Joedens birthday? </h2><section>Question 15 is correct! Joedens birthday is November 5th.</section>")
};
if (question16 !=="a") {
    document.write("<h2> 15. When is Joedens birthday? </h2><section>Question 15 is incorrect. Joedens birthday is Nobember 5th.</section>")
};

 //-----------------------------------Question 16-------------------------------------//

 if (question16 ==="a") {
    document.write("<h2> 16. When is Camerons birthday? </h2><section>Question 16 is correct! Camerons birthday is December 30th.</section>")
 };
 if (question16 !=="a") {
    document.write("<h2> 16. When is Camerons birthday? </h2><section>Question 16 is incorrect. Camerons birthday is December 30th.</section>")
 };

 //-----------------------------------Question 17-------------------------------------//

if (question17 ==="b") {
    document.write("<h2> 17. What is Mr.Mumms favorite animal? </h2><section>Question 17 is correct! Mr.Mumms faveorite animal is a zebra!</section> ")
};
if (question17 !=="b") {
    document.write("<h2> 17. What is Mr.Mumms favorite animal? </h2><section>Question 17 is incorrect. Mr.Mumms faveorite animal is a zebra.</section> ")
};

 //-----------------------------------Question 18-------------------------------------//

if (question18 ==="c") {
    document.write("<h2> 18. What is Nates favorite animal? </h2><section>Question 18 is correct! Nates favorite animal is a blob fish? hes a weirdo.</section> ") 
};
if (question18 !=="c") {
    document.write("<h2> 18. What is Nates faveorite animal? </h2><section>Question 18 is incorrect. Nates favorite animal is a blob fish? hes a weirdo.</section> ") 
};

 //-----------------------------------Question 19-------------------------------------//

 if (question19 ==="b") {
    document.write("<h2> 19. What is Lilys favorite animal </h2><section>Question 19 is correct! Lilys favorite animal is a bear.</section> ")
 };
 if (question19 !=="b") {
    document.write("<h2> 19. What is Lilys favorite animal </h2><section> Question 19 is incorrect. Lilys favorite animal is a bear.</section> ")
 };

 //-----------------------------------Question 20-------------------------------------//

if (question20 ==="a") {
    document.write("<h2> 20. What is Joedens favorite animal? </h2><section>Question 20 is correct! Joedens favorite animal is an Okapi because he is also a weirdo.</section> ")
};
if (question20 !=="a") {

    document.write("<section><h2> 20. What is Joedens favorite animal? </h2> <h3> Question 20 is incorrect. Joedens favorite animal is an Okapi because he is also a weirdo. </h3> ")
}
  

 //-----------------------------------Question 21-------------------------------------//

 if (question21 ==="b") {
    document.write("<h2> 21. What is Tyis favorite animal? </h2><section>Question 21 is correct! Tyis favorite animal is a siberian tiger. </section> ")
 };

if (question21 ==="b") {
    document.write("<h2> 21. What is Tyis favorite animal? </h2><section>Question 21 is incorrect. Tyis favorite animal is a siberian tiger. </section> ")
}
} 
