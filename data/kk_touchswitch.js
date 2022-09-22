const fz = require('zigbee-herdsman-converters/converters/fromZigbee');
const tz = require('zigbee-herdsman-converters/converters/toZigbee');
const exposes = require('zigbee-herdsman-converters/lib/exposes');
const reporting = require('zigbee-herdsman-converters/lib/reporting');
const extend = require('zigbee-herdsman-converters/lib/extend');
const e = exposes.presets;
const ea = exposes.access;

const definition = {
    zigbeeModel: ['3AFE132000068643'],
    model: 'touchswitch',
    vendor: 'Konke',
    description: 'Touch switch',
    fromZigbee: [fz.on_off],
    toZigbee: [tz.on_off],
    exposes: [e.switch().withEndpoint('l1'), e.switch().withEndpoint('l2'), e.switch().withEndpoint('l3')],
    endpoint: (device) => {
        return {l1: 1, l2: 2, l3: 3};
    },
    meta: {multiEndpoint: true},
    configure: async (device, coordinatorEndpoint, logger) => {
        const endpoint1 = device.getEndpoint(1);
        await reporting.bind(endpoint1, coordinatorEndpoint, ['genOnOff']);
        const endpoint2 = device.getEndpoint(2);
        await reporting.bind(endpoint2, coordinatorEndpoint, ['genOnOff']);
        const endpoint3 = device.getEndpoint(3);
        await reporting.bind(endpoint3, coordinatorEndpoint, ['genOnOff']);
    },
};

module.exports = definition;