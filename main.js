$(window).on('load', function() { // makes sure the whole site is loaded 
  $('#loading').hide(); // will first fade out the loading animation 

});




//function for toggle




$(document).ready(function(){
    $("#j").click(function(){
        $(this).hide();
        $("#k").show();
        $(".toggle").css("margin-right" , "0px");
    });
    
    
    $("#k").click(function(){
        $(this).hide();
        $("#j").show();
        $(".toggle").css("margin-right" , "-260px");
    })
    
});

//function for toggle animation
function hello(){
    $('.home').toggleClass('aa animated fadeInUp');
    $('.about').toggleClass('bb animated fadeInUp');
    $('.gellery').toggleClass('cc animated fadeInUp');
    $('.services').toggleClass('dd animated fadeInUp');
    $('.blog').toggleClass('ee animated fadeInUp');
    $('.pages').toggleClass('ff animated fadeInUp');
};



//funnction for trigger animation

$(document).ready(function(){
    $(window).scroll(function(event){
        var y = $(this).scrollTop();
        if(y>=35){
            $('#fur').addClass('gg animated bounceInLeft');
            $('#afur').addClass('ii animated fadeInUp');
            $('#uone').addClass('mm animated bounceInLeft');
            $('#pone').addClass('ll animated fadeInUp');
        }
        if(y>=550){
               $('#ours').addClass('nn animated fadeInUp');
            $('#uonew').addClass('oo animated bounceInLeft');
        }
        if(y>=700){
            $('#dtwo').addClass('nn animated fadeInUp');
        }
        if(y>=950){
            $('#dthree').addClass('ll animated fadeInUp');
        }
        if(y>=1400){
            $('#image').addClass('hh animated bounceInLeft');
             $('#qoute').addClass('ll animated fadeInUp');
            $('#aswe').addClass('mm animated fadeInUp');
            $('#title').addClass('oo animated bounceInRight');
        }
        if(y>=1800){
            $('#arran').addClass('gg animated bounceInLeft');
            $('#Browse').addClass('kk animated fadeInUp');
            $('#utwo').addClass('ll animated bounceInLeft');
        }
        
        if(y>=2850){
            $('#our').addClass('mm animated fadeInUp');
             $('#uthree').addClass('oo animated bounceInLeft');
        }
    })
});


