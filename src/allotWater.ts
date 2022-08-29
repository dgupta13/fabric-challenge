import { waterAllocation } from './common/helper'
import { WATER_ALLOCATED_PER_PERSON } from './constants'
import { ApartmentType } from './types'

export const allotWater = (apartmentType: ApartmentType) => {
  console.log('Allocate water invoked')
  let consumptionPerPerson = 0
  switch (apartmentType) {
    case 2:
      consumptionPerPerson = waterAllocation(3, WATER_ALLOCATED_PER_PERSON, 30)
      break
    case 3:
      consumptionPerPerson = waterAllocation(5, WATER_ALLOCATED_PER_PERSON, 30)
      break
    default:
      console.log('No matching apartment type found')
  }
  return consumptionPerPerson
}
