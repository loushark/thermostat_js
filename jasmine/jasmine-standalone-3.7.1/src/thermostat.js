'use strict';

class Thermostat {
  constructor(){
    this.startTemp = 20;
    this.temp = 20;
    this.MINIMUMTEMP = 10;
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
};
