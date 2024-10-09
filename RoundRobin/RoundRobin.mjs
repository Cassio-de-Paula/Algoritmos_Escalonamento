export function RoundRobin(list, interval, contextTime) {
    let finished = []
    let timer = 0

    while (list.length > 0) {
        list.forEach((process) => {
            if (process.start == undefined) process.start = timer
            
            let execTime = Math.min(process.exec, interval)
            process.exec -= execTime

            if (process.exec == 0) {
                finished.push({
                    process: process.pid,
                    start: `${process.start}ms`,
                    end: `${timer}ms`
                })

                timer += interval

                list.splice(list.indexOf(process), 1)
            } else {
                timer += interval + contextTime
            }

            console.log(process)
        })
    }
    
    return finished
}