'use strict';

const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

// http://products.z-wavealliance.org/products/1143

class DevoloContactSensor extends ZwaveDevice {

	onMeshInit() {
		this.registerCapability('alarm_contact', 'SENSOR_BINARY');

		this.registerCapability('alarm_motion', 'SENSOR_BINARY');
        this.registerReportListener('BASIC', report => {
            if (!report || !report.hasOwnProperty('Value')) return null;
            this.setCapabilityValue('alarm_motion', report.Value !== 0);
        });

        this.registerCapability('alarm_tamper', 'SENSOR_BINARY');
        this.registerCapability('measure_luminance', 'SENSOR_MULTILEVEL');
        this.registerCapability('measure_temperature', 'SENSOR_MULTILEVEL');
        this.registerCapability('measure_battery', 'BATTERY');

        this.registerSetting('basic_set_level', input => {
            if (input >= 100 && input < 255) { input = 255; }
            return new Buffer([input]);
        });
    }

}

module.exports = DevoloContactSensor;
