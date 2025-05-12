const { Router } = require('express')
const router = Router()

const middleware = (req, res, next) => {console.log('middleware'); next();}

// Страница регистрации
router.get('/', middleware, (req, res) => {
})

// Запрос на авторизацию
router.post('/', middleware, async (req, res) => {
})

// Выход
router.get('/logout', middleware)



module.exports = router