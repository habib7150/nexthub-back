const ReviewService = require('../Services/ReviewService');

class ReviewController {
    async getAllReviews(request, response) {
        try {
            const reviews = await ReviewService.getAllReviews();
            response.json(reviews);
        } catch (error) {
            response.status(500).json({ error: error.message });
        }
    }
    async getReviewById(request, response) {
        try {
            const review = await ReviewService.getReviewById(request.params.id);
            response.json(review);
        } catch (error) {
            response.status(500).json({ error: error.message });
        }
    }
    async addReview(request, response) {
        try {
            const review = await ReviewService.addReview(request.body);
            response.json(review);
        } catch (error) {
            response.status(500).json({ error: error.message });
        }
    }

    async updateReview(request, response) {
        try {
            const review = await ReviewService.updateReview(request.params.id, request.body);
            response.json(review);
        } catch (error) {
            response.status(500).json({ error: error.message });
        }
    }

    async deleteReview(request, response) {
        try {
            await ReviewService.deleteReview(request.params.id);
            response.status(204).send();
        } catch (error) {
            response.status(500).json({ error: error.message });
        }
    }
}

module.exports = new ReviewController();
