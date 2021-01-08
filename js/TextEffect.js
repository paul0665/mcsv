/*
 * Copyright (C)  2020 paul0665(as know as paul)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
function myWebSite() {

    var MainText = "myWebSite";
    var SubText = "Demo of website"
    var SubTextEgg = "Light attracts bugs"
    var i = 0;
    var printMain = setInterval(function () {
        document.getElementById("myWebSiteText").innerHTML = document.getElementById("myWebSiteText").innerHTML + MainText.substr(i, 1).toString();
        i++
    }, 300)
    setTimeout(    function (){
        ConsolePrinter(SubText,"myWebSiteTextLine");
        clearInterval(printMain)
        setTimeout(    function (){
            ConsolePrinter(SubTextEgg,"myWebSiteTextLine");
            document.getElementById("eggimg").style.display = "block";
            document.getElementById("forfun").style.backgroundColor = "#242424";
            rgb();
            setTimeout(function (){
                setInterval(function () {
                    ConsolePrinter(SubText,"myWebSiteTextLine")
                },SubText.length*300)
                document.getElementById("eggimg").style.display = "none";
                document.getElementById("forfun").style.backgroundColor = "#ffffff";
            },SubTextEgg.length*200)

        },SubText.length*300)
    },MainText.length*300)
}

function ConsolePrinter(string, enid){
    var i = 0;
    document.getElementById(enid).innerHTML = document.getElementById(enid).innerHTML = ">_&ensp;"
    var inv = setInterval(function () {
        document.getElementById(enid).innerHTML = document.getElementById(enid).innerHTML.trim();
        document.getElementById(enid).innerHTML = document.getElementById(enid).innerHTML.replaceAll("_","");
        document.getElementById(enid).innerHTML = document.getElementById(enid).innerHTML + string.substr(i, 1).toString()+"_&ensp;";
        i++
    }, 100);
    setTimeout(function(){
        clearInterval(inv);
    }, string.length*300);
}
function rgb(){
    var timer = setInterval( function bg () {
        if(document.getElementById("forfun").style.backgroundColor !== "rgb(255, 255, 255)")
            document.getElementById("forfun").style.backgroundColor = "rgb(255, 255, 255)";
        else
            document.getElementById("forfun").style.backgroundColor = "rgb(0, 0,0)";
        },1)
    setTimeout(function(){
        clearInterval(timer);
        document.getElementById("forfun").style.backgroundColor = "#ffffff";
    }, 100);
}
