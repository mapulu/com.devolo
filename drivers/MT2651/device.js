'use strict';

const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

class DevoloSmokeSensor extends ZwaveDevice {
  onMeshInit() {
    this.registerCapability('measure_battery', 'BATTERY');
    this.registerCapability('alarm_smoke', 'NOTIFICATION');
  }
}

module.exports = DevoloSmokeSensor;
