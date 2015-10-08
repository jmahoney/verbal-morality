var test = require('tape');
var vm = require('../')

test('null input', function (t) {
    t.plan(1);
    t.equal(0, vm());
});

test('empty string', function (t) {
    t.plan(1);
    t.equal(0, vm(""));
});

test('single good word', function(t) {
  t.plan(1);
  t.equal(0, vm("foo"));
});

test('multiple good words', function(t) {
  t.plan(1);
  t.equal(0, vm("foo bar hello goodbye"));
});

test('single bad word', function(t) {
  t.plan(1);
  t.equal(1, vm("fuck"));
});

test('multiple bad words', function(t) {
  t.plan(1);
  t.equal(3, vm("fuck shit fuck"));
});

test('word that looks bad but is actually good', function(t) {
  t.plan(1);
  t.equal(0, vm('scunthorpe'));
});

test('capitalization', function(t) {
  t.plan(1);
  t.equal(4, vm("FUCK Shit CuNt MotherFucker"));
});
