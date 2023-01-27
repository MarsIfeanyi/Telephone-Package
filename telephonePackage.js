/**
 * @title JavaScript Program to create a Telephone Package
 * @author Marcellus Ifeanyi
 * @notice This is the implementation of JavaScript Design Patterns
 * @dev This code uses the Observer Pattern to create a Telephone package
 */

class Telephone {
  constructor() {
    this.observers = new Set(); // set of observers

    this.phoneNumbers = []; // An array of phoneNumbers
  }

  // method to add phone number to the phoneNumbers Array
  AddPhoneNumber(phoneNumber) {
    this.phoneNumbers.push(phoneNumber);
  }

  // method to remove phone number from the phoneNumbers Array
  RemovePhoneNumber(phoneNumber) {
    this.phoneNumbers = this.phoneNumbers.filter((num) => num !== phoneNumber);
  }

  // method to dial only the phone numbers that are added in the phoneNumbers Array
  DialPhoneNumber(phoneNumber) {
    // if the phoneNumber is registered in the phoneNumbers Array, then call the notifyObservers method...
    if (this.phoneNumbers.includes(phoneNumber)) {
      this.notifyObservers(phoneNumber);
    } else {
      console.log("Requested Phone number not found.");
    }
  }

  // subscribing / adding an observer
  addObserver(observer) {
    this.observers.add(observer);
  }

  // unsubscribing / removing an observer
  removeObserver(observer) {
    this.observers.delete(observer);
  }

  // method that notifies an observer when a specific event occurs or changes
  notifyObservers(phoneNumber) {
    this.observers.forEach((observer) => observer.update(phoneNumber));
  }
}

class TelephoneObserver {
  update(phoneNumber) {
    this.viewObserver(phoneNumber);

    this.dialObserver(phoneNumber);
  }

  viewObserver = (phoneNumber) => {
    console.log(`PhoneNumber: ${phoneNumber}`);
  };

  dialObserver = (phoneNumber) => {
    console.log(`Dialling: Now Dialling ${phoneNumber}`);
  };
}

// creating a new instance of the Telephone class
const telephone = new Telephone();

// creating new instance of the TelephoneObserver class
const telephoneObserver = new TelephoneObserver();

telephone.addObserver(telephoneObserver);

console.log("\n");

telephone.AddPhoneNumber("2347023232");
telephone.DialPhoneNumber("2347023232");

console.log("\n");
