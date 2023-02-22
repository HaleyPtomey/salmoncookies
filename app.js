'use strict';

// TODO: assign an array to the hours variable below
// your array should contain the hours of 6am through 7pm

var hours =["6am", "7am", "8am","9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

// REVIEW: look at the JS object for a store below (seattle)
// You will be copying this object design, and it's capabilities
var seattle = {
 locationName: 'Seattle',
 minCustomersPerHour: 23,
 maxCustomersPerHour: 65,
 avgCookiesPerSale: 6.3,
 customersEachHour: [],
 cookiesEachHour: [],
 totalDailyCookies: 0,
 calcCustomersEachHour: function () {
   for (var i = 0; i <= hours.length; i++) {
     this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));
   }
 },
 calcCookiesEachHour: function () {
   this.calcCustomersEachHour();
   for (var i = 0; i < hours.length; i++) {
     var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
     this.cookiesEachHour.push(oneHour);
     this.totalDailyCookies += oneHour;
   }
 },
 render() {
   this.calcCookiesEachHour();

   // TODO:  access the seattle store HTML list by it's ID
   // and assign it to the unorderedList variable below

   var unorderedList= document.getElementById('seattle');
   for (var i = 0; i < hours.length; i++) {
     var listItem = document.createElement('li');
     listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
     unorderedList.appendChild(listItem);
   }
   listItem = document.createElement('li');
   listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
   unorderedList.appendChild(listItem);
 }
};
// TODO:  copy the object data from above and paste it 4 times below, each time representing a new city:  tokyo, dubai, paris, lima
// the minCustomersPerHour, maxCustomersPerHour, avgCookiesPerSale should all have different sales counts
// you may make these counts up and will also need to update where you "select" or "access" your HTML for each store

var dubai={
    locationName:'Dubai',
    minCustomersPerHour: 23,
    maxCustomersPerHour:65,
    avgCookiesPerSale:6.3,
    customersEachHour:[],
    cookiesEachHour:[],
    totalDailyCookies:0,

    calcCustomersEachHour: function () {
        for (var i = 0; i <= hours.length; i++) {
          this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));
        }
      },
    calcCookiesEachHour:function(){
        this.calcCustomersEachHour();
        for (var i = 0; i < hours.length; i++) {
          var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
          this.cookiesEachHour.push(oneHour);
          this.totalDailyCookies += oneHour; 
    }
},
render() {
    this.calcCookiesEachHour();

    var unorderedList= document.getElementById('dubai');
    for (var i = 0; i < hours.length; i++) {
      var listItem = document.createElement('li');
      listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      unorderedList.appendChild(listItem);
    }
    listItem = document.createElement('li');
    listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
    unorderedList.appendChild(listItem);
  }
 };
 

 var tokyo={
    locationName:'Tokyo',
    minCustomersPerHour: 23,
    maxCustomersPerHour:65,
    avgCookiesPerSale:6.3,
    customersEachHour:[],
    cookiesEachHour:[],
    totalDailyCookies:0,

    calcCustomersEachHour:function () {
        for(var i=0; i <= hours.length; i++){
            this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));

        }
    },
 
 calcCookiesEachHour:function(){
    this.calcCustomersEachHour();
    for (var i = 0; i < hours.length; i++) {
      var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
      this.cookiesEachHour.push(oneHour);
      this.totalDailyCookies += oneHour; 
}
},
render (){
    this.calcCookiesEachHour();
    var unorderedList= document.getElementById ('tokyo');
    for (var i = 0; i < hours.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
        unorderedList.appendChild(listItem);
      }
      listItem = document.createElement('li');
      listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
      unorderedList.appendChild(listItem);
    }
   };


   var paris={
    locationName:'Paris',
    minCustomersPerHour: 23,
    maxCustomersPerHour:65,
    avgCookiesPerSale:6.3,
    customersEachHour:[],
    cookiesEachHour:[],
    totalDailyCookies:0,

    calcCustomersEachHour:function () {
        for(var i=0; i <= hours.length; i++){
            this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));

        }
    },
 
 calcCookiesEachHour:function(){
    this.calcCustomersEachHour();
    for (var i = 0; i < hours.length; i++) {
      var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
      this.cookiesEachHour.push(oneHour);
      this.totalDailyCookies += oneHour; 
}
},
render (){
    this.calcCookiesEachHour();
    var unorderedList= document.getElementById ('paris');
    for (var i = 0; i < hours.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
        unorderedList.appendChild(listItem);
      }
      listItem = document.createElement('li');
      listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
      unorderedList.appendChild(listItem);
    }
   };

   var lima={
    locationName:'Lima',
    minCustomersPerHour: 23,
    maxCustomersPerHour:65,
    avgCookiesPerSale:6.3,
    customersEachHour:[],
    cookiesEachHour:[],
    totalDailyCookies:0,

    calcCustomersEachHour:function () {
        for(var i=0; i <= hours.length; i++){
            this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));

        }
    },
 
 calcCookiesEachHour:function(){
    this.calcCustomersEachHour();
    for (var i = 0; i < hours.length; i++) {
      var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
      this.cookiesEachHour.push(oneHour);
      this.totalDailyCookies += oneHour; 
}
},
render (){
    this.calcCookiesEachHour();
    var unorderedList= document.getElementById ('lima');
    for (var i = 0; i < hours.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
        unorderedList.appendChild(listItem);
      }
      listItem = document.createElement('li');
      listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
      unorderedList.appendChild(listItem);
    }
   };

function random (min, max) {
 return Math.floor(Math.random()* (max - min + 1) + min);
}

var allShops = [seattle, dubai, tokyo, paris, lima];
(function renderAllShops( ) {


    for (var i = 0; i < allShops.length; i++) 
allShops[i].render();

})()

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
const tableElement = document.getElementById('sales-table');
// TODO: pass minCustomersPerHour, maxCustomersPerHour, and avgCookiesPerHour as parameters of this function
// set them as dynamic properties inside of this (based on their passed in data)
function CookieStand(locationName, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerSale) {
 this.locationName = locationName;
 this.customersEachHour = [];
 this.cookiesEachHour = [];
 this.totalDailyCookies = 0;
 // TODO: // push "this" object to the CookieStand.all array on every instantiation
 this.cookiestand.all.push()
}
CookieStand.prototype.calcCustomersEachHour = function() {
 for (let i = 0; i < hours.length; i++) {
   this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));
 }
};
CookieStand.prototype.calcCookiesEachHour = function() {
 // TODO: invoke the method that calculates number of customers each hour here
 
 this.calcCustomersEachHour()
 for (let i = 0; i < hours.length; i++) {
   const oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
   this.cookiesEachHour.push(oneHour);
   this.totalDailyCookies += oneHour;
 }
};
CookieStand.prototype.render = function() {
 // TODO: generate the calculation of customers each hour here
 const tableRow = document.createElement('tr');
 let tableDataElement = document.createElement('td');
 tableDataElement.textContent = this.locationName;
 tableRow.appendChild(tableDataElement);
 for (let i = 0; i < hours.length; i++) {
   tableDataElement = document.createElement('td');
   tableDataElement.textContent = this.cookiesEachHour[i];
   tableRow.appendChild(tableDataElement);
 }
 const tableHeaderElement = document.createElement('th');
 tableHeaderElement.textContent = this.totalDailyCookies;
 tableRow.appendChild(tableHeaderElement);
 tableElement.appendChild(tableRow);
};
CookieStand.all = [];
// TODO: instantiate all CookieStand objects (with sample data)
function random(min, max) {
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
function makeHeaderRow() {
 const tableRow = document.createElement('tr');
 let tableHeaderElement = document.createElement('th');
 tableHeaderElement.textContent = 'Locations';
 tableRow.appendChild(tableHeaderElement);
 for (let i = 0; i < hours.length; i++) {
   tableHeaderElement = document.createElement('th');
   tableHeaderElement.textContent = hours[i];
   tableRow.appendChild(tableHeaderElement);
 }
 tableHeaderElement = document.createElement('th');
 tableHeaderElement.textContent = 'Location Totals';
 tableRow.appendChild(tableHeaderElement);
 tableElement.appendChild(tableRow);
}
function makeFooterRow() {
 const tableRow = document.createElement('tr');
 let tableHeaderElement = document.createElement('th');
 tableHeaderElement.textContent = 'Hourly Totals for All Locations';
 tableRow.appendChild(tableHeaderElement);
 let totalOfTotals = 0;
 for (let i = 0; i < hours.length; i++) {
   let hourlyTotal = 0;
   for (const j = 0; j < CookieStand.all.length; j++){
     hourlyTotal += CookieStand.all[j].cookiesEachHour[i];
     totalOfTotals += CookieStand.all[j].cookiesEachHour[i];
   }
   tableHeaderElement = document.createElement('th');
   tableHeaderElement.textContent = hourlyTotal;
   tableRow.appendChild(tableHeaderElement);
  }
 tableHeaderElement = document.createElement('th');
 tableHeaderElement.textContent = totalOfTotals;
 tableRow.appendChild(tableHeaderElement);
 tableElement.appendChild(tableRow);
}
(function renderTable() {
 makeHeaderRow();
 for(let i = 0; i < CookieStand.all.length; i++){
   CookieStand.all[i].render();
 }
 makeFooterRow();
})();
// make some waves.
const ocean = document.getElementById('ocean'),
 waveWidth = 10,
 waveCount = Math.floor(window.innerWidth/waveWidth),
 docFrag = document.createDocumentFragment();
for(let i = 0; i < waveCount; i++){
 const wave = document.createElement('div');
 wave.className += ' wave';
 docFrag.appendChild(wave);
 wave.style.left = i * waveWidth + 'px';
 wave.style.webkitAnimationDelay = (i/100) + 's';
}
ocean.appendChild(docFrag);