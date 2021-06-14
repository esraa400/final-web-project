
 /*--- JS for slide show----*/
var myIndex = 0;
carousel();

function carousel() {
 var i;
 var x = document.getElementsByClassName("mySlides");
 for (i = 0; i < x.length; i++) {
   x[i].style.display = "none";  
 }
 myIndex++;
 if (myIndex > x.length) {myIndex = 1}    
 x[myIndex-1].style.display = "block";  
 setTimeout(carousel, 2000); // Change image every 2 seconds
}



/*-----------JS for register form-----------*/
   

   function validation(){
     // store the value that user enter in variables
     var user = document.getElementById('user').value;
     var user2 =  document.getElementById('user2').value;
     var pass = document.getElementById('pass').value;
     var conpass = document.getElementById('conpass').value;
     var email = document.getElementById('email').value;
     var mobile = document.getElementById('mobile').value;
     
   
     
    
    //  to accert a name of 3 letters at least
     if(user.length<3){
         alert("*first Name must be more than 2 letters*");
         return false;
     }
     else if(user2.length<3){
       alert("*last Name must be more than 2 letters*");
       return false;
   }
      else if(mobile.length!=11){
       alert("*please enter a valid number*");
       return false;
   }
     
     
     
     else if(pass.search(/[ ]/)!=-1){
        alert("**must not include a space**");
     return false;
    }
     // limit the lenght of the  pass
     else if(pass.length != 8 ){
       alert("**please write a passward of 8 no long no less**");
         return false;
     }
       // must enclud numbers
    else if(pass.search(/[0-9]/)==-1){
         
         alert("must incluce at least a number");
         return false;
     }
     //not to accept without upper characters
     else if(pass.search(/[A-Z]/)==-1){
   alert("**must include at leasrt 1 upper character**");
         return false;
     }
     // not to accept without lower characters
    else if(pass.search(/[a-z]/)==-1){
         alert("**must include at least 1 lowwer character**");
     return false;
    }
     // not accept without special characters
     else if(pass.search(/[!\@\#\$\%\^\&\*\(\)\_\-\=\+\<\>\,\?]/)==-1){
        
            alert("**must include 1 special character**");
         return false;
        }
     
     else if(conpass != pass){
         alert("**passward isnot matches");
         return false;
     
     }
    
       else if(email.indexOf("@") == -1 || email.length < 6){
       alert("**Please Enter valid Email**");
        return false;
   }
    else{
       alert("Thank you for Booking from us.");
    }
   
     
   }
   
   
   