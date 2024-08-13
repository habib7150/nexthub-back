const express = require('express');
const ReviewController = require('./Controllers/ReviewController');

const router = express.Router();

router.get('/',(request, response) => {ReviewController.getAllReview(request,response)});

router.get('/:id',(request, response) => {ReviewController.getReviewById(request,response)});

router.post('/',(request, response) => {ReviewController.addReview(request,response)});

router.put('/:id',(request, response) => {ReviewController.updateReview(request,response)});

router.delete('/:id',(request, response) => {ReviewController.deleteReview(request,response)});

module.exports = router;

