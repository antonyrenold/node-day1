import {organize} from './organize.js'

const command = process.argv[2]
const path = process.argv[3]
if(command != 'organize' || !path){
    console.log("Invalid usage")
    process.exit(1)
}
await organize(path)