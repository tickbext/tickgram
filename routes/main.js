const { Router } = require('express')
const router = Router()

const middleware = (req, res, next) => {console.log('middleware'); next();}


// Добавление публикации
router.post('/', middleware, (req, res) => {

})

// Изменение аватара
router.post('/avatar', middleware, (req, res) => {

})


module.exports = router