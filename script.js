/********************************************Libraries**********************************************************/


require.config({
  paths: {
    'jQuery320': 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min' // Add the librarie
  }
});

require(['jQuery320'], function () {                                   // Call the librarie

/*
Sample:

require.config({
  paths: {
    'Name': 'URL'
  }
});

require(['Name'], function (Name) {

/**********CODE************/


/*
})();                //This brackets has to be at the end of your file
*/

/************************************************Variables***********************************************************/

//Sample for using KNIME Data in the Node

 //var location = knimeDataTable.getColumn(0);


/***************************************************HTML*********************************************************/
//$(document.body).append(' "HTML" ')




/*Sample for generating HTML with jQuery*/

  $(document.body).append('<div class="card"><h1>Hello World!</h1>'+                                    //Text
  '<button>Please Click Me!</button>'+                                              // Sample for a Button ELement 
  '<div class="img"><a href="https://github.com/TarGue/GenericJavaScriptView-developing-files" target="_blank" ><img src="https://cdn0.iconfinder.com/data/icons/social-icons-20/200/github-icon-128.png"></a></div></div>' // Image

  );
  
/***********************************************JavaScript****************************************************/
 
 


/*Sample for jQuery function*/
$(document).ready(function(){
    $("button").click(function(){ 
        $("div.img").animate({        
            height: 'toggle'
        });
    });
});

//Dont forget the closing brackets of the require function
});