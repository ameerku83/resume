    

    function handleSubmit(){
      const message=document.getElementById("message")
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const password = document.getElementById("password").value
      const Phone = document.getElementById("Phone").value
      const address=document.getElementById("address").value
       message.style.display="none"
       if(name.length==0){
           message.innerText="please enter name...!"
           message.style.display="block"
           return false
       }
       if( /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(email)==false){
           message.innerText="enter valid email...!"
           message.style.display="block"
           return false
       }
       if(password.length<8){
           message.innerText="password must be greater than 8...!"
           message.style.display="block"
           return false
       }

       if(Phone.length==0){
         message.innerText="enter your phone number...!"
         message.style.display="block"
         return false
     }
     if(address.length==0){
      message.innerText="enter your address...!"
      message.style.display="block"
      return false
  }


       
               alert("successfully submitted")
               return false
           }