
function qsent() {
	if (document.getElementById("formName").value == ""
			|| document.getElementById("formEmail").value == ""
			|| document.getElementById("formQuestion").value == "") {
		alert("Please enter a name an email address and a question");
		return false;
	} else {
		alert("Thank you. Your question has been sent");
		return true;
	}
}

function imageRotate() {
	var bannerImg = new Array();            
	bannerImg[0]="steel1.jpg";
	bannerImg[1]="steel2.jpg";
	bannerImg[2]="steel3.jpg";
	bannerImg[3]="steel4.jpg";
	bannerImg[4]="steel5.jpg";
	bannerImg[5]="steel6.jpg";
	bannerImg[6]="steel7.jpg";
	bannerImg[7]="steel8.jpg";            
	
	var newBanner = 0;
	var totalBan = bannerImg.length;
		
}

function countAnchor() {
	var rob = document.anchors.length;
	alert("Amount of anchors is " + rob);
}


		