import { addGuests } from '../addGuests'
import * as helper from '../common/helper'

describe('AddGuests', () => {
  test('should call waterAllocation', () => {
    const mockWaterAllocation = jest.spyOn(helper, 'waterAllocation')
    addGuests(2)
    expect(mockWaterAllocation).toHaveBeenCalledWith(2, 10, 30)
  })
})
