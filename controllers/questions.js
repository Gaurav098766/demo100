const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse')
const Question = require('../models/Questions');


exports.getQuestions = asyncHandler(async(req,res,next) => {
    const question = await Question.find();
    res.status(200).json({success:true,data:question});
})

exports.addQuestion = asyncHandler(async(req,res,next) => {
        const question = await Question.create(req.body);
        res.status(201).json({
            success:true,
            data:question
        })  
})

exports.updateQuestion = asyncHandler(async(req,res,next) => {
    const question = await Question.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
    });
    if(!question){
        return next(
            new ErrorResponse(`Question not found with id of ${req.params.id}`,404)
        );
    }
    res.status(200).json({ sucess: true, data:question});
})

exports.deleteQuestion = asyncHandler(async(req,res,next) => {
    const question  = await Question.findById(req.params.id);
    if(!question){
        return next(
            new ErrorResponse(`question not found with id of ${req.params.id}`,404)
        );
    }
    await question.deleteOne();
    res.status(200).json({ sucess: true ,data:{}});
})


exports.upvoteQuestion = asyncHandler(async (req, res, next) => {
  const { id, upvotes } = req.body;

  try {
    const question = await Question.findById(id);

    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }

    // Increment the upvotes count
    question.upvotes = question.upvotes + 1;

    // Save the updated question
    await question.save();

    pusher.trigger('questions', 'new-vote', {
      question: question,
    });

    return res.status(200).json({ message: 'Upvote successful' });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: 'Internal server error' });
  }
});


exports.downvoteQuestion = asyncHandler(async (req, res, next) => {
    const { id, downvotes } = req.body;
  
    try {
      const question = await Question.findOne({ _id: id });
  
      if (!question) {
        return res.status(404).json({ message: 'Question not found' });
      }
  
      await Question.updateOne(
        { _id: id },
        { $set: { downvotes: question.downvotes - downvotes } }
      );
  
    //   pusher.trigger('comments', 'new-vote', {
    //     comment: question,
    //   });
  
      return res.status(200).json({ message: 'downvote successful' });
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  });