window.addEventListener('load', function() {
  
  // add a <button> element to your html with id of 'button'
  const button = document.getElementById("button")

  // add a <span> element to your html with id of 'message'
  //const message = document.getElementById("message")

  const power = document.getElementById("power")

  const change = document.getElementById("change")

  const reset = document.getElementById("reset")

  const usage = document.getElementById("usage")
  
/*
  button.addEventListener('click', function() {
    message.innerHTML = thermostat.up();
    usage.innerHTML = thermostat.getUsage();
})

down.addEventListener('click', function() {
  message.innerHTML = thermostat.down();
  usage.innerHTML = thermostat.getUsage();
})

change.addEventListener('click', function(){
  thermostat.changePowerSaving();
  power.innerHTML = thermostat.onPowerSaving();  
})

reset.addEventListener('click', () => {
  message.innerHTML = thermostat.reset(); 
  usage.innerHTML = thermostat.getUsage();
  
})
*/
  
})

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

  
});
