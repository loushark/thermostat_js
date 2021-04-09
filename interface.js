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

  $( "#reset" ).click(function() {
    thermostat.reset();
    resetThermostat()
  });

  function updateTemp() {
    $("#changeTemp").text("Current Temp is: " + thermostat.temp);
  }

  function updatePowerMode() {
    if(thermostat.powerSavingMode === true){
      updateTemp();
      $("#powerMode").text("Power saving mode");
      $("#PSMLight").attr("class", "led-green");
    } else {
      updateTemp();
    $("#powerMode").text("Power saving mode ");
    $("#PSMLight").attr("class", "led-red");
    }
  }

  function displayEnergyUsage() {
    $("#energy").text("The energy usage is: " + thermostat.energyUsage());
  }

  function resetThermostat() {
    updateTemp();
    updatePowerMode();
    displayEnergyUsage()
  }

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
    })

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=0de9e54cb532e0fea72299fddd40c989';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-location').text(data.name);
      $('#current-temperature').text(data.main.temp +' Celsius');
      $('#current-weather').text(data.weather[0].description);
    })
  }

});
