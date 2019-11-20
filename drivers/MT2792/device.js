'use strict';

// Metering Plug V2 MT2792

const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

class DevoloV2MeteringPlug extends ZwaveDevice {
  onMeshInit() {
    this.registerCapability('onoff', 'SWITCH_BINARY');
    this.registerCapability('measure_power', 'METER');
    this.registerCapability('meter_power', 'METER');
  }
}

module.exports = DevoloV2MeteringPlug;
