// header //
var bio = {
	"name": "William Johnson  ",
	"role": "  Web Developer",
	"contacts": {
		"mobile": "314-737-2590",
		"email": "wjohnson777@gmail.com",
		"github": "wjohnson777",
		"location": "Missouri"
	},
	"welcomeMessage": "Hello!",
	"skills": ["HTML", "CSS", "JavaScript"],
	"biopic": "images/fry.jpg"
};

// work experience //
var work = {
	"jobs": [{
			"employer" = "AT&T",
			"title" = "Network Center Technician",
			"location" = "St. Louis, Missouri",
			"dates" = "May 2000 - Present",
			"description" "<ul><li>Provision and diagnose trouble of ADSL and ATM circuits on AT&T's broadband network.</li><ul>"
		}, {
			"employer" = "Surface Systems Inc",
			"title" = "Lead Systems Technician",
			"location" = "St. Louis, Missouri",
			"dates" = "1993 - 2000"
		}]
};

// projects //
var projects = {
	"projects": [{
		"title": "Portfolio",
		"dates": "April 2017",
		"description": "Portfolio - First Project for Front-End Web Developer",
		
	}]
};

// education //
var education = {
	"schools": [{
			"name": "Missouri Technical College";
			"city": "Saint Louis, MO, US";
			"degree": "Associates",
			"majors": "Electronics Engineering",
			"dates": 1989,
		}],
	'onlineCourses': [{
			"title": "Front-End Web Developer NanoDegree",
			"school": "Udacity",
			"dates": 2016,
		}],
};

// bio info //
bio.display = function () {
	'use strict'
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);

var formattedWelcomeMessage = HTMLWelcomeMessage.replace("%data%", bio.welcomeMessage);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGitHub);
$("#topContacts").append(formattedTwitter);
$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedGitHub);
$("#footerContacts").append(formattedTwitter);
$("#footerContacts").append(formattedBlog);    
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMessage);
$("#header").append(HTMLskillsStart);

// skills list //

	for (var skill=0;
         skill < bio.skills.length;
        skill++) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#header").append(formattedSkills);
    }
};

bio.display();

// work experience //
work.display = function() {
	'use strict'
	
	for (var job =0; 
		 job < work.jobs.length; 
		 job++) {
		$("#workExperience").append(HTMLworkStart);
		
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
	}
};

work.display();

// projects //
projects.display = function() {
    'use strict'
     
    for (var project=0; 
         project < projects.projects.length; 
         project++) {
        $("#projects").append(HTMLprojectStart);
        
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        
        var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images);
        $(".project-entry:last").append(formattedImages);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
    }
};

projects.display();

// education //
education.display = function() {
    'use strict'

    for (var sch=0; 
         sch < education.schools.length; 
         sch++) {
        $("#education").append(HTMLschoolStart);

        var formattedSchool = HTMLschoolName.replace("%data%", education.schools[sch].name);
        //formattedSchool = formattedSchool.replace("%logo%", education.schools[sch].logo);
        $(".education-entry:last").append(formattedSchool);
        
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[sch].dates);
        $(".education-entry:last").append(formattedDates);

        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[sch].degree);
        $(".education-entry:last").append(formattedDegree);

        var formattedMajors = HTMLschoolMajors.replace("%data%", education.schools[sch].majors);
        $(".education-entry:last").append(formattedMajors);
        
        var formattedUrl = HTMLschoolUrl.replace("%data%", education.schools[sch].url);
        $(".education-entry:last").append(formattedUrl);

        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[sch].location);
        $(".education-entry:last").append(formattedLocation);
    };
    $('#education').append(HTMLonlineClasses);

  education.onlineCourses.forEach(function(onlineCourse) {
    $('#education').append(HTMLschoolStart);    

    var formattedTitle = HTMLonlineTitle.replace('%data%',onlineCourse.title);
    var formattedSchool = HTMLonlineSchool.replace('%data%',onlineCourse.school);
    var formattedDates = HTMLonlineDates.replace('%data%',onlineCourse.dates);
    var formattedUrl = HTMLonlineURL.replace('%data%',onlineCourse.url);    
    $('.education-entry:last').append(formattedTitle + formattedSchool + formattedDates + formattedUrl);
  });
};

education.display();

// Google Map //
$("#mapDiv").append(googleMap);


}
};