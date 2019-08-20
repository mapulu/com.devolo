'use strict';

const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

// http://products.z-wavealliance.org/products/1143

class DevoloSceneSwitch extends ZwaveDevice {

	onMeshInit() {
		this.registerCapability('measure_battery', 'BATTERY');

		this.registerReportListener('CENTRAL_SCENE', 'CENTRAL_SCENE_NOTIFICATION', (report) => {
			if (!report.hasOwnProperty('Properties1')) return;

			const button = report['Scene Number'];
			const scene = report.Properties1['Key Attributes'];

			this.getDriver().sceneFlowTrigger.trigger(this, null, { button, scene });
		});
	}
}

module.exports = DevoloSceneSwitch;
