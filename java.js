var a = document.querySelector("#image")
var b = document.querySelector("#para")
var c = document.querySelector("#one")
var d = document.querySelector("#nne")
var flag = 0

c.addEventListener("click",function(){
    if(flag == 0){
        c.innerHTML = "ADDED";
    c.style.backgroundColor ="lime";
    flag = 1
    }else{
        c.innerHTML = "ADD";
        c.style.backgroundColor ="white";
        flag = 0
    }
   
})
d.addEventListener("click",function(){
    if(flag == 0){
        b.innerHTML = "aukaat bhol gya kaya??????";
        a.style.backgroundImage = "URL('campus.jpg')";
        flag = 1

    }else{
        
       d.innerHTML ="jobless"
        flag = 0
    }
  

})

