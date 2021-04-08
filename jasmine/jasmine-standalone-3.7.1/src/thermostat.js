'use strict';

class Thermostat {
  constructor(){
    this.startTemp = 20;
    this.temp = 20;
    this.maximumTemp = 25;
    this.MINIMUMTEMP = 10;
    this.powerSavingMode = true;
  }

  up(){
  	return this.temp += 1;
  }

  down(){
    if (this.isMinimumTemperature()){
      return;
    }
     this.temp -= 1;
    }

  isMinimumTemperature() {
   return this.temp === this.MINIMUMTEMP;
 }

 isMaximumTemperature() {
 	return this.temp === this.MINIMUMTEMP;
 }

 powerSavingModeOff() {
 	this.powerSavingMode = false;
 	this.changeMaximumTemp;
 	return;
 }

  powerSavingModeOn() {
 	this.powerSavingMode = true;
 	this.changeMaximumTemp;
 	return;
 }

 changeMaximumTemp() {
 	if (this.powerSavingMode === true) {
 		return this.maximumTemp = 25;
 	} else if (this.powerSavingMode === false) {
 		return this.maximumTemp = 32;
 	}
 }


};


/* 	- powerSavingMode = true/false
	- if powerSavingMode === true
		maximum temperature is 25 degrees
*/

