'use strict';

const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

// http://products.z-wavealliance.org/products/1143

const TAMPER_TIMEOUT = 30*1000;

class DevoloContactSensor extends ZwaveDevice {

	onMeshInit() {
        this.setCapabilityValue('alarm_tamper', false);

		this.registerCapability('alarm_contact', 'SENSOR_BINARY');

        this.registerReportListener('SENSOR_BINARY', 'SENSOR_BINARY_REPORT', report => {
            if (!report || !report.hasOwnProperty('Sensor Value')  || !report.hasOwnProperty('Sensor Type')) return null;

            if (report['Sensor Type'] === 'Tamper' && report['Sensor Value'] === 'detected an event') {
                this.setCapabilityValue('alarm_tamper', true);
                this.tamperTimeOut = setTimeout(() => {
                    this.setCapabilityValue('alarm_tamper', false);
                }, TAMPER_TIMEOUT);
            }
        });

        this.registerCapability('measure_luminance', 'SENSOR_MULTILEVEL');
        this.registerCapability('measure_temperature', 'SENSOR_MULTILEVEL');
        this.registerCapability('measure_battery', 'BATTERY');

        this.registerSetting('basic_set_level', input => new Buffer([(input >= 100 && input < 255) ? 255 : input]));
    }

}

module.exports = DevoloContactSensor;
