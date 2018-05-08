const express = require('express');
const router = express.Router();
const {models} = require("../models/index");


const creditsController = function(req, res, next){
	res.render('credits');
}

const quizController = function(req, res, next){
	models.quiz.findAll()
    .then(quizzes => {
            res.render('quizzes/index', {quizzes: quizzes});
    })
}

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render('index');
});

/* Credits page. */
router.get('/credits', creditsController);

/* Quizzes page. */
router.get('/quizzes', quizController);

module.exports = router;
