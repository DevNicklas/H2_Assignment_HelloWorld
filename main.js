document.addEventListener("DOMContentLoaded", function() {
    alert("Hello world");
    document.getElementById("sayHelloBtn").onclick = sayHello;
});

function sayHello() {
    document.getElementById("text").innerHTML = "Hello world";
}

