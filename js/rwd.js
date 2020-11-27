function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
    document.getElementById("navbar").style.display = "none";
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
    document.getElementById("navbar").style.display = "initial";
    //document.getElementById("mySidepanel").addEventListener(ontransitionend(setSideInitial()))

}

function setSideInitial(){
    if(document.getElementById("mySidepanel").is .finished)
    document.getElementById("navbar").style.display = "initial";
}