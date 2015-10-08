var test = require('tape');
var vm = require('../')

test('null input', function (t) {
    t.plan(1);
    t.equal(0, vm());
});

test('empty string', function (t) {
    t.plan(1);
    t.equal(0, vm(''));
});

test('single good word', function(t) {
  t.plan(1);
  t.equal(vm('foo'), 0);
});

test('multiple good words', function(t) {
  t.plan(1);
  t.equal(vm('foo bar hello goodbye'), 0);
});

test('single bad word', function(t) {
  t.plan(1);
  t.equal(vm('fuck'), 1);
});

test('multiple bad words', function(t) {
  t.plan(1);
  t.equal(vm('fuck shit fuck'), 3);
});

test('word that looks bad but is actually good', function(t) {
  t.plan(1);
  t.equal(vm('scunthorpe'), 0);
});

test('capitalization', function(t) {
  t.plan(1);
  t.equal( vm('FUCK Shit CuNt MotherFucker'), 4);
});

test('bowderised words', function(t) {
  t.plan(1);
  t.equal(1, vm('s**t'));
});

test('bowlderised and legit bad words', function(t) {
  t.plan(1);
  t.equal(vm('f*****g shitting c**t'), 3);
});
