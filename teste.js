// https://www.easycalculation.com/analytical/distance-between-three-points.php
// Javascript

function Point(x, y) {
    this.x = x;
    this.y = y;
}

function distancia(p1, p2, p3) {
    var d1, d2, d3;

    d1 = Math.sqrt(Math.pow(Math.abs(p2.x - p1.x), 2) + Math.pow(Math.abs(p2.y - p1.y), 2));
    d2 = Math.sqrt(Math.pow(Math.abs(p3.x - p2.x), 2) + Math.pow(Math.abs(p3.y - p2.y), 2));
    d3 = Math.sqrt(Math.pow(Math.abs(p1.x - p3.x), 2) + Math.pow(Math.abs(p1.y - p3.y), 2));


    return ((d1 + d2 + d3) / 3);
}

var d = distancia(new Point(1, 2), new Point(3, 4), new Point(5, 6));
console.log(d);

function isAlmostPalindrome(text) {
    var a = new String();
    console.log(text.length);
    for (var x = text.length; x >= 0; --x) {
        a = a.concat(text.charAt(x));
    }

    let i = 0;
    for (let index = 0; index < (text.length / 2); index++) {

        if (a.charAt(index) != text.charAt(index)) {

        }

    }

    console.log(text);
    console.log(a);

    if (text == a) {
        return true;
    } else if (i = 1) {
        return true;
    } else {
        return false;
    }

    return false;

}

console.log(isAlmostPalindrome('natgn'));