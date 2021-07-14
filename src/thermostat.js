 class Thermostat{
    constructor(){
     this.temperature = 20;
     this.powerSaving = true;
    }
    up(number = 1){
        if(number + this.temperature <= this.getMaximumTemperature()){
            return this.temperature += number
        }
        else{
            return 'Maximum temperature is ' +this.getMaximumTemperature()
        }
    }
    down(number = 1){
        return this.temperature - number >= 10 ? this.temperature -= number
        : 'Minimum temperature is 10'; 
    }
    getMaximumTemperature(){
        return this.powerSaving ? 25: 32
    }
   changePowerSaving(){
        this.powerSaving = !this.powerSaving
   } 
    onPowerSaving (){
        if(this.powerSaving === true){
            return 'on'
        }else{
            return 'off'
        }

    }
    reset(){
        return this.temperature = 20; 
    }
    getUsage(){
        
            if (this.temperature < 18){
                return 'low-usage';
            }
            else if(this.temperature <= 25){
                return 'medium-usage'; 
            }
            else{
                return 'high-usage'; 
            }
    }

}