'use strict';

var _ = require('.');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('replaces blacklisted words with asterisks', function () {
  return expect((0, _2.default)('The name of the NX will be the Nintendo Switch', ['switch'])).toBe('The name of the NX will be the Nintendo ***');
});

test('replaces multiple instances of blacklisted words', function () {
  return expect((0, _2.default)('The name of the NX will be the Nintendo Switch. The Switch will be awesome.', ['switch'])).toBe('The name of the NX will be the Nintendo ***. The *** will be awesome.');
});