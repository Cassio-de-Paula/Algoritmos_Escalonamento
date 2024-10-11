export function RoundRobin(list, interval, contextTime) {
    let finished = []
    let timer = 0

    while (finished.length < list.length) {
        list.forEach((process) => {
            // Verifica se é a primeira execução
            if (process.start === undefined) process.start = timer
            
            // Verifica se o tempo restante de execução é maior que o intervalo
            let execTime = Math.min(interval, process.exec)
            process.exec -= execTime
            timer += execTime

            // Verifica se o processo foi encerrado
            if (process.exec === 0) {
                if (!finished.includes(process)) {
                    process.end = timer
                    finished.push(process)
                }
            } else {
                // Salva o contexto
                timer += contextTime
            }
            console.log(process)
        })

    }
    
    return finished
}