$( document ).ready(function( ) {

  var thermostat = new Thermostat();

  updateTemp();
  $("#powerMode").text("Power mode is: ");
  $("#energy").text("The energy usage is: ");

  $( "#changeTempUp" ).click(function() {
    thermostat.up();
    updateTemp();
  });

  function updateTemp() {
    $("#changeTemp").text("Current Temp is: " + thermostat.temp);
  }
});
