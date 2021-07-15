const appid = 'df81213417c4bf9f021b8be24bd6bc1b';

function getTemp(){
  return $.get(`http://api.openweathermap.org/data/2.5/weather?q=London&appid=${appid}`, (response) => {
    console.log(response.main.temp);
    return (response.main.temp - 273.15).toFixed(0); 
  });
}

$( document ).ready(function() {
  const temp = setTimeout(() => {
    return getTemp(); 
  }, 0);
  const thermostat = new Thermostat(temp);
  
  $("#power").text(thermostat.onPowerSaving());
  $( "#message").text = thermostat.temperature; 
  
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
