"use client"

var lang = document.documentElement.lang;

function changelang() {
    var html = document.getElementById("html")
    html.setAttribute("lang", "da")






    // console.log('Changing lang to ' + lang);
    // document.documentElement.lang = lang;

    // // All elements
    // let elements = document.documentElement.getElementsByTagName('*');

    // for (var i = 0; i < elements.length; i++) {
    //     if (elements[i].getAttribute("lang")) {
    //         elements[i].innerHTML = elements[i].getAttribute("lang");
    //     }
    // }
}
export default changelang
