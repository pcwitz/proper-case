// unit tests
var expect = require('chai').expect;
var properCase = require('./index').properCase;

describe('properCase transformations', function() {
  beforeEach(function() {
    console.log('__START__');
  });

  afterEach(function() {
    console.log('__END__'); 
  });

  it('should handle apostrophe', function() {
    expect(properCase('o\'brien')).to.equal('O\'Brien');
  });

  it('should handle hyphen', function() {
    expect(properCase('jo-anne')).to.equal('Jo-Anne');
  });

  it('should handle camel', function() {
    expect(properCase('dePaola')).to.equal('DePaola');
  });

  it('should handle both apostrophes and spaces', function() {
    expect(properCase('ibn al-ahmed')).to.equal('Ibn Al-Ahmed');
  });
});