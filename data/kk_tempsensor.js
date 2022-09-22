const fz = require('zigbee-herdsman-converters/converters/fromZigbee');
const tz = require('zigbee-herdsman-converters/converters/toZigbee');
const exposes = require('zigbee-herdsman-converters/lib/exposes');
const reporting = require('zigbee-herdsman-converters/lib/reporting');
const extend = require('zigbee-herdsman-converters/lib/extend');
const e = exposes.presets;
const ea = exposes.access;

const definition = {
    zigbeeModel: ['3AFE060103021000'], // The model ID from: Device with modelID 'lumi.sens' is not supported.
    model: '12345678', // Vendor model number, look on the device for a model number
    vendor: 'Konke', // Vendor of the device (only used for documentation and startup logging)
    description: 'Konke temperature & humidity sensor', // Description of the device, copy from vendor site. (only used for documentation and startup logging)
    fromZigbee: [fz.temperature,fz.humidity,fz.illuminance,fz.develco_voc_battery], // We will add this later
    toZigbee: [], // Should be empty, unless device can be controlled (e.g. lights, switches).
    exposes: [e.battery(), e.temperature(), e.humidity(),e.illuminance()], // Defines what this device exposes, used for e.g. Home Assistant discovery and in the frontend
};

module.exports = definition;