'use strict';

describe('Service: employees', function () {

  // load the service's module
  beforeEach(module('angularDemo2App'));

  // instantiate service
  var employees;
  beforeEach(inject(function (_employees_) {
    employees = _employees_;
  }));

  it('should do something', function () {
    expect(!!employees).toBe(true);
  });

});
