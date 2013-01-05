/**
 * 
 */

var counter =1;
// Start the refreshing process
window.onload = getQuotes(); {
};


function getQuotes() {

	var xmlhttp;	
	var txt,x,xx;	
	
	
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			
			  {
				  		   
				    xmlDoc=xmlhttp.responseXML;
				    
				    txt="";
				    
				    x=xmlDoc.getElementsByTagName("quote");
				    
				    
				    xx=x[counter].getElementsByTagName("words");
			        {
			        try
			          {
			        	 txt=txt +"<p class='quote'>" + xx[0].firstChild.nodeValue + "</p>";
			          
			          }
			        catch (er)
			          {
			        	alert("error getting author");
			          }
			        }
			    xx=x[counter].getElementsByTagName("author");
			      {
			        try
			          {
			        	 txt=txt +"<p class='author'>" + xx[0].firstChild.nodeValue + "</p>";			          
			          }
			        catch (er)
			          {
			          alert("error getting author");
			          }
			        }
				    
				    				    				    				    				    				    				    				    				    				    				   				    
				    document.getElementById("quotes").innerHTML=txt;
				    
				    if (counter < 4){
				    	counter++;
				    } else{
				    	counter=1;
				    }
				    	
				    };
				  };			
			
	};

	xmlhttp.open("GET", "quoter.xml", true);
	xmlhttp.send();
	setTimeout('getQuotes()', 5 * 1000);
};
