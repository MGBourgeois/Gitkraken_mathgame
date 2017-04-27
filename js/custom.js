var playing= 0;//false
var score;
// if we click on the start/reset
  document.getElementById("startreset").onclick= function(){
     // if we are playing 
      if( playing==1){          
          location.reload();//reload page
          
      }else{// if we are not playing
          
        
        score = 0; //Set score to 0
          
        document.getElementById("scorevalue").innerhtml = score;
          
        document.getElementById("timeremaining").style.display= "block"; // show count down box
          
        document.getElementById("startreset").innerhtml= "Reset Game"; //Change button to reset
          
        //reduce time by 1sec in loops  
      }
      
  }
      
      
  


  
     

     
// if time left?
    //yes-->continue
       //no -->game over
//Change button to reset
// Generate new Q&A

//if we click on answer box
  //if we are playing
     //correct?
        //yes
            // increase score by one
               // show correct box for 1sec
                  // generate new Q&A
         //no
            //show try again box for 1sec
