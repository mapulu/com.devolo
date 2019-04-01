'use strict';

const Homey = require('homey');

class DevoloThermostatDriver extends Homey.Driver {
    onInit() {
        this.buttonTrigger = new Homey.FlowCardTriggerDevice('014G0159_btn_1')
            .register()
            .registerRunListener( (args, state) => {
                return args.device === state.device;
        });
    }
}

module.exports = DevoloThermostatDriver
