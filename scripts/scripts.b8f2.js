function CustomAlert(){this.render=function(a){var b=window.innerWidth,c=window.innerHeight,d=document.getElementById("dialogoverlay"),e=document.getElementById("dialogbox");d.style.display="block",d.style.height=c+"px",e.style.left=b/2-130+"px",e.style.top="100px",e.style.display="block",document.getElementById("dialogboxhead").innerHTML="Email Author",document.getElementById("dialogboxbody").innerHTML=a,document.getElementById("dialogboxfoot").innerHTML='<button onclick="Alert.ok()">OK</button>'},this.ok=function(){document.getElementById("dialogbox").style.display="none",document.getElementById("dialogoverlay").style.display="none"}}function CustomConfirm(){this.render=function(a,b,c){var d=window.innerWidth,e=window.innerHeight,f=document.getElementById("dialogoverlay"),g=document.getElementById("dialogbox");f.style.display="block",f.style.height=e+"px",g.style.left=d/2-130+"px",g.style.top="100px",g.style.display="block",document.getElementById("dialogboxhead").innerHTML="Confirm that action",document.getElementById("dialogboxbody").innerHTML=a,document.getElementById("dialogboxfoot").innerHTML="<button onclick=\"Confirm.yes('"+b+"','"+c+'\')">Yes</button> <button onclick="Confirm.no()">No</button>'},this.no=function(){document.getElementById("dialogbox").style.display="none",document.getElementById("dialogoverlay").style.display="none"},this.yes=function(a,b){"delete_post"==a&&deletePost(b),document.getElementById("dialogbox").style.display="none",document.getElementById("dialogoverlay").style.display="none"}}function CustomPrompt(){this.render=function(a,b){var c=window.innerWidth,d=window.innerHeight,e=document.getElementById("dialogoverlay"),f=document.getElementById("dialogbox");e.style.display="block",e.style.height=d+"px",f.style.left=c/2-130+"px",f.style.top="100px",f.style.display="block",document.getElementById("dialogboxhead").innerHTML="A value is required",document.getElementById("dialogboxbody").innerHTML=a,document.getElementById("dialogboxbody").innerHTML+='<br><input id="prompt_value1">',document.getElementById("dialogboxfoot").innerHTML="<button onclick=\"Prompt.ok('"+b+'\')">OK</button> <button onclick="Prompt.cancel()">Cancel</button>'},this.cancel=function(){document.getElementById("dialogbox").style.display="none",document.getElementById("dialogoverlay").style.display="none"},this.ok=function(a){var b=document.getElementById("prompt_value1").value;window[a](b),document.getElementById("dialogbox").style.display="none",document.getElementById("dialogoverlay").style.display="none"}}var Alert=new CustomAlert,Confirm=new CustomConfirm,Prompt=new CustomPrompt,sectionHeight=function(){var a=$(window).height(),b=$("section").css("height","auto");if(b.outerHeight(!0)<a){var c=b.outerHeight(!0)-b.height();b.height(a-c-20)}else b.css("height","auto")};$(window).resize(sectionHeight),$(document).ready(function(){$("section h1, section h2").each(function(){$("nav ul").append("<li class='tag-"+this.nodeName.toLowerCase()+"'><a href='#"+$(this).text().toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,"")+"'>"+$(this).text()+"</a></li>"),$(this).attr("id",$(this).text().toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,"")),$("nav ul li:first-child a").parent().addClass("active")}),$("nav ul li").on("click","a",function(a){var b=$($(this).attr("href")).offset().top-190;$("html, body").animate({scrollTop:b},400),$("nav ul li a").parent().removeClass("active"),$(this).parent().addClass("active"),a.preventDefault()}),sectionHeight(),$("img").load(sectionHeight),$(".contact").click(function(){Alert.render("Send comments to lex(dot)sheehan(at)gmail(dot)com")})});