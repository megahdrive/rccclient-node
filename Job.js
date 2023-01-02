class Job {
    constructor(id, expirationInSeconds = 10, category = 0, cores = 1) {
        this.id = id,
        this.expirationInSeconds = expirationInSeconds,
        this.category = category,
        this.cores = cores
    }
}

module.exports = Job;