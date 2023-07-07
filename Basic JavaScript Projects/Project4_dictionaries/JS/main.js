//create dictionary//

function my_Dictionary() {
    var Dessert = {
        Type:"Ice Cream",
        Brand:"Steph's Cones",
        Flavor:"Chocolate Chip Cookie Dough",
        Size:"Medium",
        Cost:"Priceless"
    };
    //delete key//
    delete Dessert.Size
    //events//
    document.getElementById("Dictionary").innerHTML = Dessert.Size;
    document.getElementById("Dictionary1").innerHTML = Dessert.Flavor;
    document.getElementById("Dictionary2").innerHTML = Dessert.Cost;
}