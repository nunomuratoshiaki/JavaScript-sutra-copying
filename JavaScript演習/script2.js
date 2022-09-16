function menseki(hankei,mensek=3.14){
    return "面積は"+hankei*hankei*mensek+"㎠です。";
}
document.write(menseki(5));
document.write("<br>");
document.write(menseki(7));
document.write("<br>");
document.write(menseki(10));
document.write("<br>");

document.write("<br>");

function totalprice(otona,kodomo){
    return (otona*500)+(kodomo*200)+"円です。";
}
document.write(totalprice(2,4));
document.write("<br>");
document.write(totalprice(1,5));
document.write("<br>");
document.write(totalprice(3,7));