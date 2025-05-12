const { Router } = require('express')
const router = Router()

const middleware = (req, res, next) => {console.log('middleware'); next();}

// Главная страницаs
router.get('/', middleware, (req, res) => {
  res.render('index');
})

// Страница профиля
router.get('/profile', middleware, async (req, res) => {
  res.render('profile');
})

// Страница чужого профиля
router.get('/:nickname', middleware, async (req, res) => {
  res.render('profile');
})

module.exports = router