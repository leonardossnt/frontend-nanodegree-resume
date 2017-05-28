var bio = {
	name: "Leonardo Sequeira Santana",
	role: "Full Stack Web Developer",
	contacts: {
		mobile: "+55 (92) 98198-5543",
		email: "leonardossnt@gmail.com",
		github: "leonardossnt",
		location: "Manaus"
	},
	picture: "https://api.adorable.io/avatars/160/leonardossnt%40gmail.com",
	welcome: "Welcome to my resumee!",
	skills: ['JavaScript', 'Android', 'Git', 'Node.js', 'Linux']
}

var work = {
	"jobs": [
		{
			"employer": "SIDIA",
			"title": "Software Engineer",
			"location": "Manaus",
			"dates": "2015-",
			"description": "I work with bugfixing and maintainance of Android Applications and with Samsung's Mobile DTV stack, from application to native Android"
		},
		{
			"employer": "CETELI",
			"title": "Intern",
			"location": "Manaus",
			"dates": "2014",
			"description": "I worked with web development using PHP and Yii2 framework"
		},
		{
			"employer": "MAP Cardoso",
			"title": "Intern",
			"location": "Manaus",
			"dates": "2012-2013",
			"description": "I worked with printed circuit board and embedded software for automation"
		}
	]
};

var edu = {
	"schools": [
	{
		"school": "Universidade Federal do Amazonas", 
		"major": "Computer Engineering",
		"years": "2009-2015",
		"city": "Manaus"
	}
	],
	"onlineCourses": [
	{
		"school": "Udacity",
		"title": "JavaScript Basics",
		"date": "2017",
		"city": "The Web"
	}
	]
}

function displayHeader() {
	var headerName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").append(headerName);

	var headerRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").append(headerRole);

	var headerPic = HTMLbioPic.replace("%data%", bio.picture);
	$("#header").append(headerPic);	

	$("#header").append('<ul id="contacts"></ul>');

	for (var prop in bio.contacts) {
		var headerContacts = HTMLcontactGeneric.replace("%contact%", prop).replace("%data%", bio.contacts[prop]);
		$("#contacts").append(headerContacts);
	}

	displaySkills();
}

function displaySkills() {
	if (bio.skills) {
		$('#header').append(HTMLskillsStart);

		for (i in bio.skills) {
			var formattedSkills = HTMLskills.replace('%data%', bio.skills[i]);
			$('#skills').append(formattedSkills);
		}
	}
}

function displayWork() {
	for(job in work.jobs) {
		$('#workExperience').append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

		var formattedComplete = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedComplete);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

displayWork();
displayHeader();


function logClicks(x, y) {
	console.log("Clicked on page! (" + x + "," + y + ")");
}

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x, y);
});

function locationizer(work_obj) {
	var locations = [];

	for (i in work_obj.jobs) {
		locations.push( work_obj.jobs[i].location );
	}

	return locations;
}

console.log(locationizer(work));

