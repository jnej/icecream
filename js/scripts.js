$(document).ready(function() {
  var flavours = ["chocolate", "strawberry", "vanila", "mint"]

  flavours.forEach(function(flavour) {
    //alert("yummy,yummy" + flavour);//
    $(".flavours").append("<li>" + flavour + "</li>");
  })
})
