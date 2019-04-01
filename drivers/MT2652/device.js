'use strict';

const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

// http://products.z-wavealliance.org/products/1143

class DevoloSceneSwitch extends ZwaveDevice {

	onMeshInit() {

		this.registerCapability('measure_battery', 'BATTERY');

		this.registerReportListener('CENTRAL_SCENE', 'CENTRAL_SCENE_NOTIFICATION', (report) => {
			const button = report['Scene Number'];
			const scene = report['Key Attributes'];

			const state = {
            	button,
				scene,
			};

			this.getDriver().sceneFlowTrigger.trigger(this, null, state);
		});
	}
}

module.exports = DevoloSceneSwitch;
