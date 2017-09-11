import "raphael.js";

var MAP_WIDTH = 760;
var MAP_HEIGHT = 645;

var mapContainer = document.getElementById("map");
var map = new Raphael(mapContainer, MAP_WIDTH, MAP_HEIGHT);

//Creation of all styles for rooms
//Math: Blue
var mathRoomStyle = {
  fill: "#d81515",
  stroke: "#660f0f",
  "stroke-wdith": 1,
  "stroke-linejoin": "miter",
  cursor: "pointer"
};
//English: Red
var engRoomStyle = {
  fill: "c40b0b",
  stroke: "#6d0d0d",
  "stroke-wdith": 1,
  "stroke-linejoin": "miter",
  cursor: "pointer"
};
//Science: Green
var sciRoomStyle = {
  fill: "#1b9b17",
  stroke: "#093d07",
  "stroke-wdith": 1,
  "stroke-linejoin": "miter",
  cursor: "pointer"
};
//History: Orange
var histRoomStyle = {
  fill: "#dd800d",
  stroke: "#96570a",
  "stroke-wdith": 1,
  "stroke-linejoin": "miter",
  cursor: "pointer"
};
//Foreign Language: Yellow
var langRoomStyle = {
  fill: "#f7ec20",
  stroke: "#a59f2b",
  "stroke-wdith": 1,
  "stroke-linejoin": "miter",
  cursor: "pointer"
};
//Miscellanious rooms (such as art electives): Purple
var miscRoomStyle = {
  fill: "#ff66ff",
  stroke: "#660066",
  "stoke-width": 1,
  "stroke-linejoin": "miter",
  cursor: "pointer"
};

//Put all region names with locations and stuff in here
var mathRooms = {};
var engRooms = {};
var sciRooms = {};
var histRooms = {};
var langRooms = {};
var miscRooms = {};

//Not sure this is necessary
//var regions = {mathRooms, engRooms, sciRooms, histRooms, langRooms, miscRooms};

//These are test rooms to ensure styling, room creation, and display all work
mathRooms["A126"] = map.rect("m 500, 600, 20, 30 z");
engRooms["C141"] = map.rect("m 400, 550, 20, 40 z");
sciRooms["A310"] = map.rect("m 360, 200, 10, 30 z");
histRooms["A222"] = map.rect("m 750, 300, 10, 10 z");
langRooms["A208"] = map.rect("m 400, 150, 20, 20 z");
miscRooms["auditorium"] = map.rect("m 100, 600, 20, 20 z");


//Set each rooms to different styles
for(var roomName in mathRooms){
  mathRooms[roomName].attr(mathRoomStyle);  
}

for(var roomName in engRooms){
  engRooms[roomName].attr(engRoomStyle);
}

for(var roomName in sciRooms){
  sciRooms[roomName].attr(sciRoomStyle);
}

for(var roomName in histRooms){
  histRooms[roomName].attr(histRoomStyle);
}

for(var roomName in langRooms){
  langRooms[roomName].attr(langRoomStyle);
}

for(var roomName in miscRooms){
  miscRooms[roonName].attr(miscRoomStyle);
}
