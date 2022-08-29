import { allotWater } from '../allotWater'

describe('AllotWater', () => {
  test('should return water consumed per person for 2BHK apartment', () => {
    const consumedWater = allotWater(2)
    expect(900).toEqual(consumedWater)
  })
  test('should return water consumed per person for 3BHK apartment', () => {
    const consumedWater = allotWater(3)
    expect(1500).toEqual(consumedWater)
  })
})
