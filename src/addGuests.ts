import { waterAllocation } from './common/helper'
import { WATER_ALLOCATED_PER_PERSON } from './constants'

export const addGuests = (numberOfGuest: number) => {
  console.log('Add guests invoked')
  return waterAllocation(numberOfGuest, WATER_ALLOCATED_PER_PERSON, 30)
}
