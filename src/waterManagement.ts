import { addGuests } from './addGuests'
import { allotWater } from './allotWater'
import { bill } from './bill'
import {
  ADD_GUESTS,
  ALLOT_WATER,
  BILL,
  DELIMITER_CHAR,
  INPUT_SPILT_CHAR,
} from './constants'

export const waterManagement = (input: string) => {
  const inputFileds = input.trim().split(INPUT_SPILT_CHAR)
  let waterAllocated = 0
  let guests = 0
  let waterAllocatedToGuest = 0
  let corporationWater: number
  let borewellWater: number
  inputFileds.forEach((item: string) => {
    const inputValues: string[] = item.trim().split(DELIMITER_CHAR)
    const numberInputValues: number[] = inputValues.map(Number)
    switch (inputValues[0]) {
      case ALLOT_WATER:
        let waterRatio = inputValues[2].split(':')
        corporationWater = Number(waterRatio[0])
        borewellWater = Number(waterRatio[1])
        waterAllocated = allotWater(numberInputValues[1])
        break
      case ADD_GUESTS:
        guests = numberInputValues[1]
        waterAllocatedToGuest = waterAllocatedToGuest + addGuests(guests)
        break
      case BILL:
        const result = bill(
          waterAllocatedToGuest,
          waterAllocated,
          corporationWater,
          borewellWater
        )
        console.log(
          'TOTAL_WATER_CONSUMED_IN_LITERS TOTAL_COST',
          `${result.totalConsumption} ${result.finalBill} `
        )
        break
      default:
        console.error('Invalid command provided')
        break
    }
  })
}
