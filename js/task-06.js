const textInput = document.querySelector('#validation-input');
textInput.addEventListener("blur", () => {
    textInput.classList.remove("invalid");
    textInput.classList.remove("valid");

    if (textInput.value.length === Number(textInput.dataset.length)){
        textInput.classList.add("valid");
        
    } else{
    
    textInput.classList.add("invalid");
    }
    
  });
  
  
