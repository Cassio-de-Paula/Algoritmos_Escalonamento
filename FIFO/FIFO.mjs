export function FIFO(list) {
    let timer = 0

    return list.map((process) => {
        let data = {
            process: process.pid,
            start: `${timer}ms`,
            finished: `${timer + process.exec}ms`
        }

        timer += process.exec

        return data
    })
}