function closeNav(){
    if(document.getElementsByTagName("nav")[0].classList.contains("openNav")){
        document.getElementsByTagName("nav")[0].classList.remove("openNav");
    }
}
function displayNav(){
    if(document.getElementsByTagName("nav")[0].classList.contains("openNav") == false){
        document.getElementsByTagName("nav")[0].classList.add("openNav");
    }
    else{
        document.getElementsByTagName("nav")[0].classList.remove("openNav");
    }
}