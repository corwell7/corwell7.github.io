
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// You must escape any backward slashes. "\\"

let custom_text_header = `
<div class="custom-text-header"> <pre>
    ____  ___    __                   
   / __ \\/   |  / /   _______  _______
  / / / / /| | / /   / ___/ / / / ___/
 / /_/ / ___ |/ /___(__  ) /_/ (__  ) 
/_____/_/  |_/_____/____/\\__, /____/  
                        /____/        </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header