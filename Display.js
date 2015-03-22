function aDisplay() {
    document.open();
    document.write($tagA,$context,$tagX); # $context@array or var res = $0.concat($n); 
    document.close();
}

function bDisplay() {
    var x = document.getElementById($0);
    x.innerHTML = x.attributes["$0"].isId;
}

function cDisplay() {
var c = document.getElementById("tile");
var ctx = c.getContext("2d");
ctx.font = "12px Arial";
ctx.fillText($STRINGS,12,20);
}
