import Vue from "vue";
import VueVersions from "../src";

import assert from 'assert';

// var test = require('./index.js')

let v = new VueVersions()

let vers = v.getVersionNumber(Vue)

test('should add two numbers', () => {
    assert.equal(vers, '2.6.11')
})


