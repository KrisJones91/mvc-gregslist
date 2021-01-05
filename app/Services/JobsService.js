import { ProxyState } from "../AppState.js";
import Job from "../Models/Job.js";
import { api } from "./AxiosService.js";


class JobsService {
    async getJobs() {
        let res = await api.get("jobs")
        console.log(res)
        ProxyState.jobs = res.data.map(j => new Job(j))
    }


    async createJobs(newJob) {
        let job = await api.post("jobs", newJob)
        console.log(job)
        ProxyState.jobs = [...ProxyState.jobs, new Job(job.data)]


        //OLD WAY
        // console.log("SERVICE: createHouse")
        // let job = new Job(newJob)
        // ProxyState.jobs = [...ProxyState.jobs, job]
    }

    async deleteJobs(id) {
        let res = await api.delete("jobs/" + id)
        this.getJobs()

        //OLD WAY
        // console.log(ProxyState.jobs)
        // ProxyState.jobs = ProxyState.jobs.filter(job => job.id != id)
        // console.log(ProxyState.jobs)
    }



}

export const jobsService = new JobsService()