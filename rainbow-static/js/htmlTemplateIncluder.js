var hostName;

var intervalId;
var port=":8080";
function emptyAllSections(){
	$("#welcome").empty();
	$("#calllogoinallpages").empty();
	$("#homepage").empty();
	if(intervalId!=undefined)
	clearInterval(intervalId);
}
function preLoadHeader() {	
	var url = "http://" + hostName  + "/header.html";
	$("#header").load(url);
}

$(document).ready(function() {
	hostName = window.location.hostname;
	if("https"==window.location.protocol)
		port="";
	preLoadHeader();
	homePage();
	callIconLoader();
	loadFooter();

});

function loadFooter() {
	var url = "http://" + hostName  + "/footer.html";
	$("#homepage").empty();
	$("#footer").load(url);
}
function callIconLoader() {
	var url = "http://" + hostName  + "/calllogoinallpages.html";
	$("#homepage").empty();
	$("#calllogoinallpages").load(url);
}

function homePage() {
	emptyAllSections();
	removeAll();
	var url = "http://" + hostName  + "/homepage.html";
	$("#welcome").load(url,function(){
		loadHomePageSlider();
	});
	active("#homeLink");
}

function loanProducts() {
	emptyAllSections();
	removeAll();
	active("#loanProduct");
}

function loadCalculator() {
	emptyAllSections();
	removeAll();
	callIconLoader();
	var url = "http://" + hostName  + "/emiCalculator.html";
	$("#welcome").load(url);	
	active("#calculatorLink");
}

function loadContactUs() {
	emptyAllSections();
	removeAll();
	callIconLoader();
	var url = "http://" + hostName  + "/contactUSForm.html";
	$("#welcome").load(url);
	active("#contactUsLink");
}
function loadMap() {
	emptyAllSections();
	removeAll();
	callIconLoader();
	var url = "http://" + hostName  + "/map.html";
	$("#welcome").load(url);
	active("#mapLink");
}


function loadFaq() {
	emptyAllSections();
	removeAll();
	callIconLoader();
	var url = "http://" + hostName  + "/faq.html";
	$("#welcome").load(url);
	active("#faqLink");
}
function loadAboutUs() {
	emptyAllSections();
	removeAll();
	callIconLoader();
	var url = "http://" + hostName  + "/aboutUs.html";
	$("#welcome").load(url);
	active("#aboutUsLink");
}
function loadCheckListQuestion() {
	emptyAllSections();
	removeAll();
	callIconLoader();
	var url = "http://" + hostName  + "/checkListQuestion.html";
	$("#welcome").load(url);
	active("#checkListQuestionLink");
}
function loadShortTermLoan(){
	emptyAllSections();
	removeAll();
	$("#calllogoinallpages").load("http://" + hostName  + "/shortTermEmiCalculator.html",function(){
		$("#rateOfInterest").hide();
		var output = document.getElementById("rate1");
		output.value = 42;
		lastValid = document.getElementById("displayLoanAmount").value;
		lastTenor = document.getElementById("displayRepaymentmonth").value;
		calculteEMI();
	});
	var url = "http://" + hostName  + "/shortTermLoan.html";
	$("#welcome").load("http://" + hostName  + "/autoSliderShortTermLoan.html",function(){
		$("#slideshow > div:gt(0)").hide();
		intervalId=setInterval(function() { 
		  $('#slideshow > div:first')
		    .fadeOut(2000)
		    .next()
		    .fadeIn(2000)
		    .end()
		    .appendTo('#slideshow');
		},  5000);
		active("#shortTermLoan");
	});
	$("#homepage").load(url);
	
}
function loadLongTermLoan(){
	emptyAllSections();
	removeAll();
	$("#calllogoinallpages").load("http://" + hostName  + "/longTermEmiCalculator.html",function(){
		$("#rateOfInterest").hide();
		var output = document.getElementById("rate1");
		output.value = 42;
		lastValid = document.getElementById("displayLoanAmount").value;
		lastTenor = document.getElementById("displayRepaymentmonth").value;
		calculteEMI();
	});
	var url = "http://" + hostName  + "/longTermLoan.html";
	$("#welcome").load("http://" + hostName  + "/autoSliderLongTermLoan.html",function(){
		$("#slideshow > div:gt(0)").hide();
		intervalId=setInterval(function() { 
		  $('#slideshow > div:first')
		    .fadeOut(2000)
		    .next()
		    .fadeIn(2000)
		    .end()
		    .appendTo('#slideshow');
		},  5000);
		active("#longTermLoan");
	});
	$("#homepage").load(url);
	
}
function loadMediumTermLoan(){
	emptyAllSections();
	removeAll();
	$("#calllogoinallpages").load("http://" + hostName  + "/mediumTermEmiCalculator.html",function(){
		$("#rateOfInterest").hide();
		var output = document.getElementById("rate1");
		output.value = 42;
		lastValid = document.getElementById("displayLoanAmount").value;
		lastTenor = document.getElementById("displayRepaymentmonth").value;
		calculteEMI();
	});
	var url = "http://" + hostName  + "/mediumTermLoan.html";
	$("#welcome").load("http://" + hostName  + "/autoSliderMediumTermLoan.html",function(){
		$("#slideshow > div:gt(0)").hide();

		intervalId=setInterval(function() { 
		  $('#slideshow > div:first')
		    .fadeOut(2000)
		    .next()
		    .fadeIn(2000)
		    .end()
		    .appendTo('#slideshow');
		},  5000);
		active("#mediumTermLoan");
	});
	$("#homepage").load(url);
	
	
}


function loadHomePageSlider(){
	$("#homeSlider").load("http://" + hostName  + "/autoSliderHomePage.html",function(){
		$("#slideshow > div:gt(0)").hide();
		intervalId=setInterval(function() { 
		  $('#slideshow > div:first')
		    .fadeOut(2000)
		    .next()
		    .fadeIn(2000)
		    .end()
		    .appendTo('#slideshow');
		},  5000);
		active("#shortTermLoan");
	});
}