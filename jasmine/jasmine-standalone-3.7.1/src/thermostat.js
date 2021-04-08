class Thermostat {
  constructor(){
    this.startTemp = 20;
    this.temp = 20;
  }

  up(number){
  	return this.temp += number;
  }
};
