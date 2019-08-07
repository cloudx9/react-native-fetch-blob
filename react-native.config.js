
module.exports = {
    project: {
        ios: {},
        android: {}, // grouped into "project"
    },
    assets: ['./path-to-assets'], // stays the same
    commands: [
        { "prelink": "node ./node_modules/react-native-fetch-blob/scripts/prelink.js" }
    ], // formerly "plugin", returns an array of commands
};
