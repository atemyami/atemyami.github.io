
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

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});

var mailOptions = {
  from: 'olaadases@gmail.com',
  to: 'asilseeds@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
});
  
  
});
