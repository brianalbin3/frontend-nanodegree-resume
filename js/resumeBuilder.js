// TODO: FINISH PROJECT DATES AND IMAGES

var work = {
  "jobs": [
    { "employer": "Northrop Grumman", "title": "Software Engineer", "location": "Melbourne, FL", "dates": "Aug 2015 - Present", "description": "Created a web application to transform user input into an XML file using  Java, JSP, JAXB, HTML, 	CSS, and JavaScript. Built a system tray icon that scans a folder, analyzes the files in the folder, and 	sends them across the network. Integrated an existing application that retrieves data from SharePoint and populates a RAM repository into an existing architecture using Java. Created a prototype web application that parses an excel file for network connection data and uses the data to create a graph that displays network nodes and connections using Java, JSP, JavaScript, HTML and the vis.js library." },
    { "employer": "Textron Systems", "title": "Software Engineer", "location": "Cockeysville, MD", "dates": "Jun 2014 - Jun 2015", "description": "Created dialogs for the interface for the ground control system of the Shadow unmanned aircraft in Qt. Modified the Ground Control Station to interface with the Shadow to accommodate a new payload. Performed network programming on the RQ-7 Bv2 Shadow TUAV in order to pass messages between the VSM/Shadow/VCS-4586. Refactored code to be more maintainable using real-time design patterns. Created diagrams using Enterprise Architect. Created a visual automation testing library to automate GUI testing of the Ground Control Station. All development was done on Linux (Centos/Red Hat Enterprise Linux/Montavista). Fixed bugs during integration." },
    { "employer": "Kratos Defense", "title": "Programmer Intern", "location": "Lanham, MD", "dates": "Jul 2013 - Aug 2013", "description": "Assisted in the development of a web interface for spacecraft ground control systems using Java.  Created a web-based inventory management system using PHP, HTML, JavaScript, CSS, and SQL." },
    { "employer": "Social Security Administration", "title": "Student Intern Programmer", "location": "Baltimore, MD", "dates": "Jun 2010 - Aug 2010", "description": "Assisted in designing and programming internal websites. Responsibilities included coding web site modules, assisting in design document creation, and linking of government websites to outside applications. I used JavaScript, HTML, CSS, PHP, AJAX, XML, LDAP and MySQL during this internship" },
    { "employer": "Social Security Administration", "title": "Student Intern Programmer", "location": "Baltimore, MD", "dates": "Jun 2009 - Aug 2009", "description": "Assisted in the linking of biometric security software to existing government systems in order to protect SSA assets. Assisted in designing and programming internal websites. I used JavaScript, HTML, CSS, PHP, MySQL, and C during this internship." }
  ]
};

var projects = {
  "projects": [
    { "title": "Master-Sword: Source",  "dates": "", "description": "Master-Sword: Source is a mod created using the Source Engine by a small team including myself. Although the mod was never finished, a number of features were implemented including multiple enemies, a GUI based heads up display, melee weapons with advanced collision detection, and a character selection menu. The project was written entirely in C++. I was the team leader as well as a programmer. The project team consisted of programmers, level artists, musicians, character modeler designers, and an animate. The mod can be seen at http://www.moddb.com/mods/master-sword-source. Unfortunately, all of the code was lost except for one image button class I posted on a developer wiki.", images: [] },
    { "title": "IRC Bot",  "dates": "", "description": "The irc bot was written in Java and would reply to users in an IRC channel when they said certain things.", images: [] },
    { "title": "Portfolio Web Site",  "dates": "May 2015", "description": "I worked on a portfolio website which showcased projects I worked on. The web site made use of responsive design to work well on desktop computers, tablet computers, and mobile phones.", images: [] },
  ]
};

var bio = {
  "name": "Brian Albin",
  "role" : "Mobile Developer",
  "welcomeMessage": "Welcome to my resume page!",
  "contacts": {
    "mobile": "410-917-6440",
    "email": "brianalbin3@gmail.com",
    "github": "brianalbin3",
    "linkedin": "https://www.linkedin.com/in/brian-albin-15666273",
    "location": "Austin, TX"
  },
  "skills": ["Java", "HTML5", "CSS3", "SQL", "JavaScript", "jQuery", "Bootstrap", "Linux", "Design Patterns", "OOP", "Git/Github", "Mercurial", "SVN", "C/C++", "Jython"],
  "biopic": "images/brianalbin.jpg"
};

var education = {
  "schools": [
    { "name": "Frostburg State University", location: "Frostburg, MD", "degree": "B.S.", "majors": ["Computer Science"], "dates": "2011 - 2014", "url": "www.frostburg.edu" },
    { "name": "Howard Community College", location: "Columbia, MD", "degree": "A.S.", "majors": ["Computer Science"], "dates": "2007 - 2010", "url": "www.howardcc.edu" }
  ],
  "onlineCourses": [
    { "title": "Front-End Web Developer", "school": "Udacity", "dates": "May 2016 - Present", "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001" }
  ]
};

bio.display = function() {
  var formattedRole =  HTMLheaderRole.replace("%data%", this.role);
  $("#header").prepend( formattedRole );
	
  var formattedName = HTMLheaderName.replace("%data%", this.name);
  $("#header").prepend( formattedName );
  
  var formattedMobile = HTMLmobile.replace("%data%", this.contacts.mobile);
  $("#topContacts").append(formattedMobile);
  
  var formattedEmail = HTMLemail.replace("%data%", this.contacts.email);
  $("#topContacts").append(formattedEmail);
  
  var formattedGithub = HTMLgithub.replace("%data%", this.contacts.github);
  $("#topContacts").append(formattedGithub);
  
  var formattedLinkedin = HTMLcontactGeneric.replace("%data%", this.contacts.linkedin).replace("%contact%", "linkedin");
  $("#topContacts").append(formattedLinkedin);
  
  var formattedLocation = HTMLlocation.replace("%data%", this.contacts.location);
  $("#topContacts").append(formattedLocation);
  
  var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
  $("#header").append(formattedWelcomeMessage);	
  
  var formattedBiopic = HTMLbioPic.replace("%data%", this.biopic);
  $("#header").append(formattedBiopic);
  
  if ( this.skills.length > 0 ) {
    $("#header").append(HTMLskillsStart);

    for (var i = 0; i < this.skills.length; i++ ) {
      var currSkill = this.skills[i];
      var formattedSkill = HTMLskills.replace("%data%", currSkill);
      $("#skills").append( formattedSkill )
    }
  }
}

work.display = function() {
  for (var i = 0; i < this.jobs.length; i++ ) {
    $("#workExperience").append(HTMLworkStart);

    var job = this.jobs[i];

    var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
    var employerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(employerTitle);
    
    var formattedDates = HTMLworkDates.replace("%data%", job.dates);
    $(".work-entry:last").append(formattedDates);
    
    var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
    $(".work.entry:last").append(formattedLocation)
    
    var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
    $(".work-entry:last").append(formattedDescription); 
  }
}

projects.display = function() {
  for (var i = 0; i < this.projects.length; i++ ) {
    $("#projects").append(HTMLprojectStart);
    
    var project = this.projects[i];
    
    var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
    $(".project-entry:last").append(formattedTitle);
    
    var formattedDates = HTMLprojectDates.replace("%data%", project.dates );
    $(".project-entry:last").append(formattedDates);
    
    var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
    $(".project-entry:last").append(formattedDescription);
    
    //TODO: Test when I have project Images
    for (var j = 0; j < project.images.length; j++) {
        var image = project.images[i];
    	var formattedPicture = HTMLprojectImage.replace("%data%", image );
    	$(".project-entry:last").append(formattedPicture);
    }
  }
}


bio.display();
work.display();
projects.display();

function inName(name) {
	var nameParts = name.trim().split(" ");
	
	var firstName = nameParts[0];
	var lastName = nameParts[1];
	
	var formattedFirstName = firstName.toLowerCase();
	var formattedFirstName = firstName.charAt(0).toUpperCase() + formattedFirstName.slice(1);
	
	var formattedLastName = lastName.toUpperCase();
	
	return formattedFirstName + " " + formattedLastName;
}

//TODO: PUT THIS IN A FUNCTION?
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);


//TODO: STYLE CSS
//TODO: d3js.org to add a neat chart
//
