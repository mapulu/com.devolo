'use strict';

const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

class DevoloRadiatorThermostat extends ZwaveDevice {

	onMeshInit() {
		this.registerCapability('measure_battery', 'BATTERY');
		this.registerCapability('target_temperature', 'THERMOSTAT_SETPOINT');

		this.node.on('unknownReport', reportBuffer => {
			const sensorValue = (reportBuffer.readIntBE(4, 2)) / Math.pow(10, 2);

			this.setCapabilityValue('measure_temperature', sensorValue);
		});
	}

}


module.exports = DevoloRadiatorThermostat;
