// JavaScript Document
$(document).ready(function(){
	$('#dengLu,#topHeader,#topHeader1,#topHeader2,#topHeader3,#topHeader4').hide();
    $('#A').click(function(){
		$('#topHeader').show();
        $('#topHeader1').show(500);
		$('#dengLu').show(1000);
		$('#topHeader2,#topHeader3,#topHeader4').hide();
		
    });
	$('.close').click(function(){
	    $('#dengLu,#topHeader,#topHeader1,#topHeader2').hide();
	});
	$('#B').click(function(){
		$('#topHeader').show();
        $('#topHeader2').show(500);
		$("#topHeader1,#topHeader3,#topHeader4").hide()
	});
	$('#C').click(function(){
		$('#topHeader').show();
        $('#topHeader3').show(500);
		$("#topHeader1,#topHeader2,#topHeader4").hide()
	});
	$('#D').click(function(){
		$('#topHeader').show();
        $('#topHeader4').show(500);
		$("#topHeader1,#topHeader2,#topHeader3").hide()
	});
	
});
    
    
    
    
    //.animate({top:'+=10px'},500);滑动
    //.fadeOut('slow');消失特效
    //.effect('slide');闪动特效
    