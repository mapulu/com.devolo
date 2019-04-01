'use strict';

const Homey = require('homey');

class DevoloKeyFobDriver extends Homey.Driver {
    onInit() {
        this.btn1_single = new Homey.FlowCardTriggerDevice('mt2653_btn1_single');
        this.btn2_single = new Homey.FlowCardTriggerDevice('mt2653_btn2_single');
        this.btn2_double = new Homey.FlowCardTriggerDevice('mt2653_btn2_double');
        this.btn3_single = new Homey.FlowCardTriggerDevice('mt2653_btn3_single');
        this.btn4_single = new Homey.FlowCardTriggerDevice('mt2653_btn4_single');
        this.btn4_double = new Homey.FlowCardTriggerDevice('mt2653_btn4_double');
    }
}

module.exports = DevoloKeyFobDriver;
