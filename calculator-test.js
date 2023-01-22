
it('should calculate the monthly rate correctly', function () {
  uiValue = { amount: 20000, years: 5, rate: 5 };
  expect(calculateMonthlyPayment(uiValue)).toEqual('377.42');
});


it("should return a result with 2 decimal places", function () {
  uiValue = { amount: 20000, years: 5, rate: 5 };
  expect(calculateMonthlyPayment(uiValue)).toEqual('377.42');
});

it('should handle non default amount', function () {
  uiValue = { amount: 3000, years: 5, rate: 10 };
  expect(calculateMonthlyPayment(uiValue)).toEqual('63.74');
});

it('should handle very improbable values', function () {
  uiValue = { amount: 100, years: 100, rate: 4.5 };
  expect(calculateMonthlyPayment(uiValue)).toEqual('0.38');
});