const {
	addGroup, 
    updateGroup,
    addTeacherSubjectToGroup,
    unRelateGroupWithOneTeacherSubject,
    relateAllGroupOfTeacherSubjectsToGroup,
} = require('./handler');
const router = require('express').Router();
const isAuth = require('../../../utils/auth/jwtMiddleware');

router.post('/add', isAuth, addGroup);

router.put('/update/:id', isAuth, updateGroup);

router.post('/teacher-subject/add-one', isAuth, addTeacherSubjectToGroup);

router.delete('/teacher-subject/delete-one/:teacher_subject_id', unRelateGroupWithOneTeacherSubject);

router.post('/teacher-subject/add-all/:group_id', relateAllGroupOfTeacherSubjectsToGroup);

module.exports = router;