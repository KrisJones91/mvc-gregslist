import { ProxyState } from "../AppState.js";
import { jobsService } from "../Services/JobsService.js";

function _drawJobs() {
    let jobs = ProxyState.jobs
    let template = ''
    jobs.forEach(job => {
        template += job.Template
    })
    document.getElementById('jobs').innerHTML = template
}

export default class JobsController {
    constructor() {
        ProxyState.on("jobs", _drawJobs)

    }

    createJob() {
        window.event.preventDefault()
        console.log("creating a job")
        let form = window.event.target
        let newJob = {
            company: form['company'].value,
            jobTitle: form['jobTitle'].value,
            hours: form['hours'].value,
            rate: form['rate'].value,
            description: form['description'].value,
            imgUrl: form['imgUrl'].value
        }
        jobsService.createHouse(newJob)
        // @ts-ignore
        form.reset()
        // @ts-ignore
        document.getElementById("new-jobs-modal").modal('hide')
        _drawJobs()

    }






    deleteHouse(id) {
        jobsService.deleteJob(id)
    }
}