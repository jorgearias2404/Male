

const Inscribete_Buton =document.getElementById("Inscribete_Buton")
const Body1 = document.getElementById("Body1")
const Body2 = document.getElementById("Body2")

Inscribete_Buton.addEventListener("click",()=>{
    if(Body1.style.display==="none")
    {
        Body1.style.display ="block"
        Body2.style.display ="none"
    }
    else{
         Body1.style.display = "none"
         Body2.style.display ="block"
    }
});