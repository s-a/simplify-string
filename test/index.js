"use strict";

require("should");
var simplifyString = require("../lib");
 
describe("simplify-string", function () {
  it("should simplify a string", function () {
    simplifyString("üöäÜÖÄ").should.equal("uoauoa");
    simplifyString("andrè").should.equal("andre");
    simplifyString("a ûnîcôrn likes honey").should.equal("aunicornlikeshoney");
  });
});
