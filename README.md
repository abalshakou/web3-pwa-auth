# Authentication with Metamask Web3 Magento 2 PWA extension

This extension provide authentication with Metamask in PWA framework Magento 2 bootstraped on React.

![metamask-connected](https://user-images.githubusercontent.com/47149321/212402820-7e4c3b0a-9b2f-4931-accd-0f1189470174.jpg)

Functionality:

    Connect with ethereum networks by button in SignIn popup 

Technologies and Tools

    magento 2 PWA
    React.js with react hooks


For work download and add extension like this :

```shell
 yarn add file:/path/to/local/folder 
```

also you need add component in your src folder 

```shell
import React from "react";

import Web3Auth from "Web3Auth";

const Web3AuthDemo = () => {
    return <Web3Auth  />;
};

export default Web3AuthDemo;
```

and  add in your local-intercept.js this code 

```shell
function localIntercept(targets) {
    targets.of("@magento/venia-ui").routes.tap((routes) => {
        routes.push({
            name: "web3auth page",
            pattern: "/web3auth",
            exact: true,
            path: require.resolve(
                "../components/Web3AuthDemo/web3AuthDemo.js"
            ),
        });
        return routes;
    });
}

module.exports = localIntercept;


/* local-intercept.js */

// Import the Targetables manager
const { Targetables } = require("@magento/pwa-buildpack");

function localIntercept(targets) {
    // Create a bound Targetable factory
    const targetables = Targetables.using(targets);

    // Create a React component targetable linked to the signIn.js file
    const Web3AuthDetails = targetables.reactComponent(
        "@magento/venia-ui/lib/components/SignIn/signIn.js"
    );

    const Web3Auth = Web3AuthDetails.addImport("Web3Auth from 'Web3Auth'");

    Web3AuthDetails.appendJSX(
        "div className={classes.buttonsContainer}",
        `<Web3Auth />`
    );
}

module.exports = localIntercept;
```