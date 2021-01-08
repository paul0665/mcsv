/*
 * Copyright (C)  2020 paul0665(as know as paul)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

window.onscroll = function () {
    scrollFunction()
};
window.onresize = function () {
    rwd_Phone()
};

function scrollFunction() {
    if (document.body.clientWidth < 1500) {
        document.getElementById("logo").style.fontSize = "50px";
        return;
    }
    // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
    // 當使用者向下滑動80px後 縮小導行列
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("MainNavbar").style.padding = "30px 10px";
        document.getElementById("logo").style.fontSize = "25px";
    } else {
        document.getElementById("MainNavbar").style.padding = "80px 10px";
        document.getElementById("logo").style.fontSize = "35px";
    }
}

function rwd_Phone() {
    if (document.body.clientWidth < 1500) {
        document.getElementById("MainNavbar").style.padding = "30px 10px";
        document.getElementById("logo").style.fontSize = "50px";
    }
}

