/*global describe, it */
'use strict';
var assert = require('assert');
var webhookTransformer = require('../');

describe('webhook-transformer node module', function () {
  it('must have at least one test', function () {
    webhookTransformer();
    assert(false, 'I was too lazy to write any tests. Shame on me.');
  });
});
