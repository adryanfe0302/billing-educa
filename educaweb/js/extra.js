//Unlimit Your Self 18 March 2015 / nando@educa8.info


//nav float
 $(window).bind('scroll', function() {
         if ($(window).scrollTop() > 70) {
             $('.float-nav').addClass('fixed animated fadeInDown');
         }
         else {
             $('.float-nav').removeClass('fixed animated fadeInDown');
         }
    });


// popover
// $(document).ready(function(){
//    $('[data-toggle="popover"]').popover({
//        placement : 'right'
//    });
// });

//service animated + nav button actived
$(document).ready(function(){
    $("#gohome").click(function(){
         $(".nav1").addClass("actived")
         $(".nav2").removeClass("actived")
         $(".nav3").removeClass("actived")
         $(".nav4").removeClass("actived")
         
        $(".servicedestination").removeClass("animated fadeInLeft ex-right")
        $(".servicedestination2").removeClass("animated fadeInRight ex-right")
        $(".servicedestination").removeClass("animated fadeInLeft ex-right")
        $(".servicedestination-img").removeClass("animated rotateIn ex-right")
    });
    
    $("#goabout").click(function(){
         $(".nav1").removeClass("actived")
         $(".nav2").addClass("actived")
         $(".nav3").removeClass("actived")
         $(".nav4").removeClass("actived")
          $(".servicedestination").removeClass("animated fadeInLeft ex-right")
        $(".servicedestination2").removeClass("animated fadeInRight ex-right")
        $(".servicedestination").removeClass("animated fadeInLeft ex-right")
        $(".servicedestination-img").removeClass("animated rotateIn ex-right")
    });
    
    $("#goservice").click(function(){
        $(".servicedestination").addClass("animated fadeInLeft ex-right")
        $(".servicedestination2").addClass("animated fadeInRight ex-right")
        $(".servicedestination").addClass("animated fadeInLeft ex-right")
        $(".servicedestination-img").addClass("animated rotateIn ex-right")
        
        $(".nav1").removeClass("actived")
        $(".nav2").removeClass("actived")
        $(".nav3").addClass("actived")
        $(".nav4").removeClass("actived")
    });
    
    $("#gocontact").click(function(){
        $(".nav1").removeClass("actived")
        $(".nav2").removeClass("actived")
        $(".nav3").removeClass("actived")
        $(".nav4").addClass("actived")
        
        $(".servicedestination").removeClass("animated fadeInLeft ex-right")
        $(".servicedestination2").removeClass("animated fadeInRight ex-right")
        $(".servicedestination").removeClass("animated fadeInLeft ex-right")
        $(".servicedestination-img").removeClass("animated rotateIn ex-right")
    });
    
});


///faq-----start from here
$(document).ready(function(){
  
    
  
    
    $(".title_result_edu1").click(function(){
        $(".box_edu1").slideToggle();
        
        if($('#show1').text()=="--"){
                $("#show1").html("<i class='fa fa-caret-down fa-lg'></i>");
         }else{
                $("#show1").html("--");
            }
    });
    
    $(".title_result_edu2").click(function(){
        $(".box_edu2").slideToggle();
        
        if($('#show2').text()=="--"){
                $("#show2").html("<i class='fa fa-caret-down fa-lg'></i>");
         }else{
                $("#show2").html("--");
            }
    });
    
    $(".title_result_edu3").click(function(){
        $(".box_edu3").slideToggle();
        
        if($('#show3').text()=="--"){
                $("#show3").html("<i class='fa fa-caret-down fa-lg'></i>");
         }else{
                $("#show3").html("--");
            }
    });
    
    $(".title_result_edu4").click(function(){
        $(".box_edu4").css({"float":"left"}).slideToggle();
        
        if($('#show4').text()=="--"){
                $("#show4").html("<i class='fa fa-caret-down fa-lg'></i>");
         }else{
                $("#show4").html("--");
            }
    });
    
    
       
    
     $("#ilust-result-1").load("sourcedata.html #ilust-result-1");
     $("#ilust-result-2").load("sourcedata.html #ilust-result-2");
     $("#ilust-result-3").load("sourcedata.html #ilust-result-3");
     $("#ilust-result-4").load("sourcedata.html #ilust-result-4");
    
     $('#eng-lag').click(function(){
        $('#bah-lag').removeClass('ic-active');
        $(this).addClass('ic-active');
        $('section').find('.text-eng').removeClass('hidden');
        $('section').find('.text-bah').addClass('hidden')
     });

     $('#bah-lag').click(function(){
        $('#eng-lag').removeClass('ic-active');
        $(this).addClass('ic-active');
        $('section').find('.text-eng').addClass('hidden');
        $('section').find('.text-bah').removeClass('hidden')
     });


  
}); 
    

