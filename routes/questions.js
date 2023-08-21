const express = require('express');
const {
    getQuestions,
    addQuestion, 
    updateQuestion,
    deleteQuestion,
    upvoteQuestion,
    downvoteQuestion
} =require('../controllers/questions')


const router = express.Router({mergeParams: true});
  
router
  .get('/getQuestions', getQuestions)
  .post('/addQuestion', addQuestion)
  .put('/updateQuestion/:id',updateQuestion)
  .delete('/deleteQuestion/:id',deleteQuestion)
  .patch('/upvoteQuestion/:id',upvoteQuestion)
  .patch('/downvoteQuestion/:id',downvoteQuestion)



module.exports = router;