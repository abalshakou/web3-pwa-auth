module.exports = (targets) => {
    const buildpackTargets = targets.of("@magento/pwa-buildpack");

    buildpackTargets.specialFeatures.tap((featuresByModule) => {
        featuresByModule["Web3Auth"] = {
            esModules: true,
        };
    });
};