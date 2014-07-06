/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";

const self = require("sdk/self");

exports["test self.data.load"] = assert => {

  assert.equal(self.data.load("data.md"),
               "# hello world\n",
               "paths work");

  assert.equal(self.data.load("./data.md"),
               "# hello world\n",
               "relative paths work");
};

require("sdk/test/runner").runTestsFromModule(module);
