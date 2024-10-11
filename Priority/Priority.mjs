export function Priority(list, interval, contextTime) {
    let timer = 0
    let finished = []
    let lastExec 

    while (list.length > 0) {
        let maxPriority = Math.max(...list.map(process => process.priority))

        list.forEach((process) => {
            // Verifica a prioridade
            if (process.priority == maxPriority && process.exec > 0) {
                // Verifica se é a primeira execução para inserir o atributo de início
                if (process.start == undefined) process.start = timer

                // Verifica se o intervalo é maior que o tempo restante de execução, para não haver tempo de execução negativo
                let execTime = Math.min(interval, process.exec)

                // executes the process
                process.exec -= execTime
                timer += execTime

                if (process.priority > 0) process.priority--

                
                // Verifica se o processo foi encerrado
                if (process.exec == 0) {
                    // Adiciona o processo na lista de concluídos
                    finished.push(
                        {
                            process: process.pid,
                            start: `${process.start}ms`,
                            end: `${timer}ms`
                        }
                    )

                    list.splice(list.indexOf(process), 1)
                } else {
                    // Salva o contexto caso o processo não seja finalizado e não tenha maior prioridade
                    if (lastExec !== process) timer += contextTime
                }

                lastExec = process
                console.log(process)
            }
        })
    }

    return finished
}