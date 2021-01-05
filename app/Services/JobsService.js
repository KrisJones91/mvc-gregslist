import { ProxyState } from "../AppState.js";
import Job from "../Models/Job.js";


class JobsService {
    deleteJob(id) {
        console.log(ProxyState.jobs)
        ProxyState.jobs = ProxyState.jobs.filter(job => job.id != id)
        console.log(ProxyState.jobs)
    }
    createHouse(newJob) {
        console.log("SERVICE: createHouse")
        let job = new Job(newJob)
        ProxyState.jobs = [...ProxyState.jobs, job]
    }

}

export const jobsService = new JobsService()