import {
  TANKER_FIRST_SLAB_WATER_AMOUNT,
  TANKER_FIRST_SLAB_WATER_COST,
  TANKER_SECOND_SLAB_WATER_AMOUNT,
  TANKER_SECOND_SLAB_WATER_COST,
  TANKER_THIRD_SLAB_WATER_AMOUNT,
  TANKER_THIRD_SLAB_WATER_COST,
  TANKER_FOURTH_SLAB_WATER_COST,
} from './constants'

export const bill = (
  waterConsumedByGuests: number,
  waterConsumedByUnit: number,
  corporationWater: number,
  borewellWater: number
) => {
  console.log('Bill invoked')
  let guestBill = 0
  const maxFirstSlabCost =
    TANKER_FIRST_SLAB_WATER_AMOUNT * TANKER_FIRST_SLAB_WATER_COST
  const maxSecondSlabCost =
    (TANKER_SECOND_SLAB_WATER_AMOUNT - TANKER_FIRST_SLAB_WATER_AMOUNT) *
    TANKER_SECOND_SLAB_WATER_COST
  const maxThirdSlabCost =
    (TANKER_THIRD_SLAB_WATER_AMOUNT -
      (TANKER_SECOND_SLAB_WATER_AMOUNT + TANKER_FIRST_SLAB_WATER_AMOUNT)) *
    TANKER_THIRD_SLAB_WATER_COST
  switch (true) {
    case waterConsumedByGuests <= TANKER_FIRST_SLAB_WATER_AMOUNT:
      guestBill = waterConsumedByGuests * TANKER_FIRST_SLAB_WATER_COST
      break
    case TANKER_FIRST_SLAB_WATER_AMOUNT < waterConsumedByGuests &&
      waterConsumedByGuests <= TANKER_SECOND_SLAB_WATER_AMOUNT:
      const secondSlabWaterAmout =
        waterConsumedByGuests - TANKER_FIRST_SLAB_WATER_AMOUNT
      guestBill =
        secondSlabWaterAmout * TANKER_SECOND_SLAB_WATER_COST + maxFirstSlabCost
      break
    case TANKER_SECOND_SLAB_WATER_AMOUNT < waterConsumedByGuests &&
      waterConsumedByGuests <= TANKER_THIRD_SLAB_WATER_AMOUNT:
      const thirdSlabWaterAmout =
        waterConsumedByGuests - TANKER_SECOND_SLAB_WATER_AMOUNT
      guestBill =
        thirdSlabWaterAmout * TANKER_THIRD_SLAB_WATER_COST +
        maxFirstSlabCost +
        maxSecondSlabCost
      break
    case waterConsumedByGuests > TANKER_THIRD_SLAB_WATER_AMOUNT:
      const fourthSlabWaterAmout =
        waterConsumedByGuests - TANKER_THIRD_SLAB_WATER_AMOUNT
      guestBill =
        fourthSlabWaterAmout * TANKER_FOURTH_SLAB_WATER_COST +
        maxFirstSlabCost +
        maxSecondSlabCost +
        maxThirdSlabCost
      break
  }
  const finalBill = Math.ceil(
    ((waterConsumedByUnit * corporationWater) /
      (corporationWater + borewellWater)) *
      1 +
      ((waterConsumedByUnit * borewellWater) /
        (corporationWater + borewellWater)) *
        1.5 +
      guestBill
  )

  const totalAmount = waterConsumedByGuests + waterConsumedByUnit
  return {
    finalBill: finalBill,
    totalConsumption: totalAmount,
  }
}
