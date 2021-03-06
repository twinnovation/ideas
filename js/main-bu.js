/*

	"text",
	"text",
	"text",
	"text",
	"text",
	"text",
	"text",
	"text",
	"text",
	"text",
	"text",
	"text",
	"text",
	"text",
	"text",
	"text",
	"text",
	"text",
	"text",
	"text",
	"text",
	"text",
	"text",
	"text",
	"text",
	"text",
	"text",
	"text",
	"text",
	"text",
	"text",
	"text",
	"text",
	"text",
	"text",
	"text",
	"text",
	"text",
	"text",
	"text",
	"text",
	"text",
	"text",
	"text",
	"text",
	"text",
	"text",
	"text",
	"text",
	"text",
	"text",
	"text",
	"text",
	"text",
	"text",
	"text",
	"text",
	"text",

*/

var newIdeaBtn = document.querySelector("#newIdeaBtn");
var banner = document.querySelector("#banner");

newIdeaBtn.addEventListener("click", function() {
	generateIdea(0);
	banner.classList.add("rotate-anim");
	setTimeout(function(){
	 	banner.classList.remove("rotate-anim");
	}, 200);
});

var settingsPanel = document.querySelector("#settings");
var settingsBtn = document.querySelector("#settingsBtn");
var settingsStatus = false;

settingsBtn.addEventListener("click", function() {
	if (settingsStatus == false) {
		settingsPanel.style.display = "block";
		settingsStatus == true;
	}
});

var closeSettingsBtn = document.querySelector("#closeSettingsBtn");
var closeSettingsIcon = document.querySelector("#closeSettingsIcon");

closeSettingsBtn.addEventListener("click", function() {
	settingsPanel.style.display = "none";
	settingsStatus == false;
});

closeSettingsIcon.addEventListener("click", function() {
	settingsPanel.style.display = "none";
	settingsStatus == false;
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
	objects.push(new Object( "a Chrome extension" , "chrome extensions" ));
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
	objects.push(new Object( "a Facebook group" , "Facebook groups" ));
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
	"with an LCD screen",
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
	"that dissolves in water"
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
	"HQ Trivia"
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
	"low calorie"
]

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
	"the podfathers",
	"babies",
	"married couples",
	"artists",
	"bullies",
	"twins",
	"Mike Karnell, specifically"
]

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateIdea(scriptType) {
	if (scriptType == 0) {
		scriptType = getRandomInt(1,5);
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

	}

	console.log(idea);
	label.innerHTML = idea;

}

var label = document.querySelector("#label");


//adjective + object

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

var permutations = perm1 + perm2 + perm3 + perm4 + perm5 + perm6;
console.log((permutations).toLocaleString('en') );
