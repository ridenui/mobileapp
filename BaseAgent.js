class BaseAgent {
  getIdentities(cb) {
    cb(new Error('Missing getIdentities() implementation'));
  }
  sign(pubKey, data, options, cb) {
    if (typeof options === 'function') cb = options;
    cb(new Error('Missing sign() implementation'));
  }
}

function isAgent(val) {
  return val instanceof BaseAgent;
}

module.exports = { BaseAgent, isAgent };
