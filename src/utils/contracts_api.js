// import { mainApp, getRef, listen } from '../constants/firebase_debug';
import {mainApp, getRef, listen} from '../constants/firebase';

let contractsRef,
    contractRef;

export const configureFirebase = () => {
    contractsRef = mainApp.database().ref("contracts");
}

export const configureContract = (id) => {
    contractRef = contractsRef.child(id);
}

export const fetchContract = () => {

    return getRef(contractRef);
}

export const saveContractName = (name) => {
    if(contractRef) {
        contractRef.child('name').set(name);
    }
}

export const saveContractAvailability = (availability) => {
    if(contractRef) {
        contractRef.child('availabilityString').set(availability);
    }
}

export const saveContract = (contract) => {
    if(contractRef) {
        contractRef.set(contract);
    }
}

configureFirebase();
