// hey buddy, what are you doing checking around in MY JAVASCRIPT? Just kidding, take a look and see how much of a bad coder I am


var body = document.querySelector("body");
var newIdeaBtn = document.querySelector("#newIdeaBtn");
var banner = document.querySelector("#banner");
var firstClick = true;

newIdeaBtn.addEventListener("click", function() {

	if (firstClick==true) {
		log.innerHTML="";
		firstClick = false;
	}

	generateIdea(0);

	label.classList.add("scale-anim");

	setTimeout(function(){
	 	label.classList.remove("scale-anim")
	}, 200);

});

var settingsPanel = document.querySelector("#settings");
var settingsBtn = document.querySelector("#settingsBtn");
var settingsOpen = false;

settingsBtn.addEventListener("click", function() {
	if (settingsOpen == false) {
		settingsPanel.style.display = "block";
		settingsOpen == true;
	}
});

var closeSettingsBtn = document.querySelector("#closeSettingsBtn");
var closeSettingsIcon = document.querySelector("#closeSettingsIcon");

closeSettingsBtn.addEventListener("click", function() {
	handleSettings();
});

closeSettingsIcon.addEventListener("click", function() {
	handleSettings();
});

var logPanel = document.querySelector("#logPanel");
var logBtn = document.querySelector("#logBtn");
var log = document.querySelector("#log");
var logOpen = false;

logBtn.addEventListener("click", function() {
	if (logOpen == false) {
		logPanel.style.display = "block";
		logOpen == true;
	}
});

var closeLogBtn = document.querySelector("#closeLogBtn");
var closeLogIcon = document.querySelector("#closeLogIcon");

closeLogBtn.addEventListener("click", function() {
	handleLog();
});

closeLogIcon.addEventListener("click", function() {
	handleLog();
});

var objects = [];

function Object(singular,plural) {
	this.s = singular;
	this.p = plural;
}
function addObjects() {
	objects.push(new Object( "underwear" , "underwear" ));
	objects.push(new Object( "a car" , "cars"));
	objects.push(new Object( "a phone case" , "phone cases" ));
	objects.push(new Object( "a TV" , "TVs" ));
	objects.push(new Object( "a pair of headphones" , "headphones" ));
	objects.push(new Object( "a pair of slippers" , "slippers" ));
	objects.push(new Object( "a marker" , "markers" ));
	objects.push(new Object( "a washing machine" , "washing machines" ));
	objects.push(new Object( "a book" , "books" ));
	objects.push(new Object( "a ring" , "rings" ));
	objects.push(new Object( "a lamp" , "lamps" ));
	objects.push(new Object( "deodorant" , "deodorant" ));
	objects.push(new Object( "a table" , "tables" ));
	objects.push(new Object( "nail clippers" , "nail clippers" ));
	objects.push(new Object( "shoelaces" , "shoelaces" ));
	objects.push(new Object( "a USB cord" , "USB cords" ));
	objects.push(new Object( "pants" , "pants" ));
	objects.push(new Object( "a shirt" , "shirts" ));
	objects.push(new Object( "a hat" , "hats" ));
	objects.push(new Object( "shoes" , "shoes" ));
	objects.push(new Object( "a chair" , "chairs" ));
	objects.push(new Object( "a purse" , "purses" ));
	objects.push(new Object( "a cup" , "cups" ));
	objects.push(new Object( "a shovel" , "shovels" ));
	objects.push(new Object( "a ladder" , "ladders" ));
	objects.push(new Object( "a bed" , "beds" ));
	objects.push(new Object( "shampoo" , "shampoo" ));
	objects.push(new Object( "a thermostat" , "thermostats" ));
	objects.push(new Object( "a phone" , "phones" ));
	objects.push(new Object( "speakers" , "speakers" ));
	objects.push(new Object( "a pillow" , "pillows" ));
	objects.push(new Object( "a watch" , "watches" ));
	objects.push(new Object( "a fridge" , "fridges" ));
	objects.push(new Object( "a boat" , "boats" ));
	objects.push(new Object( "a wallet" , "wallets" ));
	objects.push(new Object( "a camera" , "cameras" ));
	objects.push(new Object( "a toothbrush" , "toothbrushes" ));
	objects.push(new Object( "a mirror" , "mirrors" ));
	objects.push(new Object( "a spoon" , "spoons" ));
	objects.push(new Object( "a fork" , "forks" ));
	objects.push(new Object( "a knife" , "knives" ));
	objects.push(new Object( "gloves" , "gloves" ));
	objects.push(new Object( "a charger" , "chargers" ));
	objects.push(new Object( "a window" , "windows" ));
	objects.push(new Object( "an ATM" , "ATMs" ));
	objects.push(new Object( "a USB drive" , "USB drives" ));
	objects.push(new Object( "a VR headset" , "VR headsets" ));
	objects.push(new Object( "a drone" , "drones" ));
	objects.push(new Object( "a game console" , "game consoles" ));
	objects.push(new Object( "a water bottle" , "water bottles" ));
	objects.push(new Object( "a piano" , "pianos" ));
	objects.push(new Object( "a toilet" , "toilets" ));
	objects.push(new Object( "a dishwasher" , "dishwashers" ));
	objects.push(new Object( "gum" , "gum" ));
	objects.push(new Object( "a dildo" , "dildos" ));
	objects.push(new Object( "an umbrella" , "umbrellas" ));
	objects.push(new Object( "a pen" , "pens" ));
	objects.push(new Object( "a pencil" , "pencils" ));
	objects.push(new Object( "a lighter" , "lighters" ));
	objects.push(new Object( "a bong" , "bongs" ));
	objects.push(new Object( "a pair of scissors" , "scissors" ));
	objects.push(new Object( "a laptop" , "laptops" ));
	objects.push(new Object( "a tablet" , "tablets" ));
	objects.push(new Object( "a blanket" , "blankets" ));
	objects.push(new Object( "a light bulb" , "light bulbs" ));
	objects.push(new Object( "an alarm clock" , "alarm clocks" ));
	objects.push(new Object( "wine" , "wine" ));
	objects.push(new Object( "a bike" , "bikes" ));
	objects.push(new Object( "a pair of glasses" , "glasses" ));
	objects.push(new Object( "a microwave" , "microwaves" ));
	objects.push(new Object( "a laser pointer" , "laser pointers" ));
	objects.push(new Object( "a bra" , "bras" ));
	objects.push(new Object( "a helmet" , "helmets" ));
	objects.push(new Object( "a crockpot" , "crockpots" ));
	objects.push(new Object( "a stove" , "stoves" ));
	objects.push(new Object( "a treadmill" , "treadmills" ));
	objects.push(new Object( "a dumbbell" , "dumbbells" ));
	objects.push(new Object( "hot sauce" , "hot sauce" ));
	objects.push(new Object( "a mug" , "mugs" ));
	objects.push(new Object( "paint" , "paint" ));
	objects.push(new Object( "an air conditioner" , "air conditioners" ));
	objects.push(new Object( "a restaurant" , "restaurants" ));
	objects.push(new Object( "a gun" , "guns" ));
	objects.push(new Object( "a vape" , "vapes" ));
	objects.push(new Object( "an ointment" , "ointment" ));
	objects.push(new Object( "a candle" , "candles" ));
	objects.push(new Object( "a safe" , "safes" ));
	objects.push(new Object( "a stress ball" , "stress balls" ));
	objects.push(new Object( "a vacuum" , "vacuums" ));
	objects.push(new Object( "a plunger" , "plungers" ));
	objects.push(new Object( "a coaster" , "coasters" ));
	objects.push(new Object( "a magnet" , "magnets" ));
	objects.push(new Object( "nail polish" , "nail polish" ));
	objects.push(new Object( "a bird feeder" , "bird feeders" ));
	objects.push(new Object( "a cryptocurrency" , "cryptocurrency" ));
	objects.push(new Object( "a crockpot" , "crockpots" ));
	objects.push(new Object( "a scarf" , "scarves" ));
	objects.push(new Object( "hot sauce" , "hot sauce" ));
	objects.push(new Object( "a plate" , "plates" ));
	objects.push(new Object( "a robot" , "robots" ));
	objects.push(new Object( "food" , "food" ));
	objects.push(new Object( "a guitar pick" , "guitar picks" ));
	objects.push(new Object( "pajamas" , "pajamas" ));
	objects.push(new Object( "wallpaper" , "wallpaper" ));
	objects.push(new Object( "ham" , "ham" ));
	objects.push(new Object( "a skateboard" , "skateboards" ));
	objects.push(new Object( "a Segway" , "Segways" ));
	objects.push(new Object( "a stuffed animal" , "stuffed animals" ));
	objects.push(new Object( "cheese" , "cheese" ));
	objects.push(new Object( "a screen protector" , "screen protectors" ));
	objects.push(new Object( "a bath bomb" , "bath bombs" ));
	objects.push(new Object( "socks" , "socks" ));
	objects.push(new Object( "toilet paper" , "toilet paper" ));
	objects.push(new Object( "a flowerpot" , "flowerpots" ));
	objects.push(new Object( "a mop" , "mops" ));
	objects.push(new Object( "a broom" , "brooms" ));
	objects.push(new Object( "a lanyard" , "lanyards" ));
	objects.push(new Object( "a shirt button" , "shirt buttons" ));
	objects.push(new Object( "a keyboard" , "keyboards" ));
	objects.push(new Object( "a light switch " , "light switches" ));
	objects.push(new Object( "a coat hanger" , "coat hangers" ));
	objects.push(new Object( "a curtain" , "curtains" ));
	objects.push(new Object( "a bucket" , "buckets" ));
	objects.push(new Object( "a sink" , "sinks" ));
	objects.push(new Object( "perfume" , "perfume" ));
	objects.push(new Object( "an HDMI cable" , "HDMI cables" ));
	objects.push(new Object( "a lock" , "locks" ));
	objects.push(new Object( "a shelf" , "shelves" ));
	objects.push(new Object( "a security system" , "security systems" ));
	objects.push(new Object( "a dog collar" , "dog collars" ));
	objects.push(new Object( "high heels" , "high heels" ));
	objects.push(new Object( "foam" , "foam" ));
	objects.push(new Object( "a belt" , "belts" ));
	objects.push(new Object( "a container" , "containers" ));
	objects.push(new Object( "a pizza" , "pizza" ));
	objects.push(new Object( "sushi" , "sushi" ));
	objects.push(new Object( "a brick" , "bricks" ));
	objects.push(new Object( "a suitcase" , "suitcases" ));
	objects.push(new Object( "a backpack" , "backpacks" ));
	objects.push(new Object( "a doll" , "dolls" ));
	objects.push(new Object( "aaaaaaaa" , "sssssssss" ));
	objects.push(new Object( "a tote bag" , "tote bags" ));
	objects.push(new Object( "swag" , "swag" ));
	objects.push(new Object( "a donut" , "donuts" ));
	objects.push(new Object( "beer" , "beer" ));
	objects.push(new Object( "money" , "money" ));
	objects.push(new Object( "a tie" , "ties" ));
	objects.push(new Object( "a baseball bat" , "baseball bats" ));
}
addObjects();

var features = [
	"with a camera attached",
	"with a pocket in it",
	"that doubles in size",
	"that can shrink",
	"that fits in your pocket",
	"that can make phone calls",
	"that tells you the time",
	"that cools you off",
	"that you can pee in",
	"that charges your phone",
	"with an LCD screen in it",
	"that can do your taxes",
	"but it costs $1,000,000",
	"that steals your data",
	"that blackmails you",
	"that mines Bitcoin",
	"with 10x optical zoom",
	"that can fly",
	"that is programmed to break",
	"that can be delivered to you at any time",
	"that can brew coffee",
	"that helps you lose weight",
	"that tastes like ice cream",
	"with a GPS tracker",
	"signed by celebrities",
	"that protects your car",
	"that protects you",
	"for spicing up your sex life",
	"that helps you cheat on tests",
	"on wheels",
	"that sticks to your windshield",
	"for your car",
	"for the office",
	"for your bathroom",
	"but you have to pay every time you use it",
	"that can purify water",
	"that you can have sex with",
	"that dissolves in water",
	"that secretly records you",
	"that absorbs all sound",
	"that makes you stronger",
	"that comes in a family bundle",
	"with a built in mirror",
	"that comes with a lifetime warranty",
	"with a protective titanium shell",
	"that cures the common cold",
	"that is controlled by an iPhone app",
	"that translates Spanish",
	"that makes you more attractive",
	"that reminds you of your appointments",
	"that you can hide cash in",
	"that torments your enemies for you",
	"that kills you",
	"but it's made of gold",
	"but it only costs 10 cents to produce",
	"with a fingerprint scanner",
	"that gets you laid",
	"that can switch on/off with a clap",
	"that can hover",
	"with facial recognition",
	"with straps for easy carrying",
	"with UV protection",
	"with monthly DLC",
	"as a halloween costume",
	"but it's safe to swallow",
	"that can plug into your laptop via USB",
	"that can change color",
	"that can call you an Uber",
	"that can post to social media for you",
	"that can cure a hangover",
	"that never runs out of power",
	"that can translate Spanish",
	"that can babysit your kid",
	"that can generate ideas for Twinnovation",
	"that can numb your pain",
	"that reads you the news in the morning",
	"that can be worn as jewelry",
	"that can float",
	"but you assemble it yourself",
	"that gets smarter with machine learning",
	"but the government uses it to spy on you"
];

var apps = [
	"Twitter",
	"Facebook",
	"Uber",
	"UberEats",
	"Tinder",
	"AirBNB",
	"Shazam",
	"Instagram",
	"Snapchat",
	"Waze",
	"Netflix",
	"Gmail",
	"Spotify",
	"Amazon",
	"Groupon",
	"Yelp",
	"Uber",
	"Venmo",
	"eBay",
	"Seamless",
	"LinkedIn",
	"Slack",
	"YouTube",
	"Wikipedia",
	"WhatsApp",
	"Photoshop",
	"Skype",
	"Twitch",
	"HQ Trivia",
	"SoundCloud",
	"Tumblr",
	"Bumble",
	"Amazon Prime",
	"FaceTime",
	"PantsOrShorts",
	"Chrome",
	"Reddit",
	"Headgum",
	"Twinnovation",
	"Find My iPhone",
	"GroupHole",
	"uTorrent"
];

var adjectives = [
	"banded",
	"infrared",
	"quiet",
	"cute",
	"wireless",
	"scratch-and-sniff",
	"3D printed",
	"inflatable",
	"bluetooth",
	"organic",
	"slim",
	"premium",
	"fancy",
	"adult",
	"long",
	"microscopic",
	"vibrating",
	"bite-sized",
	"digital",
	"solar-powered",
	"layered",
	"edible",
	"virtual reality",
	"wearable",
	"magnetic",
	"customizable",
	"alcoholic",
	"better",
	"kid-friendly",
	"telescopic",
	"subscription-based",
	"resellable",
	"concealed",
	"unbreakable",
	"vintage",
	"smart",
	"sexy",
	"weaponized",
	"liquid",
	"portable",
	"water-proof",
	"on-demand",
	"spray-on",
	"stretchy",
	"double-sided",
	"scary",
	"disposable",
	"counterfeit",
	"novelty",
	"candy",
	"artisanal",
	"metal",
	"shareable",
	"self-cleaning",
	"mobile",
	"high-end",
	"black-market",
	"fashionable",
	"bulletproof",
	"WiFi-enabled",
	"low calorie",
	"pickled",
	"interchangeable",
	"smokable",
	"fried",
	"anonymous",
	"hipster",
	"fluffy",
	"double-layered",
	"matte-black",
	"proprietary",
	"voice-controlled",
	"see-through",
	"odorless",
	"self-aware",
	"collapsable",
	"extendable",
	"non-perishable",
	"playable",
	"pre-owned",
	"fragrant",
	"reusable",
	"high",
	"tall",
	"small",
	"little",
	"sticky",
	"velcro",
	"foldable",
	"branded",
	"cream-filled",
	"electronic",
	"acoustic",
	"analog",
	"camouflaged",
	"silent",
	"genetically modified",
	"resealable"
];

var audiences = [
	"shoplifters",
	"mailmen",
	"grandmas",
	"racists",
	"cats",
	"dogs",
	"women",
	"men",
	"kids",
	"dentists",
	"doctors",
	"college students",
	"teachers",
	"inmates",
	"mechanics",
	"lawyers",
	"rappers",
	"babies",
	"married couples",
	"artists",
	"bullies",
	"twins",
	"Mike Karnell, specifically",
	"pets",
	"parents",
	"virgins",
	"priests",
	"chefs",
	"your ex-girlfriend",
	"your dad's friend from work",
	"scientists",
	"farmers",
	"high school students",
	"janitors",
	"Wall Street traders",
	"rich people",
	"poor people",
	"the middle class",
	"strippers",
	"guitar players",
	"carnies",
	"pregnant women",
	"stoners",
	"gym bros",
	"athletes",
	"basketball players",
	"celebrities",
	"flight attendants",
	"cat ladies",
	"NASCAR enthusiasts",
	"frat boys",
	"the government",
	"underachieving rich kids",
	"vegans",
	"troubled youth",
	"vape kids",
	"accountants",
	"guys who wear cargo shorts",
	"dads",
	"your drug dealer",
	"anime kids",
	"gamers",
	"alcoholics",
	"leaders",
	"business men",
	"slam poets",
	"girl scouts",
	"professionals",
	"strangers",
	"hipsters",
	"criminals",
	"hippies",
	"nerds",
	"concert-goers",
	"music festival kids",
	"military wives",
	"soccer moms",
	"the piss twins",
	"feminists",
	"fun uncles",
	"babysitters",
	"Canadians",
	"serial killers",
	"church groups",
	"your neighbors",
	"Uber drivers",
	"the deaf",
	"sneakerheads",
	"hypebeasts",
	"skaters",
	"wannabes",
	"gardeners",
	"podcast hosts",
	"homeowners",
	"landlords",
	"referees",
	"Twinnovation fans",
	"Jake and Amir fans",
	"surgeons",
	"pornstars",
	"barbers",
	"cops",
	"gamblers",
	"cult members",
	"organized crime",
	"dog owners",
	"cat owners",
	"the CTO of Twinnovation"
];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var ideasGenerated = 0;
var ideasGeneratedLabel = document.querySelector("#ideasGeneratedLabel");

function generateIdea(scriptType) {
	if (activeSettings == 0) {
		scriptType = getRandomInt(1,6);
	}
	else {
		scriptType = activeSettings[Math.floor(Math.random()*activeSettings.length)];
	}

	switch(scriptType) {

		case 1:
			idea = objects[getRandomInt(0,objects.length-1)].s + " " + features[getRandomInt(0,features.length-1)];
		break;

		case 2:
			idea = objects[getRandomInt(0,objects.length-1)].s + " that doubles as " + objects[getRandomInt(0,objects.length-1)].s;
		break;

		case 3:
			idea = adjectives[getRandomInt(0,adjectives.length-1)] + " " + objects[getRandomInt(0,objects.length-1)].p;
		break;

		case 4:
			app1 = apps[getRandomInt(0,apps.length-1)];
			app2 = apps[getRandomInt(0,apps.length-1)];
			appName = app1.substring(0,getRandomInt(3,5)) + app2.substr(app2.length - getRandomInt(3,5));
			idea =  appName + ": A " + app1 + "-" + app2 + " hybrid";
		break;

		case 5:
			idea = apps[getRandomInt(0,apps.length-1)] + " for " + audiences[getRandomInt(0,audiences.length-1)];
		break;

		case 6:
			idea = objects[getRandomInt(0,objects.length-1)].p + " for " + audiences[getRandomInt(0,audiences.length-1)];
		break;

		case 7:
			idea = adjectives[getRandomInt(0,adjectives.length-1)] + " " + objects[getRandomInt(0,objects.length-1)].p + " for " + audiences[getRandomInt(0,audiences.length-1)];
		break;
	}

	console.log(idea + " (" + scriptType + ")");
	label.innerHTML = idea;

	addToLog(idea);

	ideasGenerated++;
	ideasGeneratedLabel.innerHTML = ideasGenerated;

}

var activeSettings = [1,2,3,4,5,6];
var checkboxes = document.querySelectorAll("input");

checkboxes.forEach(function(e) {

	e.addEventListener( 'change', function() {
		calculatePermutations();
	});

});

function handleSettings() {

	activeSettings = [];

	if (checkboxes[0].checked) {activeSettings.push(1);}
	if (checkboxes[1].checked) {activeSettings.push(2);}
	if (checkboxes[2].checked) {activeSettings.push(3);}
	if (checkboxes[3].checked) {activeSettings.push(4);}
	if (checkboxes[4].checked) {activeSettings.push(5);}
	if (checkboxes[5].checked) {activeSettings.push(6);}
	if (checkboxes[6].checked) {activeSettings.push(7);}

	settingsPanel.style.display = "none";
	settingsOpen == false;
}

function handleLog() {

	logPanel.style.display = "none";
	logOpen == false;
}

function addToLog(ideaText) {

    var newPforLog = document.createElement('p');
	newPforLog.appendChild(document.createTextNode(ideaText));

	newPforLog.addEventListener("click", function() {

		handleLog();
		label.innerHTML = ideaText;

	});
	    
    log.insertBefore(newPforLog, log.childNodes[0]);
}


var label = document.querySelector("#label");
var permutationsLabel = document.querySelector("#permutationslabel");

var a = objects.length-1;
var b = features.length-1;
var c = apps.length-1;
var d = audiences.length-1;
var e = adjectives.length-1;

var perm1 = a * b;
var perm2 = a * a;
var perm3 = a * e;
var perm4 = c * c;
var perm5 = c * d;
var perm6 = a * d;
var perm7 = a * d * e;

const allpermutations = perm1 + perm2 + perm3 + perm4 + perm5 + perm6 + perm7;

function calculatePermutations() {

	perm1 = a * b;
    perm2 = a * a;
    perm3 = a * e;
	perm4 = c * c;
	perm5 = c * d;
	perm6 = a * d;
	perm7 = a * d * e;

	if (checkboxes[0].checked == false) {perm1 = 0;}
	if (checkboxes[1].checked == false) {perm2 = 0;}
	if (checkboxes[2].checked == false) {perm3 = 0;}
	if (checkboxes[3].checked == false) {perm4 = 0;}
	if (checkboxes[4].checked == false) {perm5 = 0;}
	if (checkboxes[5].checked == false) {perm6 = 0;}
	if (checkboxes[6].checked == false) {perm7 = 0;}

	permutations = perm1 + perm2 + perm3 + perm4 + perm5 + perm6 + perm7;
	
	if (permutations === 0) {
		permutations = allpermutations;
	}

	permutationsLabel.innerHTML = (permutations).toLocaleString('en');
}

calculatePermutations();