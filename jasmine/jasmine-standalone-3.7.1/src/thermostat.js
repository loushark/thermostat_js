'use strict';

class Thermostat {
  constructor(){
    this.startTemp = 20;
    this.temp = this.startTemp;
    this.maximumTemp = 25;
    this.MINIMUMTEMP = 10;
    this.powerSavingMode = true;
  }

  // getTemperature() {
  //   return this.temp;
  // }

  up(){
    if(this.isMaximumTemperature()){
      return;
    }
    return this.temp += 1;
  }

  down(){
    if(this.isMinimumTemperature()){
      return;
    }
    this.temp -= 1;
  }

  isMinimumTemperature() {
    return this.temp === this.MINIMUMTEMP;
  }

  isMaximumTemperature() {
    return this.temp === this.maximumTemp;
  }

  powerSavingModeOff() {
    this.powerSavingMode = false;
    this.changeMaximumTemp();
    if(this.temp > this.maximumTemp){
      this.temp = this.maximumTemp
    }
  }

  powerSavingModeOn() {
    this.powerSavingMode = true;
    this.changeMaximumTemp();
    if(this.temp > this.maximumTemp){
      this.temp = this.maximumTemp
    }
  }

  isPowerSavingMode() {
    return this.powerSavingMode === true;
  }

  changeMaximumTemp() {
    if (this.isPowerSavingMode()) {
      return this.maximumTemp = 25;
    } else {
      return this.maximumTemp = 32;
    }
  }

  reset() {
    this.temp = this.startTemp;
    this.powerSavingModeOn()
  }

  energyUsage(){
    if(this.temp < 18){
      return "Low";
    } else if(this.temp <= 25){
      return "Medium";
    } else if(this.temp > 25){
      return "High";
    };
  }
};
