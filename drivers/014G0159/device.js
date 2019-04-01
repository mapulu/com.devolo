'use strict';

const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

// Documentation: http://heating.danfoss.com/PCMPDF/44035v01.pdf

class DevoloThermostat extends ZwaveDevice {

	onMeshInit() {
		this.registerCapability('measure_battery', 'BATTERY');
		this.registerCapability('measure_temperature', 'SENSOR_MULTILEVEL');
		this.registerCapability('target_temperature', 'THERMOSTAT_SETPOINT');

		this.registerReportListener('CENTRAL_SCENE', 'CENTRAL_SCENE_NOTIFICATION', (report) => {
			if (report && report['Scene Number'] === 1) this.getDriver().buttonTrigger.trigger(this, null, null);
		});
	}

}

module.exports = DevoloThermostat;
