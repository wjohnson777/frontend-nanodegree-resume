/*
This is empty on purpose! Your code to build the resume will go here.
 */

//$("#main").append("William Johnson");

var name = "William Johnson";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
	"name": "William Johnson",
	"age": 49,
	"role": "Web Developer",
	"contacts": {
		"mobile": "555-555-5555",
		"email": "wjohnson777@gmail.com",
		"github": "wjohnson777@gmail.com",
		"location": "Missouri"
	},
	"welcomeMessage": "Hello!",
	"skills": ["HTML", "CSS", "JavaScript"],
	"biopic": "images/fry.jpg"
};

$("#main").append(bio.name);
$("#main").append(bio.age);

if(bio.skills.length > 0) {

	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1];
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2];
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3];
	$("#skills").append(formattedSkill);
}

var work = {
	"jobs": [{
			"employer" = "AT&T",
			"title" = "Network Center Technician",
			"location" = "St. Louis, Missouri",
			"dates" = "May 2000 - Present",
		}, {
			"employer" = "Surface Systems Inc",
			"title" = "Lead Systems Technician",
			"location" = "St. Louis, Missouri",
			"dates" = "1993 - 2000"
		}
	]
};

var education = {
	"schools": [{
			"name": "Missouri Technical College";
			"city": "Saint Louis, MO, US";
			"degree": "Associates",
			"majors": "Electronics Engineering",
			"dates": 1989,
		}
	],
	"onlineCourses": [{
			"title": "Front-End Web Developer NanoDegree",
			"school": "Udacity",
			"dates": 2016,
		}
	],
};

var projects = {};

$("#main").append(work["position"]);
$("#main").append(education.name);

work.display = function() {
	
	for (var job = 0; job < work.jobs.length; job++) {
		$("#workExperience").append(HTMLworkStart);
		
		var formattedEmployer = HTMLworkEmployer.replace("%data", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
	}
}
