function remove() {
    var mybox_1 = document.getElementById("i");
    alert("you deleted box red  by function remove")
    mybox_1.remove();
    mybox_2.style.display = "block";
    alert("function remove()")
}
function hello() {
    var mybox_2 = document.getElementById("z");
    alert("you deleted box green by display none")
    mybox_2.style.display = "none";
    alert("style.display.none")
}