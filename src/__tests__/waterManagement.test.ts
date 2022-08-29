import { waterManagement } from '../waterManagement'
import * as fs from 'fs'
import * as helper from '../allotWater'
import * as guestHelper from '../addGuests'

describe('WaterManagement', () => {
  test('should call allotWater', () => {
    const inputData = fs.readFileSync('./inputFiles/input1.txt').toString()
    const mockAllotWater = jest.spyOn(helper, 'allotWater')
    waterManagement(inputData)
    expect(mockAllotWater).toHaveBeenCalledWith(2)
  })
  test('should call addGuests', () => {
    const inputData = fs.readFileSync('./inputFiles/input1.txt').toString()
    const mockAddGuests = jest.spyOn(guestHelper, 'addGuests')
    waterManagement(inputData)
    expect(mockAddGuests).toHaveBeenCalledTimes(2)
  })
  // TODO more test cases to be added for each usecase similar to above
})
