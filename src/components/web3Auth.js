import React from "react";
import {useEffect, useState} from 'react';
import Button from '@magento/venia-ui/lib/components/Button';

const Web3Auth = () => {

    const [accounts, setAccounts] = useState([]);

    async function connectAccount() {
        if (typeof window.ethereum !== "undefined") {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }

    useEffect(() => {
        isConnected();
    }, []);

    async function isConnected() {
        const accounts = await ethereum.request({method: 'eth_accounts'});
        if (accounts.length) {
            console.log(`You're connected to: ${accounts[0]}`);
        } else {
            console.log("Metamask is not connected");
        }

        setAccounts(accounts);
    }

    return (
        <div className="Web3Auth">
            <Button
                priority="normal"
                type="button"
                onClick={connectAccount}
                data-cy="CreateAccount-initiateButton"
            >
                { accounts && accounts.length ?  'Metamask connected' : 'Connect Metamask'  }

            </Button>
        </div>
    );
};

export default Web3Auth;