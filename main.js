menu_list_array =[
    "chicken tandoori pizza",
    " Neapolitan Pizza",
    "Sicilian Pizza",
    "Sicilian Pizza",
    "veg superem pizza",
    " panneer tikka pizza",
    " delux veggi pizza",
    "veg extravaganza pizza"
];

function getmenu(){
    var htmldata;
    htmldata ="<ol class='menulist'>"
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.length;i++){
        var htmldata=htmldata+'<li>'+ menu_list_array[i] +'<li>'
    }
    htmldata=htmldata+'</ol>'
    document.getElementById("display_menu").innerHTML= htmldata;
}

function add_item(){
    htmldata;
    item=document.getElementById("add_item").value
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata="<section class='cards'>"
    for(i=0;i<menu_list_array.length;i++){
    htmldata=htmldata + '<div class="cards">' + '<img src="pizza.png"/>' + menu_list_array[i] + '</div>'
}
htmldata=htmldata + "</section>"
document.getElementById("display_addedmenu").inner= htmldata;
}