import * as fs from 'fs'
import { waterManagement } from './waterManagement'

//Reading from input files
const main = () => {
  try {
    const data = fs.readFileSync(process.argv[2]).toString()
    if (data) {
      waterManagement(data)
    } else {
      console.error('No input provided in the file')
    }
  } catch {
    console.error('Error while reading input file')
  }
}

//Invoking main function
main()
