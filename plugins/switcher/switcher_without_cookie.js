function addSwitcher()
{
	var dzSwitcher = '<div id="dzSwitcher" class="styleswitcher"> <div class="switcher-btn-bx"> <a class="switch-btn"> <span class="fa fa-cogs fa-lg"></span> </a> </div><div class="styleswitcher-inner"> <div class="theme-box"> <h5 class="switcher-title"><span>Theme</span></h5> <h6 class="switcher-title">Standard</h6> <ul class="color-skins-db theme-panel-save"> <li> <a class="theme-skin skin-1" href="?theme=css/skin/skin-1" title="default Theme"></a> </li><li> <a class="theme-skin skin-2" href="?theme=css/skin/skin-2" title="pink Theme"></a> </li><li> <a class="theme-skin skin-3" href="?theme=css/skin/skin-3" title="sky Theme"></a> </li><li> <a class="theme-skin skin-4" href="?theme=css/skin/skin-4" title="green Theme"></a> </li><li> <a class="theme-skin skin-5" href="?theme=css/skin/skin-5" title="red Theme"></a> </li><li> <a class="theme-skin skin-6" href="?theme=css/skin/skin-6" title="orange Theme"></a> </li><li> <a class="theme-skin skin-7" href="?theme=css/skin/skin-7" title="purple Theme"></a> </li><li> <a class="theme-skin skin-8" href="?theme=css/skin/skin-8" title="blue Theme"></a> </li></ul> <h6 class="switcher-title">Full Color</h6> <ul class="color-skins"> <li> <a class="theme-skin skin-1" href="?theme=css/skin/skin-1" title="default Theme"></a> </li><li> <a class="theme-skin skin-2" href="?theme=css/skin/skin-2" title="pink Theme"></a> </li><li> <a class="theme-skin skin-3" href="?theme=css/skin/skin-3" title="sky Theme"></a> </li><li> <a class="theme-skin skin-4" href="?theme=css/skin/skin-4" title="green Theme"></a> </li><li> <a class="theme-skin skin-5" href="?theme=css/skin/skin-5" title="red Theme"></a> </li><li> <a class="theme-skin skin-6" href="?theme=css/skin/skin-6" title="orange Theme"></a> </li><li> <a class="theme-skin skin-7" href="?theme=css/skin/skin-7" title="purple Theme"></a> </li><li> <a class="theme-skin skin-8" href="?theme=css/skin/skin-8" title="blue Theme"></a> </li></ul> </div><div class="theme-box"> <h5 class="switcher-title"><span>Layout</span></h5> <ul class="layout-view"> <li class="wide-layout active">Wide</li><li class="boxed">Boxed</li><li class="frame">Frame</li></ul><div id="ThemeRangeSlider" class="price-slide-2 range-slider" style="display:none;"><div class="price"><input type="text" id="amount-2" class="amount" readonly="" value="20px"/><div id="slider-range-3"></div></div></div></div><div class="theme-box"> <h5 class="switcher-title"><span>Header</span></h5> <ul class="header-view"> <li class="header-fixed active">Fixed</li><li class="header-static">Static</li></ul> </div><div class="theme-box"> <h5 class="switcher-title"><span>Background</span></h5> <h6 class="switcher-title">Color</h6> <ul class="bg-color-switcher"> <li> <a class="bg-color-1" href="#" dir="#6cc000"></a> </li><li> <a class="bg-color-2" href="#" dir="#ff0096"></a> </li><li> <a class="bg-color-3" href="#" dir="#002eff"></a> </li><li> <a class="bg-color-4" href="#" dir="#00ccd3"></a> </li><li> <a class="bg-color-5" href="#" dir="#ff2f00"></a> </li><li> <a class="bg-color-6" href="#" dir="#490bb8"></a> </li><li> <a class="bg-color-7" href="#" dir="#007df1"></a> </li><li> <a class="bg-color-8" href="#" dir="#ff0101"></a> </li></ul> <h6 class="switcher-title">Image</h6> <ul class="background-switcher"> <li><img src="images/switcher/switcher-bg/bg1.jpg" dir="images/background/bg1.jpg" alt=""></li><li><img src="images/switcher/switcher-bg/bg2.jpg" dir="images/background/bg2.jpg" alt=""></li><li><img src="images/switcher/switcher-bg/bg3.jpg" dir="images/background/bg3.jpg" alt=""></li><li><img src="images/switcher/switcher-bg/bg4.jpg" dir="images/background/bg4.jpg" alt=""></li></ul> <h6 class="switcher-title">Pattern</h6> <ul class="pattern-switcher"> <li><img src="images/switcher/switcher-patterns/bg1.jpg" dir="images/pattern/pt1.jpg" alt=""></li><li><img src="images/switcher/switcher-patterns/bg2.jpg" dir="images/pattern/pt2.jpg" alt=""></li><li><img src="images/switcher/switcher-patterns/bg3.jpg" dir="images/pattern/pt3.jpg" alt=""></li><li><img src="images/switcher/switcher-patterns/bg4.jpg" dir="images/pattern/pt4.jpg" alt=""></li><li><img src="images/switcher/switcher-patterns/bg5.jpg" dir="images/pattern/pt5.jpg" alt=""></li><li><img src="images/switcher/switcher-patterns/bg6.jpg" dir="images/pattern/pt6.jpg" alt=""></li><li><img src="images/switcher/switcher-patterns/bg7.jpg" dir="images/pattern/pt7.jpg" alt=""></li><li><img src="images/switcher/switcher-patterns/bg8.jpg" dir="images/pattern/pt8.jpg" alt=""></li><li><img src="images/switcher/switcher-patterns/bg9.jpg" dir="images/pattern/pt9.jpg" alt=""></li><li><img src="images/switcher/switcher-patterns/bg10.jpg" dir="images/pattern/pt10.jpg" alt=""></li><li><img src="images/switcher/switcher-patterns/bg11.jpg" dir="images/pattern/pt11.jpg" alt=""></li><li><img src="images/switcher/switcher-patterns/bg12.jpg" dir="images/pattern/pt12.jpg" alt=""></li></ul> </div></div></div>';
	
	if($("#dzSwitcher").length == 0) {
		jQuery('body').append(dzSwitcher);
	}
}


jQuery(window).on('load',function(){
	
	//=== Switcher panal slide function	=====================//
	jQuery('.styleswitcher').animate({
		'left': '-220px'
	});
	jQuery('.styleswitcher-right').animate({
		'right': '-220px',
		'left': 'auto'
	});
	jQuery('.switch-btn').addClass('closed');
	//=== Switcher panal slide function END	=====================//
	
});
	
$(function(){		
	"use strict";
	
	addSwitcher();
	//=== Switcher panal slide function	=====================//
	jQuery('.switch-btn').on('click',function () {	
		if (jQuery(this).hasClass('open')) {
			jQuery(this).addClass('closed');
			jQuery(this).removeClass('open');
			jQuery('.styleswitcher').animate({
				'left': '-220px'
			});
			jQuery('.styleswitcher-right').animate({
				'right': '-220px',
				'left': 'auto'
			});
		} else {
			if (jQuery(this).hasClass('closed')) {
			jQuery(this).addClass('open');
			jQuery(this).removeClass('closed');
			jQuery('.styleswitcher').animate({
				'left': '0'
			});
			jQuery('.styleswitcher-right').animate({
				'right': '0',
				'left': 'auto'
			});
			}
		}	
	});
	//=== Switcher panal slide function END	=====================//

	//=== Color css change function	=====================//
    // Color changer
    jQuery(".skin-1").on('click',function(){
        jQuery(".skin").attr("href", "css/skin/color/skin-1.css");
		jQuery(".logo-header img").attr("src", "images/logo.png");
        return false;
    });
   jQuery(".color-skins-db .skin-1").on('click',function(){
        jQuery(".skin").attr("href", "css/skin/skin-1.css");
		jQuery(".logo-header img").attr("src", "images/logo1.png");
        return false;
    });
    jQuery(".skin-2").on('click',function(){
        jQuery(".skin").attr("href", "css/skin/color/skin-2.css");
		jQuery(".logo-header img").attr("src", "images/logo2.png");
        return false;
    });
    jQuery(".color-skins-db .skin-2").on('click',function(){
        jQuery(".skin").attr("href", "css/skin/skin-2.css");
		jQuery(".logo-header img").attr("src", "images/logo2.png");
        return false;
    });
	
    jQuery(".skin-3").on('click',function(){
        jQuery(".skin").attr("href", "css/skin/color/skin-3.css");
		jQuery(".logo-header img").attr("src", "images/logo3.png");
        return false;
    });
	jQuery(".color-skins-db .skin-3").on('click',function(){
        jQuery(".skin").attr("href", "css/skin/skin-3.css");
		jQuery(".logo-header img").attr("src", "images/logo3.png");
        return false;
    });
	
    jQuery(".skin-4").on('click',function(){
        jQuery(".skin").attr("href", "css/skin/color/skin-4.css");
		jQuery(".logo-header img").attr("src", "images/logo4.png");
        return false;
    });
	jQuery(".color-skins-db .skin-4").on('click',function(){
        jQuery(".skin").attr("href", "css/skin/skin-4.css");
		jQuery(".logo-header img").attr("src", "images/logo4.png");
        return false;
    });
	
    jQuery(".skin-5").on('click',function(){
        jQuery(".skin").attr("href", "css/skin/color/skin-5.css");
		jQuery(".logo-header img").attr("src", "images/logo5.png");
        return false;
    });	
	jQuery(".color-skins-db .skin-5").on('click',function(){
        jQuery(".skin").attr("href", "css/skin/skin-5.css");
		jQuery(".logo-header img").attr("src", "images/logo5.png");
        return false;
    });
	
    jQuery(".skin-6").on('click',function(){
        jQuery(".skin").attr("href", "css/skin/color/skin-6.css");
		jQuery(".logo-header img").attr("src", "images/logo6.png");
        return false;
    });		
	jQuery(".color-skins-db .skin-6").on('click',function(){
        jQuery(".skin").attr("href", "css/skin/skin-6.css");
		jQuery(".logo-header img").attr("src", "images/logo6.png");
        return false;
    });
		
    jQuery(".skin-7").on('click',function(){
        jQuery(".skin").attr("href", "css/skin/color/skin-7.css");
		jQuery(".logo-header img").attr("src", "images/logo7.png");
        return false;
    });
	jQuery(".color-skins-db .skin-7").on('click',function(){
        jQuery(".skin").attr("href", "css/skin/skin-7.css");
		jQuery(".logo-header img").attr("src", "images/logo7.png");
        return false;
    });
	
    jQuery(".skin-8").on('click',function(){
        jQuery(".skin").attr("href", "css/skin/color/skin-8.css");
		jQuery(".logo-header img").attr("src", "images/logo8.png");
        return false;
    });	
	jQuery(".color-skins-db .skin-8").on('click',function(){
        jQuery(".skin").attr("href", "css/skin/skin-8.css");
		jQuery(".logo-header img").attr("src", "images/logo8.png");
        return false;
    });
	//=== Color css change function	=====================//	
	
	
	
	
	//=== Background image change function	=====================//
	jQuery('.background-switcher li img').on('click',function(){
	 var imgbg = jQuery(this).attr('dir');
	 //console.<span id="IL_AD2" class="IL_AD">log</span>(imgbg);
	 jQuery('#bg').css({backgroundImage: "url("+imgbg+")"});
	 });
	//=== Background image change function	End=====================//
	
	
	//=== Background pattern change function	=====================//
	jQuery('.pattern-switcher li img').on('click',function(){
	 var imgbg = jQuery(this).attr('dir');
	 //console.<span id="IL_AD2" class="IL_AD">log</span>(imgbg);
	 jQuery('#bg').css({backgroundImage: "url("+imgbg+")"});
	 jQuery("#bg").css( "background-size", "auto");
	 
	 });
	//=== Background pattern change function End=====================//
	
	//=== Background pattern change function	=====================//
	jQuery('.bg-color-switcher li a').on('click',function(){
	 var bgcolor = jQuery(this).attr('dir');
	 //alert(bgcolor);
	 //console.<span id="IL_AD2" class="IL_AD">log</span>(bgcolor);
		jQuery('#bg').css('background-color', bgcolor);
		jQuery('#bg').css('background-image', '');
	 });
	//=== Background pattern change function End=====================//
	

	//=== Layout boxed & fullscreen change function	=====================//
	jQuery('.layout-view li ').on('click', function(){
		jQuery('.layout-view li ').removeClass('active');
		jQuery(this).addClass('active');	
	});
	
	jQuery('.wide-layout').on('click',function() { 
		jQuery("body").addClass('wide-layout');
		jQuery("body").removeClass('boxed');
		jQuery("body").removeClass('frame').removeAttr("style");
		jQuery('#ThemeRangeSlider').hide('slow');
	});
	
	jQuery('.boxed').on('click',function() { 
		jQuery("body").addClass('boxed');
		jQuery("body").removeClass('wide-layout');
		jQuery("body").removeClass('frame').removeAttr("style");
		jQuery('#ThemeRangeSlider').hide('slow');
	});
	jQuery('.frame').on('click',function() { 
		jQuery("body").addClass('frame');
		jQuery("body").removeClass('wide-layout');
		jQuery("body").removeClass('boxed');
		jQuery("body").removeClass('boxed');
		jQuery('#ThemeRangeSlider').show('slow');
		themeFramePadding();
		jQuery(".main-bar-wraper").addClass('sticky-no');
		jQuery(".main-bar-wraper").removeClass('sticky-header');
	});
	//=== Layout boxed & fullscreen change function	END=====================//
	


	//=== Nav light & dark change function	END=====================//
	jQuery('.nav-view li ').on('click', function(){
		jQuery('.nav-view li ').removeClass('active');
		jQuery(this).addClass('active');	
	});
	
	jQuery('.nav-light').on('click',function() { 
		jQuery(".header-nav").addClass('nav-light');
		jQuery(".header-nav").removeClass('nav-dark');
	});
	
	jQuery('.nav-dark').on('click',function() { 
		jQuery(".header-nav").addClass('nav-dark');
		jQuery(".header-nav").removeClass('nav-light');
	});
	//=== Nav light & dark change function	END=====================//	
	
	jQuery('.header-view li ').on('click', function(){
		jQuery('.header-view li ').removeClass('active');
		jQuery(this).addClass('active');
	});
	
	jQuery('.header-fixed').on('click',function() { 
		jQuery(".main-bar-wraper").addClass('sticky-header');
		jQuery(".main-bar-wraper").removeClass('sticky-no');
	});
	
	jQuery('.header-static').on('click',function() { 
		jQuery(".main-bar-wraper").addClass('sticky-no');
		jQuery(".main-bar-wraper").removeClass('sticky-header');
	});
	
	
});

function themeFramePadding(){
		$("#slider-range-3").slider({
				min: 20,
				max: 80,
				//value: 20,
				value:$(this).find('input').val(),
				animate:"slow",
				orientation: "horizontal",
				slide: function( event, ui ) {
					frameSlider = ui.value+"px";
					$('#' + this.id).prev().val(frameSlider);
					$( "#bg" ).css('padding',frameSlider);
               }
			});
}



