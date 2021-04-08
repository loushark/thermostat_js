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

  describe('has a temperature', function() {
    it('that can be increased', function(){
      thermostat.up(1)
      expect(thermostat.temp).toBe(21);
    });
    
  });

});
