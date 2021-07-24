
$(document).ready(function(){
  $('.basket').click(function(){
       var shownproducts= $('.byen').toggle();
  });

  $("#tomato").click(function(){ 
 
      $(".poducttomato").show();
      $(".remove").click(function(){
        $(".poducttomato").hide();
    });
  
  });
   $("#spanich").click(function(){
        $(".poductspinach").show();
    $(".removeo").click(function(){
        $(".poductspinach").hide();
    });
  });

    $("#purslane").click(function(){
 $(".removep").click(function(){
    $(".poductpurslane").hide();
  });

    $(".poductpurslane").show();
  });

    $("#rocca").click(function(){
 $(".removek").click(function(){
    $(".poductrocca").hide();
  });

    $(".poductrocca").show();
  });

    $("#pepper").click(function(){
         $(".poductpepper").show();
 $(".removeh").click(function(){
    $(".poductpepper").hide();
  });

 
  });

    $("#onion").click(function(){
 $(".removef").click(function(){
    $(".poductonion").hide();
  });

    $(".poductonion").show();
  });

    $("#okra").click(function(){
 $(".removed").click(function(){
    $(".poductokra").hide();
  });

    $(".poductokra").show();
  });

    $("#mulukhiya").click(function(){
 $(".removeg").click(function(){
    $(".poductmulukhiya").hide();
  });

    $(".poductmulukhiya").show();
  });

    $("#lettuce").click(function(){
 $(".removet").click(function(){
    $(".poductlettuce").hide();
  });

    $(".poductlettuce").show();
  });

    $("#pumpkin").click(function(){
 $(".removee").click(function(){
    $(".poductpumpkin").hide();
  });

    $(".poductpumpkin").show();
  });

    $("#eggplant").click(function(){
 $(".removej").click(function(){
    $(".poducteggplant").hide();
  });

    $(".poducteggplant").show();
  });

    $("#dendelion").click(function(){
 $(".removea").click(function(){
    $(".poductdendelion").hide();
  });

    $(".poductdendelion").show();
  });

    $("#corn").click(function(){
 $(".removec").click(function(){
    $(".poductcorn").hide();
  });

    $(".poductcorn").show();
  });

    $("#coriander").click(function(){
 $(".removen").click(function(){
    $(".poductcoriander").hide();
  });

    $(".poductcoriander").show();
  });

    $("#cabbage").click(function(){
 $(".removew").click(function(){
    $(".poductcabbage").hide();
  });

    $(".poductcabbage").show();
  });

    $("#betroot").click(function(){
 $(".removeq").click(function(){
    $(".poductbetroot").hide();
  });

    $(".poductbetroot").show();
  });

    $("#bean").click(function(){
 $(".removed").click(function(){
    $(".poductbean").hide();
  });

    $(".poductbean").show();
  });

    $("#cucumber").click(function(){
 $(".removes").click(function(){
    $(".poductcucumber").hide();
  });

    $(".poductcucumber").show();
  });

$('.sendinfo').click(function(){
  var data = {
    name: $("#name").val(),
    email: $("#email").val(),
    message: $("#addres").val()
};
$.ajax({
    type: "POST",
    url: "script.php",
    data: data,
    success: function(){
        // Redirection on success
        var url = "http://example.com/confirmation.html";    
        $(location).attr('https://atemyami.github.io',url);
    }
});
});
  
  
});
