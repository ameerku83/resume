    


const password = document.getElementById("password")
const Cpassword=document.getElementById("Cpassword")


    function handleSubmit(){
      const message=document.getElementById("message")
const name = document.getElementById("name").value
const email = document.getElementById("email").value

const namecorect=document.getElementById("namecorect")
const emailCorect=document.getElementById("emailcorect")
const passwordCorrect=document.getElementById("passwordcorrect")
  const  cpasswordcorrect=document.getElementById("cpasswordcorrect")
      
        namecorect.style.color="green"
       message.style.display="none"
       if( !name.trim() ){
           message.innerText="please enter name...!"
           message.style.display="block"
            namecorect.innerText=" "
           return false
       }else{
    
         namecorect.innerText=" ✓..!"
         
           
       }
       if( !/^[a-z0-9]+@[a-z]+\.[a-z]{3}$/.test(email)){
           message.innerText="entera valid email. use small letters..!"
           message.style.display="block"
           emailCorect.innerText=""
           return false
       }else{
         emailCorect.style.color="green"
         emailCorect.innerText="✓..!"
           
           
       }
       if(!/^(?=.*[a-z])(?=.*[A-Z]).{5,15}$/.test(password.value) ){
           message.innerText="password must be greater than 4 one uppercase...!"
           message.style.display="block"
           passwordCorrect.innerText=""
           return false
       }else{
         passwordCorrect.style.color="green"
         passwordCorrect.innerText="✓..!"
           
           
       }
       if(password.value !== Cpassword.value){
        message.innerText="Enter same password"
        message.style.display="block"
        passwordCorrect.innerText=""
        return false
    }else{
      passwordCorrect.style.color="green"
      cpasswordcorrect.innerText="✓..!"
        
        
    }


         message.style.display="block"
          message.style.color="green"
          message.innerText="success please Login..!"
                alert(" Signup success please login")
               return true
               
           }

            function handleLogin(){

            const logMessage=document.getElementById("logMessage")
      const logEmail = document.getElementById("logEmail").value
   
      const logPassword = document.getElementById("logPassword").value
      if( !/^[a-z0-9]+@[a-z]+\.[a-z]{3,3}$/.test(logEmail)){
           logMessage.innerText="please enter a valid email ...!"
           logMessage.style.display="block"
           return false
       }
          const regx=  /^(?=.*[a-z])(?=.*[A-Z]).{5,15}$/
            
            
       if(!regx.test(logPassword) ){
           logMessage.innerText= "password must be greater than 4 one uppercase...!"
          
           logMessage.style.display="block"
           return false
       }
       
       alert("Login success ")
       return true

        }
          
        function viewPassword(){
          if(password.type=="password" && Cpassword.type=="password"){
            password.type="text" 
             Cpassword.type="text"
          }else{
             password.type="password" 
             Cpassword.type="password"
          }
        }