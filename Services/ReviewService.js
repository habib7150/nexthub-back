const Review = require('../Models/Review');

class ReviewService{
    async getAllReviews(){
        return await Review.findAll();
    }

    async getReviewById(reviewId){
        return await Review.findByPk(reviewId);
    }

    async addReview(reviewData){
        return await Review.create(reviewData);
    }

    async updateReview(reviewId, reviewData){
        const review = await Review.findByPk(reviewId);
        if(!review) throw new Error('Review not found');
        return await review.update(reviewData);
    }

    async deleteReview(reviewId){
        const review = await Review.findByPk(reviewId);
        if(!review) throw new Error('Review not found');
        return await review.destroy();
    }

}

module.exports = new ReviewService();