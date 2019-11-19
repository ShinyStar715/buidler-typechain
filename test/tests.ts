// tslint:disable-next-line no-implicit-dependencies
import { assert } from "chai";

import { useEnvironment } from "./helpers";

describe("Integration tests examples", function() {
  describe("Happy case", function() {
    this.timeout(120_000);
    useEnvironment(__dirname + "/buidler-project");

    it("Compiles and generates Typechain artifacts", async function() {
      try {
        await this.env.run("typechain");
        assert.isTrue(true);
      } catch (error) {
        assert.fail(error.message);
      }
    });
  });
});
