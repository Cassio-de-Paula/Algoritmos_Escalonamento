export function Priority(list, interval, contextTime) {
    let timer = 0
    let finished = []

    while (list.length > 0) {
        let maxPriority = Math.max(...list.map(process => process.priority))

        list.forEach((process) => {
            // checks priority
            if (process.priority == maxPriority && process.exec > 0) {
                // checks if its the first execution
                if (process.start == undefined) {
                    process.start = timer
                }

                // checks if the interval is greater than the execution time
                let execTime = Math.min(interval, process.exec)

                // executes the process
                process.exec -= execTime
                if (process.priority > 0) process.priority--
                
                // checks if the process is done
                if (process.exec == 0) {
                    timer += interval
                    finished.push(
                        {
                            process: process.pid,
                            start: `${process.start}ms`,
                            end: `${timer}ms`
                        }

                    )
                    list.splice(list.indexOf(process), 1)
                } else {
                    timer += interval + contextTime
                }
                console.log(process)
            }
        })
    }

    return finished
}