//global.document = new JSDOM('train.html').window.document;
//const jsdom = require("jsdom");
//const { JSDOM } = jsdom;

$(document).ready(function() {

    $('.basket').click(function() {
        var boughtitems = $('.byen').toggle();
        $('.buybtn').show();
    });


    $("#tomato").click(function() {

        $(".poducttomato").show();
        $(".remove").click(function() {
            $(".poducttomato").hide();
        });
    });

    $("#spanich").click(function() {
        $(".poductspinach").show();
        $(".removeo").click(function() {
            $(".poductspinach").hide();
        });
    });

    $("#purslane").click(function() {
        $(".poductpurslane").show();
        $(".removep").click(function() {
            $(".poductpurslane").hide();
        });
    });

    $("#rocca").click(function() {
        $(".poductrocca").show();
        $(".removek").click(function() {
            $(".poductrocca").hide();
        });
    });

    $("#pepper").click(function() {
        $(".poductpepper").show();
        $(".removeh").click(function() {
            $(".poductpepper").hide();
        });
    });

    $("#onion").click(function() {
        $(".removef").click(function() {
            $(".poductonion").hide();
        });
        $(".poductonion").show();
    });

    $("#okra").click(function() {
        $(".removed").click(function() {
            $(".poductokra").hide();
        });
        $(".poductokra").show();
    });

    $("#Mulukhiya").click(function() {
        $(".poductmulukhiya").show();
        $(".removeg").click(function() {
            $(".poductmulukhiya").hide();
        });

    });

    $("#lettuce").click(function() {
        $(".removet").click(function() {
            $(".poductlettuce").hide();
        });

        $(".poductlettuce").show();
    });

    $("#pumpkin").click(function() {
        $(".removee").click(function() {
            $(".poductpumpkin").hide();
        });

        $(".poductpumpkin").show();
    });

    $("#eggplant").click(function() {
        $(".removej").click(function() {
            $(".poducteggplant").hide();
        });

        $(".poducteggplant").show();
    });

    $("#dendelion").click(function() {
        $(".removea").click(function() {
            $(".poductdendelion").hide();
        });

        $(".poductdendelion").show();
    });

    $("#corn").click(function() {
        $(".removec").click(function() {
            $(".poductcorn").hide();
        });

        $(".poductcorn").show();
    });

    $("#coriander").click(function() {
        $(".removen").click(function() {
            $(".poductcoriander").hide();
        });

        $(".poductcoriander").show();
    });

    $("#cabbage").click(function() {
        $(".removew").click(function() {
            $(".poductcabbage").hide();
        });

        $(".poductcabbage").show();
    });

    $("#betroot").click(function() {
        $(".removeq").click(function() {
            $(".poductbetroot").hide();
        });

        $(".poductbetroot").show();
    });

    $("#bean").click(function() {
        $(".removed").click(function() {
            $(".poductbean").hide();
        });

        $(".poductbean").show();
    });

    $("#cucumber").click(function() {
        $(".removes").click(function() {
            $(".poductcucumber").hide();
        });

        $(".poductcucumber").show();
    });

});
getitem();

function getitem() {
    var it = document.getElementsByClassName('byen');

    for (var i = 0; i < it.length; i++) {
        if (it[i].style.display = 'block') {
            return it[i].textContent;
        }

    }
    //return shown;
}



var mew = document.getElementById('myField').value = getitem();


var form = document.getElementById("fs-frm");
var item = document.getElementById('bos');
async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("but");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        status.innerHTML = "Thanks for your submission!";
        form.reset()
    }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
    });
}
form.addEventListener("submit", handleSubmit) 
