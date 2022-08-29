import { bill } from '../bill'

describe('Bill', () => {
  test('should return total amount of water consumed and cost when water consumed by guest is 1500L for 2BHK', () => {
    const result = bill(1500, 900, 3, 7)
    const expectedResult = {
      finalBill: 5215,
      totalConsumption: 2400,
    }
    expect(result).toEqual(expectedResult)
  })
  test('should return total amount of water consumed and cost when water consumed by guest is 1500L for 3BHK', () => {
    const result = bill(1500, 1500, 2, 1)
    const expectedResult = {
      finalBill: 5750,
      totalConsumption: 3000,
    }
    expect(result).toEqual(expectedResult)
  })
  test('should return total amount of water consumed and cost when water consumed by guest is 400L', () => {
    const result = bill(1500, 900, 2, 1)
    const expectedResult = {
      finalBill: 5050,
      totalConsumption: 2400,
    }
    expect(result).toEqual(expectedResult)
  })
  // TODO more test cases to be added for each usecase
})
