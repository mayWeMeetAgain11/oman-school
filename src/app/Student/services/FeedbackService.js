const { 
    FeedbackModel,
} = require('../../index');
const httpStatus = require('../../../../utils/httpStatus');

class Feedback {

    constructor(data) {
        this.student_id = data.student_id;
        this.content = data.content;
    }

    async add() {
        try {
            const feedback = await FeedbackModel.create(this);
            return {
                data: feedback,
                status: httpStatus.OK
            };
        } catch (error) {
            return {
                data: error.message,
                status: httpStatus.BAD_REQUEST
            }
        }
    }
    
    async update(id) {
        try {
            const feedback = await FeedbackModel.update(this, {
                where: {
                    id: id
                }
            });
            if (feedback == 1) {
                return {
                    data: "updated",
                    status: httpStatus.OK
                };
            } else {
                return {
                    data: "something went wrong!",
                    status: httpStatus.BAD_REQUEST
                };
            }
        } catch (error) {
            return {
                data: error.message,
                status: httpStatus.BAD_REQUEST
            }
        }
    }

}

module.exports = { Feedback };