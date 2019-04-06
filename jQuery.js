 function updateoutput(){
		  $("iframe").contents ().find("html").html("<html><head><style type='text/css'>"+
		  $("#csspanel").val()+"</style></head><body>"+$("#htmlpanel").val()+"</body></html>");
		  //eval is used to evaluate js but let's say we send alert it will "eval" it for the whole 
		  //website but we want to it eval it in iframe. We don't eval js in ifraame using script
          //tag like we did for html and css thus we use this;		  
		  document.getElementById("outputpanel").contentWindow.eval($("#javascriptpanel").val());
		  
		  }
			$(".togglebutton").hover(function (){
			//instead of .css and changing back ground color we used add class and remove class
			//because this won't alter the pre-existing settings using css we set a prticular
		   //color that which gets layed on when hover is removed thus forcing that color to be layered
		   // insted of pre-existing color;	   
			$(this).addClass("highlightedbutton");
			}, function(){
			$(this).removeClass("highlightedbutton");
			});
			$(".togglebutton").click(function(){
			  //toggle class adds the class if it's not there and removes it if its there
			  $(this).toggleClass("active");
			  //the button remained grey we can't see if it turned blue when we clicked it
			  //thus we removed the highlighted class as well as we clicked so as to see the difference
			 $(this).removeClass("highlightedbutton");
             //IMPORTANT			 
             var panelId= $(this).attr("id")+"panel";	
			 //toggle between ids of pannel so they get displayed when clicked
			 //instead of toggle class we used just toggle inbuilt fxn in jq for toggling
			 //$("#"+ panelId).toggle();
			 $("#"+ panelId).toggleClass("hidden");
			 //width of pannels doesn't chnge accordingly so to be better and precise we will calculate the
			 //no. of class that are at present not hidden and divide width accordingly in them
			 var numberOfActivepannel=4-$(".hidden").length;
			 $(".panel").width(($(window).width()/numberOfActivepannel)-10);
			});
			$(".panel").height($(window).height()-$(".panel").height()-15);
			$(".panel").width(($(window).width()/2)-15);
			//wanna change the whole html of the page output as it gets changed, thus we use this to chnage value in the htmlpanel
			//$("iframe").contents().find("html").html($("#htmlpanel").val()); and since we want to change as soon as it gets updated
			//in the html pannel we use below function to do so;
			//update before anything and then after when changes are made
			updateoutput();
			$("textarea").on("change keyup paste",function(){
	           updateoutput();
			});