    




    function handleSubmit(){
      const message=document.getElementById("message")
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const password = document.getElementById("password").value
      const Phone = document.getElementById("Phone").value
      const address=document.getElementById("address").value
      const namecorect=document.getElementById("namecorect")
      const emailCorect=document.getElementById("emailcorect")
      const passwordCorrect=document.getElementById("passwordcorrect")
      const phonCcorrect=document.getElementById("phonecorrect")
      const addressCorect=document.getElementById("addresscorect")
        namecorect.style.color="green"
       message.style.display="none"
       if(name.length==0){
           message.innerText="please enter name...!"
           message.style.display="block"
           return false
       }else{
    
         namecorect.innerText="(1/5)...!"
         
           
       }
       if( /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(email)==false){
           message.innerText="entera valid email. use small letters..!"
           message.style.display="block"
           return false
       }else{
         emailCorect.style.color="green"
         emailCorect.innerText="(2/5)...!"
           
           
       }
       if(password<6){
           message.innerText="password must be greater than 6...!"
           message.style.display="block"
           return false
       }else{
         passwordCorrect.style.color="green"
         passwordCorrect.innerText="(3/5)...!"
           
           
       }

       if(Phone.length==0){
         message.innerText="enter your phone number...!"
         message.style.display="block"
         return false
     }else{
      phonCcorrect.style.color="green"
      phonCcorrect.innerText="(4/5)...!"
      
        
    }
     if(address.length<10){
      message.innerText="enter at least 10 character...!"
      message.style.display="block"
      return false
  }else{
   addressCorect.style.color="green"
   addressCorect.innerText="(5/5) completed...!"
     
     
 }

               alert("successfully submitted")
               return true
           }