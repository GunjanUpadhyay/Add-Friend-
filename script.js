var istatus=document.querySelector("h5");
var addbtn=document.querySelector("#btn");

var flag=0;

addbtn.addEventListener("click",function(){
    if(flag==0){
        istatus.innerHTML="Friends"
        istatus.style.color="Green"
        addbtn.style.backgroundColor="grey"
        addbtn.innerHTML="Remove"
        flag=1
    }else{
        istatus.innerHTML="Stranger"
        istatus.style.color="Red"
        addbtn.style.backgroundColor="rgb(73, 134, 136)"
        addbtn.innerHTML="Add Friend"
            flag=0
    }
})