menu_list_array =[
    "chicken tandoori pizza",
    "veg superem pizza",
    " panneer tikka pizza",
    " delux veggi pizza",
    "veg extravaganza pizza"
];

function getmenu(){
    var htmldata;
    htmldata ="<o1 class='menulist'>"
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+'<li>'+ menu_list_array[i] +'<li>'
    }
    htmldata=htmldata+'</o1>'
    document.getElementById("display_menu").innerHTML= htmldata;
}

function addmenu(){
    htmldata;
    item=document.getElementById("add_item").value
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata="<section class='card'>"
    for(i=0;i<menu_list_array.length;i++){
    htmldata='<div class="card">' + '<img src="images/pizza.png"/>' + menu_list_array[i] + '</div>'
}
htmldata=htmldata + "</section>"
document.getElementById("display_addedmenu").inner= htmldata;
}