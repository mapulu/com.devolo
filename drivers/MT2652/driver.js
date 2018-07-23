'use strict';

const Homey = require('homey');

// http://products.z-wavealliance.org/products/1143

class DevoloDoubleSwitch extends ZwaveDevice {

	onMeshInit() {
		this.sceneFlowTrigger = new Homey.FlowCardTriggerDevice('mt2652_scene').register();

		this.registerCapability('measure_battery', 'BATTERY');
		this.registerReportListener('CENTRAL_SCENE', 'CENTRAL_SCENE_NOTIFICATION', (command, report) => {
            const triggerMap = {
                1: '1_single',
                2: '2_single',
                5: '3_single',
                6: '4_single',
            };

            const button = report['Scene Number'];
            const scene = report['Key Attributes'];

            const state = {
            	button,
				scene
			};

            this.sceneFlowTrigger.trigger(this, null, state);
		});
	}
}
