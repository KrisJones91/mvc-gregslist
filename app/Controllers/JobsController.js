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
        _drawJobs()
        this.getJobs()
    }

    getJobs() {
        try {
            jobsService.getJobs()
        } catch (error) {
            console.error(error)
        }
    }

    createJobs() {
        window.event.preventDefault()
        console.log("creating a job")
        let form = window.event.target
        let newJob = {
            company: form['company'].value,
            jobTitle: form['jobTitle'].value,
            hours: form['hours'].value,
            rate: form['rate'].value,
            description: form['description'].value,

        }
        try {
            jobsService.createJobs(newJob)
        } catch (error) {
            console.error(error)
        }

        // @ts-ignore
        form.reset()
        // @ts-ignore
        $("#new-jobs-modal").modal('hide')
        _drawJobs()

    }

    deleteJobs(id) {
        try {
            jobsService.deleteJobs(id)
        } catch (error) {
            console.error(error)
        }
    }
}