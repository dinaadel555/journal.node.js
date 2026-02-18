// create entry

exports.createEntry = (req, res) => {
    const entry = new Entry({   
        ...req.body,
userId : req.userId
    })
res.json(entry);
};


//get single entry

entry.findOne({_id: req.params.id, userId : req.userId}) 

// update

entry.findOneAndUpdate({_id: req.params.id, userId : req.userId}, 
    req.body, {new : true});


    // delete

entry.findOneAndDelete({_id: req.params.id, userId : req.userId});

// filter by tag

entry.find({tags : req.query.tag, userId : req.userId});
sort ({createdAt : -1})
