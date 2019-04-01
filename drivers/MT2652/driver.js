'use strict';

const Homey = require('homey');

class DevoloSceneSwitchDriver extends Homey.Driver {
    onInit() {
        this.sceneFlowTrigger = new Homey.FlowCardTriggerDevice('mt2652_scene').register();
    }
}

module.exports = DevoloSceneSwitchDriver;
