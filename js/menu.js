$.getJSON( "/menu/menu.json")
  .done(function( data ) {
    // var page_name = $("#page").val();
    // console.log(page_name);
    $.each(data.menu.entradas, function(i, item){
      $(".menu-page-list").append("<li class='row-flex'><div class='col-3'><div class='menu-item-thumb'><img src='/img/menu-photo-placeholder.png' alt=''></div></div><div class='menu-item-description--number font-bold col-1'>"+item.id+".</div><div class='menu-item-description--text col-8'><span class='font-bold'>" + item.title + "</span><p>" + item.price + " " + item.info + "<br>" + item.description +  "</p></div></li>");
    });
  })
  .fail(function( jqxhr, textStatus, error ) {
    var err = textStatus + ", " + error;
    console.log( "Request Failed: " + err );
});
