const form = document.querySelector("form");
const tablebody = document.getElementById("tablebody");


const clearbtn = document.getElementById("clear");
clearbtn.addEventListener('click', () =>{
     document.getElementById("studentform").reset();
});

        
       
function onFormSubmission(e) {
    e.preventDefault();

    var sname = document.getElementById("name").value;
    if (sname == "") {
        alert("Please Enter Student Name");
        return false;
    }
         
    var semail = document.getElementById("email").value;
    if (semail == "") {
        alert("Please Enter Your E-mail ID");
        return false;
    }
    
    var swebsite = document.getElementById("website").value;
    if (swebsite == "") {
        alert("Please Enter Your Website Link");
        return false;
    }
                
    var simagelink = document.getElementById("imagelink").value;
    if (simagelink == "") {
        alert("Please Enter Your Image Url");
        return false;
    }
                
    var genderbutton = document.getElementsByName("gender");
    var sgender = "";
    if(genderbutton[0].checked)
        sgender = "Male";
    else if(genderbutton[1].checked)
        sgender = "Female";
    if (sgender == "") {
        alert("Please Select Your Gender");
        return false;
    }  
      
    var check1 = document.getElementById("java");
    var check2 = document.getElementById("html");
    var check3 = document.getElementById("css");
    var sskills = "";
    if(check1.checked==true)
        sskills += check1.value + ", ";
    if(check2.checked==true)
        sskills += check2.value + ", ";
    if(check3.checked==true)
        sskills += check3.value + ", "; 
    sskills = sskills.substring(0,sskills.length-2); 
    if(sskills=="")
    {
        alert("You Have Not Selected Any Skill");
    }
   

    tablebody.innerHTML += `
            <tr class="fade-in" >
                <td class="newstudentdescription" ><label >${sname}</label><br>
                    ${sgender}<br>
                    ${semail}<br>
                    <a href="${swebsite}" target="_blank">${swebsite}</a>
                    ${sskills}
                </td>
                <td>
                    <img class="newstudentimage" src="${simagelink}" alt="${sname}">
                </td>
            </tr>
        `;
        
    document.getElementById("studentform").reset();   
         
}
 
      
form.addEventListener("submit", onFormSubmission);