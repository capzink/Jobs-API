const Job = require('../models/Job')
const {StatusCodes} =require('http-status-codes')
const {BadRequestError, NotFoundError}=require('../errors')

const createJob = async(req,res)=>{
    req.body.createdBy = req.user.userId
    const job = await Job.create(req.body)
    res.status(StatusCodes.CREATED).json({job})

}

const getJobs = async (req, res) => {
    const jobs =await Job.find({createdBy:req.user.userId}).sort('createdAt') //jobs created by user
    res.status(StatusCodes.OK).json({jobs, count:jobs.length})
};

const getSingleJob = async (req, res) => {
    const {user:{userId }, params:{id:jobId}}=req
    const job = await Job.findOne({_id:jobId, createdBy:userId})

    if(!job){
        throw new NotFoundError('No job found with this Id')
    }

   res.status(StatusCodes.OK).json({ job, count: job.length });

 
};

const updateJob = async (req, res) => {
    res.send("update jobs");
};

const deleteJob = async (req, res) => {
    res.send("delete jobs");
};

module.exports = {
  createJob,
  getJobs,
  getSingleJob,
  updateJob,
  deleteJob,
};