'use strict';

// Humidity Sensor MT2755

const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

class DevoloHumiditySensor extends ZwaveDevice {
  onInit() {
    super.onInit();
  }

  async onMeshInit() {
    super.onMeshInit();
    // this.enableDebug();
    // this.printNode();

    this.registerCapability('alarm_tamper', 'SENSOR_BINARY');

    this.registerCapability('measure_battery', 'BATTERY', {
      getOpts: {
        getOnOnline: true,
      },
    });

    this.registerCapability('measure_humidity', 'SENSOR_MULTILEVEL', {
      getOpts: {
        getOnOnline: true,
      },
    });

    this.registerCapability('measure_temperature', 'SENSOR_MULTILEVEL', {
      getOpts: {
        getOnOnline: true,
      },
    });
  }
}

module.exports = DevoloHumiditySensor;
