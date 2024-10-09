

class Process {
    constructor(pid, order, exec, priority, deadline) {
        this.pid = pid
        this.order = order
        this.exec = exec
        this.priority = priority
        this.deadline = deadline
    }
}

export default Process