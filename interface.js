$( document ).ready(function() {
  const thermostat = new Thermostat();
  
  $("#power").text(thermostat.onPowerSaving());
  
  $( "#down" ).click(function( event ) {
    $( "#message" ).text(thermostat.down()); 
    $("#usage").text(thermostat.getUsage()); 
  });

  $("#button").click((event) => {
    $( "#message" ).text(thermostat.up());
    $("#usage").text(thermostat.getUsage()); 
  })
  $("#change").click((event) => {
    thermostat.changePowerSaving();
    $("#power").text(thermostat.onPowerSaving());
    
  })
  $("#reset").click((event) => {
    $("#message").text(thermostat.reset);
    $("#usage").text(thermostat.getUsage());
  })
});
