'use strict';

describe('Thermostat', function() {
  let thermostat

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('has a start temperature', function() {
    it('of 20 degrees', function(){
      expect(thermostat.startTemp).toBe(20);
    });
  });

  describe('has a minimum temperature', function() {
    it('of 10 degrees', function(){
      expect(thermostat.MINIMUMTEMP).toBe(10);
    });

    it('that is true or false', function(){
      for(var i=0; i<10; i++){
        thermostat.down();
      }
      expect(thermostat.isMinimumTemperature()).toBe(true);
    });


    it('that it will not go below', function(){
      for(var i=0; i<11; i++){
        thermostat.down();
      }
      expect(thermostat.temp).toBe(10);
    });
  });

  describe('has a temperature', function() {
    it('that can be increased', function(){
      thermostat.up()
      expect(thermostat.temp).toBe(21);
    });

    it('that can be decreased', function(){
      thermostat.down()
      expect(thermostat.temp).toBe(19);
    });

  });

  describe('Power Saving Mode', function() {
  	it('defaults to on', function() {
  		expect(thermostat.powerSavingMode).toBe(true)
  	});

    it('is either on or off', function() {
  		expect(thermostat.isPowerSavingMode()).toBe(true)
      thermostat.powerSavingModeOff()
      expect(thermostat.isPowerSavingMode()).toBe(false)
  	});

  	 it('can be switched off', function() {
  	 	thermostat.powerSavingModeOff()
  		expect(thermostat.powerSavingMode).toBe(false)
  	});

  	 it('can be switched on', function() {
  	 	thermostat.powerSavingModeOn()
  		expect(thermostat.powerSavingMode).toBe(true)
  	});

  	 it('has a maximum temperature of 25 degrees when switched to on', function() {
  	 	thermostat.powerSavingModeOn()
  		expect(thermostat.maximumTemp).toBe(25)
  	});

  	  it('has a maximum temperature of 32 degrees when switched to off', function() {
  	 	thermostat.powerSavingModeOff()
  	 	expect(thermostat.powerSavingMode).toBe(false)
  		expect(thermostat.maximumTemp).toBe(32)
  	});
  });

  describe('reset mode', function(){
    it('resets power mode back to on', function(){
      thermostat.reset()
      expect(thermostat.powerSavingMode).toBe(true)
    });

    it('resets temperature to start temp', function(){
      thermostat.reset()
      expect(thermostat.temp).toBe(20);
    });

    it('resets maximumTemp to 25', function(){
      thermostat.reset()
      expect(thermostat.maximumTemp).toBe(25)
    });
  });

  describe ('energy usage', function(){
    it('is low when under 18', function(){
      for(var i=0; i<3; i++){
        thermostat.down();
      }
      expect(thermostat.energyUsage()).toBe("Low")
    });

    it('is medium when above below or equal to 25', function(){
      expect(thermostat.energyUsage()).toBe("Medium")
    });

    it('is high when above 25', function(){
      for(var i=0; i<6; i++){
        thermostat.up();
      }
      expect(thermostat.energyUsage()).toBe("High")
    });
  });

});
