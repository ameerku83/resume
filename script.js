    




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
       if(name.length<2){
           message.innerText="please enter name...!"
           message.style.display="block"
            namecorect.innerText=" "
           return false
       }else{
    
         namecorect.innerText=" ✓..!"
         
           
       }
       if( /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(email)==false){
           message.innerText="entera valid email. use small letters..!"
           message.style.display="block"
           emailCorect.innerText=""
           return false
       }else{
         emailCorect.style.color="green"
         emailCorect.innerText="✓..!"
           
           
       }
       if(!/^(?=.*[a-z])(?=.*[A-Z]).{6,15}$/.test(password)){
           message.innerText="password must be greater than 5 one uppercase...!"
           message.style.display="block"
           passwordCorrect.innerText=""
           return false
       }else{
         passwordCorrect.style.color="green"
         passwordCorrect.innerText="✓..!"
           
           
       }

       if(Phone.length<7){
         message.innerText="enter your phone number...!"
         message.style.display="block"
          phonCcorrect.innerText=""
         return false
     }else{
      phonCcorrect.style.color="green"
      phonCcorrect.innerText="✓..!"
      
        
    }
     if(address.length<10){
      message.innerText="enter at least 10 character...!"
      message.style.display="block"
      addressCorect.innerText=""
      return false
  }else{
   addressCorect.style.color="green"
   addressCorect.innerText="✓..!"
     
     
 }
name=""
               alert("successfully saved")
               return false
           }