const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    message = message.toUpperCase().replace(/[^A-Z]/g, "");
    key = key.toUpperCase();

    let result = "";
    let j = 0;

    for (let i = 0; i < message.length; i++) {
      const mi = this.alphabet.indexOf(message[i]);
      const ki = this.alphabet.indexOf(key[j]);

      if (mi === -1) {
        result += message[i];
      } else {
        const ci = (mi + ki) % this.alphabet.length;
        result += this.alphabet[ci];
        j = (j + 1) % key.length;
      }
    }

    return this.direct ? result : result.split("").reverse().join("");
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }

    encryptedMessage = encryptedMessage.toUpperCase().replace(/[^A-Z]/g, "");
    key = key.toUpperCase();

    let result = "";
    let j = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      const ci = this.alphabet.indexOf(encryptedMessage[i]);
      const ki = this.alphabet.indexOf(key[j]);

      if (ci === -1) {
        result += encryptedMessage[i];
      } else {
        const mi = (ci - ki + this.alphabet.length) % this.alphabet.length;
        result += this.alphabet[mi];
        j = (j + 1) % key.length;
      }
    }

    return this.direct ? result : result.split("").reverse().join("");
  }
}


module.exports = {
  VigenereCipheringMachine
};
