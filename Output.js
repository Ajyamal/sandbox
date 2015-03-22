function aDisplay() {
    document.open();
    document.write("$tagA",$context","$tagX"); # $context@array
    document.close();
}

function bDisplay() {
    var x = document.getElementById("$0");
    x.innerHTML = x.attributes[$0].isId;
}

