'use strict';

describe('Service: churchList', function () {

  // load the service's module
  beforeEach(module('chfSitesApp'));

  // instantiate service
  var churchList;
  beforeEach(inject(function (_churchList_) {
    churchList = _churchList_;
  }));

  it('should do something', function () {
    expect(!!churchList).toBe(true);
  });

});
