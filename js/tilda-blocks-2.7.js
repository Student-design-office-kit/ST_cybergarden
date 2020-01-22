function t228_highlight(){var url=window.location.href;var pathname=window.location.pathname;if(url.substr(url.length-1)=="/"){url=url.slice(0,-1)}
if(pathname.substr(pathname.length-1)=="/"){pathname=pathname.slice(0,-1)}
if(pathname.charAt(0)=="/"){pathname=pathname.slice(1)}
if(pathname==""){pathname="/"}
$(".t228__list_item a[href='"+url+"']").addClass("t-active");$(".t228__list_item a[href='"+url+"/']").addClass("t-active");$(".t228__list_item a[href='"+pathname+"']").addClass("t-active");$(".t228__list_item a[href='/"+pathname+"']").addClass("t-active");$(".t228__list_item a[href='"+pathname+"/']").addClass("t-active");$(".t228__list_item a[href='/"+pathname+"/']").addClass("t-active")}
function t228_checkAnchorLinks(recid){if($(window).width()>=960){var t228_navLinks=$("#rec"+recid+" .t228__list_item a:not(.tooltipstered)[href*='#']");if(t228_navLinks.length>0){setTimeout(function(){t228_catchScroll(t228_navLinks)},500)}}}
function t228_catchScroll(t228_navLinks){var t228_clickedSectionId=null,t228_sections=new Array(),t228_sectionIdTonavigationLink=[],t228_interval=100,t228_lastCall,t228_timeoutId;t228_navLinks=$(t228_navLinks.get().reverse());t228_navLinks.each(function(){var t228_cursection=t228_getSectionByHref($(this));if(typeof t228_cursection.attr("id")!="undefined"){t228_sections.push(t228_cursection)}
t228_sectionIdTonavigationLink[t228_cursection.attr("id")]=$(this)});t228_updateSectionsOffsets(t228_sections);t228_sections.sort(function(a,b){return b.attr("data-offset-top")-a.attr("data-offset-top")});$(window).bind('resize',t_throttle(function(){t228_updateSectionsOffsets(t228_sections)},200));$('.t228').bind('displayChanged',function(){t228_updateSectionsOffsets(t228_sections)});setInterval(function(){t228_updateSectionsOffsets(t228_sections)},5000);t228_highlightNavLinks(t228_navLinks,t228_sections,t228_sectionIdTonavigationLink,t228_clickedSectionId);t228_navLinks.click(function(){var t228_clickedSection=t228_getSectionByHref($(this));if(!$(this).hasClass("tooltipstered")&&typeof t228_clickedSection.attr("id")!="undefined"){t228_navLinks.removeClass('t-active');$(this).addClass('t-active');t228_clickedSectionId=t228_getSectionByHref($(this)).attr("id")}});$(window).scroll(function(){var t228_now=new Date().getTime();if(t228_lastCall&&t228_now<(t228_lastCall+t228_interval)){clearTimeout(t228_timeoutId);t228_timeoutId=setTimeout(function(){t228_lastCall=t228_now;t228_clickedSectionId=t228_highlightNavLinks(t228_navLinks,t228_sections,t228_sectionIdTonavigationLink,t228_clickedSectionId)},t228_interval-(t228_now-t228_lastCall))}else{t228_lastCall=t228_now;t228_clickedSectionId=t228_highlightNavLinks(t228_navLinks,t228_sections,t228_sectionIdTonavigationLink,t228_clickedSectionId)}})}
function t228_updateSectionsOffsets(sections){$(sections).each(function(){var t228_curSection=$(this);t228_curSection.attr("data-offset-top",t228_curSection.offset().top)})}
function t228_getSectionByHref(curlink){var t228_curLinkValue=curlink.attr("href").replace(/\s+/g,'');if(t228_curLinkValue[0]=='/'){t228_curLinkValue=t228_curLinkValue.substring(1)}
if(curlink.is('[href*="#rec"]')){return $(".r[id='"+t228_curLinkValue.substring(1)+"']")}else{return $(".r[data-record-type='215']").has("a[name='"+t228_curLinkValue.substring(1)+"']")}}
function t228_highlightNavLinks(t228_navLinks,t228_sections,t228_sectionIdTonavigationLink,t228_clickedSectionId){var t228_scrollPosition=$(window).scrollTop(),t228_valueToReturn=t228_clickedSectionId;if(t228_sections.length!=0&&t228_clickedSectionId==null&&t228_sections[t228_sections.length-1].attr("data-offset-top")>(t228_scrollPosition+300)){t228_navLinks.removeClass('t-active');return null}
$(t228_sections).each(function(e){var t228_curSection=$(this),t228_sectionTop=t228_curSection.attr("data-offset-top"),t228_id=t228_curSection.attr('id'),t228_navLink=t228_sectionIdTonavigationLink[t228_id];if(((t228_scrollPosition+300)>=t228_sectionTop)||(t228_sections[0].attr("id")==t228_id&&t228_scrollPosition>=$(document).height()-$(window).height())){if(t228_clickedSectionId==null&&!t228_navLink.hasClass('t-active')){t228_navLinks.removeClass('t-active');t228_navLink.addClass('t-active');t228_valueToReturn=null}else{if(t228_clickedSectionId!=null&&t228_id==t228_clickedSectionId){t228_valueToReturn=null}}
return!1}});return t228_valueToReturn}
function t228_setPath(){}
function t228_setWidth(recid){var window_width=$(window).width();if(window_width>980){$(".t228").each(function(){var el=$(this);var left_exist=el.find('.t228__leftcontainer').length;var left_w=el.find('.t228__leftcontainer').outerWidth(!0);var max_w=left_w;var right_exist=el.find('.t228__rightcontainer').length;var right_w=el.find('.t228__rightcontainer').outerWidth(!0);var items_align=el.attr('data-menu-items-align');if(left_w<right_w)max_w=right_w;max_w=Math.ceil(max_w);var center_w=0;el.find('.t228__centercontainer').find('li').each(function(){center_w+=$(this).outerWidth(!0)});var padd_w=40;var maincontainer_width=el.find(".t228__maincontainer").outerWidth(!0);if(maincontainer_width-max_w*2-padd_w*2>center_w+20){if(items_align=="center"||typeof items_align==="undefined"){el.find(".t228__leftside").css("min-width",max_w+"px");el.find(".t228__rightside").css("min-width",max_w+"px");el.find(".t228__list").removeClass("t228__list_hidden")}}else{el.find(".t228__leftside").css("min-width","");el.find(".t228__rightside").css("min-width","")}})}}
function t228_setBg(recid){var window_width=$(window).width();if(window_width>980){$(".t228").each(function(){var el=$(this);if(el.attr('data-bgcolor-setbyscript')=="yes"){var bgcolor=el.attr("data-bgcolor-rgba");el.css("background-color",bgcolor)}})}else{$(".t228").each(function(){var el=$(this);var bgcolor=el.attr("data-bgcolor-hex");el.css("background-color",bgcolor);el.attr("data-bgcolor-setbyscript","yes")})}}
function t228_appearMenu(recid){var window_width=$(window).width();if(window_width>980){$(".t228").each(function(){var el=$(this);var appearoffset=el.attr("data-appearoffset");if(appearoffset!=""){if(appearoffset.indexOf('vh')>-1){appearoffset=Math.floor((window.innerHeight*(parseInt(appearoffset)/100)))}
appearoffset=parseInt(appearoffset,10);if($(window).scrollTop()>=appearoffset){if(el.css('visibility')=='hidden'){el.finish();el.css("top","-50px");el.css("visibility","visible");var topoffset=el.data('top-offset');if(topoffset&&parseInt(topoffset)>0){el.animate({"opacity":"1","top":topoffset+"px"},200,function(){})}else{el.animate({"opacity":"1","top":"0px"},200,function(){})}}}else{el.stop();el.css("visibility","hidden");el.css("opacity","0")}}})}}
function t228_changebgopacitymenu(recid){var window_width=$(window).width();if(window_width>980){$(".t228").each(function(){var el=$(this);var bgcolor=el.attr("data-bgcolor-rgba");var bgcolor_afterscroll=el.attr("data-bgcolor-rgba-afterscroll");var bgopacityone=el.attr("data-bgopacity");var bgopacitytwo=el.attr("data-bgopacity-two");var menushadow=el.attr("data-menushadow");if(menushadow=='100'){var menushadowvalue=menushadow}else{var menushadowvalue='0.'+menushadow}
if($(window).scrollTop()>20){el.css("background-color",bgcolor_afterscroll);if(bgopacitytwo=='0'||(typeof menushadow=="undefined"&&menushadow==!1)){el.css("box-shadow","none")}else{el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+menushadowvalue+")")}}else{el.css("background-color",bgcolor);if(bgopacityone=='0.0'||(typeof menushadow=="undefined"&&menushadow==!1)){el.css("box-shadow","none")}else{el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+menushadowvalue+")")}}})}}
function t228_createMobileMenu(recid){var window_width=$(window).width(),el=$("#rec"+recid),menu=el.find(".t228"),burger=el.find(".t228__mobile");burger.click(function(e){menu.fadeToggle(300);$(this).toggleClass("t228_opened")})
$(window).bind('resize',t_throttle(function(){window_width=$(window).width();if(window_width>980){menu.fadeIn(0)}},200))}
function t412_unifyHeights(recid){var el=$("#rec"+recid);el.find('.t412__descr').css('height',"auto");$('#rec'+recid+' .t412 .t-container').each(function(){var highestBox2=0;$('.t412__descr',this).each(function(){if($(this).height()>highestBox2)highestBox2=$(this).height()});if($(window).width()>=960&&$(this).is(':visible')){$('.t412__descr',this).css('height',highestBox2)}else{$('.t412__descr',this).css('height',"auto")}});el.find('.t412__title').css('height',"auto");$('#rec'+recid+' .t412 .t-container').each(function(){var highestBox3=0;$('.t412__title',this).each(function(){if($(this).height()>highestBox3)highestBox3=$(this).height()});if($(window).width()>=960&&$(this).is(':visible')){$('.t412__title',this).css('height',highestBox3)}else{$('.t412__title',this).css('height',"auto")}});el.find('.t412__wrapper').css('height',"auto");$('#rec'+recid+' .t412 .t-container').each(function(){var highestBox=0;$('.t412__wrapper',this).each(function(){if($(this).height()>highestBox)highestBox=$(this).height()});if($(window).width()>=960&&$(this).is(':visible')){$('.t412__wrapper',this).css('height',highestBox)}else{$('.t412__wrapper',this).css('height',"auto")}})}
function t478_setHeight(recid){var el=$('#rec'+recid);var sizer=el.find('.t478__sizer');var height=sizer.height();var width=sizer.width();var ratio=width/height;var imgwrapper=el.find(".t478__blockimg, .t478__textwrapper");var imgwidth=imgwrapper.width();if(height!=$(window).height()){imgwrapper.css({'height':((width/ratio)+'px')})}}
function t678_onSuccess(t678_form){var t678_inputsWrapper=t678_form.find('.t-form__inputsbox');var t678_inputsHeight=t678_inputsWrapper.height();var t678_inputsOffset=t678_inputsWrapper.offset().top;var t678_inputsBottom=t678_inputsHeight+t678_inputsOffset;var t678_targetOffset=t678_form.find('.t-form__successbox').offset().top;if($(window).width()>960){var t678_target=t678_targetOffset-200}else{var t678_target=t678_targetOffset-100}
if(t678_targetOffset>$(window).scrollTop()||($(document).height()-t678_inputsBottom)<($(window).height()-100)){t678_inputsWrapper.addClass('t678__inputsbox_hidden');setTimeout(function(){if($(window).height()>$('.t-body').height()){$('.t-tildalabel').animate({opacity:0},50)}},300)}else{$('html, body').animate({scrollTop:t678_target},400);setTimeout(function(){t678_inputsWrapper.addClass('t678__inputsbox_hidden')},400)}
var successurl=t678_form.data('success-url');if(successurl&&successurl.length>0){setTimeout(function(){window.location.href=successurl},500)}}