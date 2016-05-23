// TODO: SKILLS FOR BIO
// TODO: FINISH PROJECT DATES AND IMAGES
// TODO: DO I NEED BIOPIC?

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
    "github": "https://github.com/brianalbin3/",
    "location": "Austin, TX"
  },    
  "skills": [],
  "bioPic": "images/brianalbin.jpg"
};

var education = {
  "schools": [
    { "name": "Frostburg State University", location: "Frostburg, MD", "degree": "B.S.", "majors": ["Computer Science"], "dates": "2011 - 2014", "url": "www.frostburg.edu" },
    { "name": "Howard Community College", location: "Columbia, MD", "degree": "A.S.", "majors": ["Computer Science"], "dates": "2007 - 2010", "url": "www.howardcc.edu" }
  ],
  "onlineCourses": [
    { "title": "Front-End Web Developer", "school": "Udacity", "dates": "May 2016 - Present", "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001" }
  ]
}
