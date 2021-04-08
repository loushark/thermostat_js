describe('Thermostat', function() {
  let thermostat

  describe('has a start temperature', function() {
    it('of 20 degrees', function(){
      thermostat = new Thermostat();
      expect(thermostat.startTemp).toBe(20);
    });
    
  });

});
