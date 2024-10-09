import Process from "../Process.mjs";
import { RoundRobin } from "./RoundRobin.mjs";

const process = [
    new Process('111', 1, 600, 20, '10:00'),
    new Process('222', 2, 150, 10, '10:00'),
    new Process('333', 3, 450, 18, '10:00'),
    new Process('444', 4, 400, 15, '10:00'),
    new Process('555', 5, 550, 10, '10:00')
]

const execOrder = RoundRobin(process, 25, 5)

execOrder.forEach((process) => {
    console.log(process)
})