'use strict';

const Homey = require('homey');

class DevoloSceneSwitchDriver extends Homey.Driver {
    onInit() {
        this.sceneFlowTrigger = new Homey.FlowCardTriggerDevice('mt2652_scene').register();
        this.sceneFlowTrigger.registerRunListener((args, state) => {
            // Cast the args.button to a number since it's a String.
            return (Number(args.button) === state.button && args.scene === state.scene);
        });
    }
}

module.exports = DevoloSceneSwitchDriver;
