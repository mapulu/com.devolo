'use strict';

// Flood Sensor MT2756 

const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

class DevoloFloodSensor extends ZwaveDevice {
	
	onInit() {
        super.onInit();
    }
    
    async onMeshInit() {

        super.onMeshInit();
        //this.enableDebug();
        //this.printNode();

        this.registerCapability('alarm_tamper', 'NOTIFICATION');
        this.registerCapability('alarm_water', 'NOTIFICATION');
        
        this.registerCapability('measure_battery', 'BATTERY', {
            getOpts: {
             getOnOnline: true,
           }
        });

    }

}

module.exports = DevoloFloodSensor;