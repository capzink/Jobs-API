const createJob = (req,res)=>{
    res.send('create all jobs')

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