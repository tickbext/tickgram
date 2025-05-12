
const { Router } = require('express')
const router = Router()

const middleware = (req, res, next) => {console.log('middleware'); next();}

// Получение информации о себе
router.get('/info', middleware, (req, res) => {

})

// Изменение информации о себе
router.post('/info', middleware, async (req, res) => {

})

// Лайк записи
router.post('/like/:post_id', middleware, async (req, res) => {

})

// Все айди лайкнутых записей
router.get('/likes', middleware, async (req, res) => {

})

// Кол-во лайков на записи
router.get('/likes/:id', async (req, res) => {

})

module.exports = router