import test from "node:test";
import assert from "node:assert";

import { greet } from "./hi.js";

test("greet", () => {
  assert.strictEqual(greet("esm"), "hi esm");
});
