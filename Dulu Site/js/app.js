// get like button change image
function changeImage(x) {
	// body...

	/*
	* Page one logic
	*
	*/
	if(x == 'like'){
		window.location.href = "experience.html";
	}
	
	if(x == 'dislike'){
		window.location.href = "experience.html";
	}



	/*
	* Page 2 logic
	*
	*/
	if(x == 'thank-you'){
		window.location.href = "final.html";
	}

	if(x == 'next'){
		window.location.href = "get-contact.html";		
	}


	/*
	* Page 3 logic
	*
	*/
	if(x == 'submit'){
		window.location.href = "experience.html";
	}

	if(x == 'menu'){
		window.location.href = "experience.html";		
	}

	/*
	* Page 4 logic
	*
	*/
	if(x == 'skip'){
		window.location.href = "experience.html";
	}
	if(x == 'like'){
		window.location.href = "final.html"
	}
}

// rate employee section
function rateEmployee(){
	// alert('rating employeer');
	window.location.href = 'rate-employee.html';
}

// rate performance
function ratePerformance(){
	window.location.href = 'rate-performance.html';
}

// drop comments
function dropComment(){
	window.location.href = 'make-comment.html';
}

// carts
function shoppingCart(){
	window.location.href = 'shopping-cart.html';
}

// record 
function camRecording(){
	window.location.href = 'cam-recording.html';
}

// book appointment 
function bookAppointment(){
	window.location.href = 'appointment.html';
}

// Skip and Back Driection flow
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}



function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;

}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


// write compl
function changeText(x) {
	// body...	

	if(x == 'suggestion'){
		$('.gg').html(`
			Write a suggestion
		`);
	}

	if(x == 'complaint'){
		$('.gg').html(`
			Write a complaint
		`);
	}

	if(x == 'compliment'){
		$('.gg').html(`
			Write a compliment
		`);
	}
}

