(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

const planetMars = require("./mars");

planetMars.outputTo("output");
},{"./mars":2}],2:[function(require,module,exports){
"use strict";

const mars = {
	"Name": "Mars",
	"Discovered": "Prehistory",
	"Mass": "6.4171 x 10^23 kg",
	"Volume": "1.6318 x 10^11 km³",
	"Orbit": "228 million km",
	"Atmosphere": ["CO2", "argon", "nitrogen", "oxygen", "CO"],
	"Moons": ["Phobos", "Deimos"],
	"Probes": ["various Mariner and Mars probes", "Viking 1 and 2", "Mars Global Surveyor", "Mars Pathfinder", "Sojourner", "2001 Mars Odyssey", "Mars Express", "Spirit", "Opportunity", "Mars Reconnaissance Orbiter", "Phoenix", "Dawn", "Curiosity", "Mars Orbiter Mission", "MAVEN", "ExoMars TGO", "Schiaparelli"]
};

const outputTo = (domElement) => {
	domElement.innerHTML = `<h1>${mars.Name}</h1><h4>Discovered in ${mars.Discovered}</h4><br>Mass: ${mars.Mass}<br>Volume: ${mars.Volume}<br>Orbital distance: ${mars.Orbit}<br>`;
		
	let lists = ["Atmosphere", "Moons", "Probes"];

	lists.forEach(function(val){
		domElement.innerHTML += `${val}: `;
		mars[val].forEach(function(value, index){
			if (index === mars[val].length - 1) {
				domElement.innerHTML += `${value}<br>`;
			} else {
				domElement.innerHTML += `${value}, `;
			}
		});
	});
};

module.exports = outputTo;
},{}]},{},[1]);
