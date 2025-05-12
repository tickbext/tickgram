const { Router } = require('express')
const router = Router()

const middleware = (req, res, next) => {console.log('middleware'); next();}

// Страница регистрации
router.get('/', middleware, (req, res) => {

})

router.post('/', middleware, async (req, res) => {

})

module.exports = router