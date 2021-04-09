$( document ).ready(function( ) {

  var thermostat = new Thermostat();

  updateTemp();
  updatePowerMode();
  displayEnergyUsage()

  $( "#changeTempUp" ).click(function() {
    thermostat.up();
    updateTemp();
  });

  $( "#changeTempDown" ).click(function() {
    thermostat.down();
    updateTemp();
  });

  $( "#powerModeOn" ).click(function() {
    thermostat.powerSavingModeOn();
    updatePowerMode();
  });

  $( "#powerModeOff" ).click(function() {
    thermostat.powerSavingModeOff();
    updatePowerMode();
  });

  $( "#energyUsage" ).click(function() {
    thermostat.energyUsage();
    displayEnergyUsage();
  });



  function updateTemp() {
    $("#changeTemp").text("Current Temp is: " + thermostat.temp);
  }

  function updatePowerMode() {
    if(thermostat.powerSavingMode === true){
      $("#powerMode").text("Power saving mode is: on");
      $("#PSMLight").attr("class", "led-green");
    } else {
    $("#powerMode").text("Power saving mode is: off ");
    $("#PSMLight").attr("class", "led-red");
    }
  }

  function displayEnergyUsage() {
    $("#energy").text("The energy usage is: " + thermostat.energyUsage());
  }

});
