import Process from "../Process.mjs";
import { FIFO } from "./FIFO.mjs";

const process = [
    new Process('111', 1, 600, 20, '10:00'),
    new Process('222', 2, 150, 20, '10:00'),
    new Process('333', 3, 450, 20, '10:00'),
    new Process('444', 4, 400, 20, '10:00'),
    new Process('555', 5, 550, 20, '10:00')
]

const execOrder = FIFO(process)

execOrder.map((process) => {
    console.log(process)
})