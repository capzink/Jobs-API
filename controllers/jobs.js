const Job = require('../models/Job')
const {StatusCodes} =require('http-status-codes')
const {BadRequestError, NotFoundError}=require('../errors')

const createJob = async(req,res)=>{
    req.body.createdBy = req.user.userId
    const job = await Job.create(req.body)
    res.status(StatusCodes.CREATED).json({job})

}

const getJobs = (req, res) => {
    res.send("get all jobs");
};

const getSingleJob = (req, res) => {
    res.send("get a job");
};

const updateJob = (req, res) => {
    res.send("update jobs");
};

const deleteJob = (req, res) => {
    res.send("delete jobs");
};

module.exports = {
  createJob,
  getJobs,
  getSingleJob,
  updateJob,
  deleteJob,
};