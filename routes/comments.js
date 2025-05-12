const { Router } = require('express')
const router = Router()

const middleware = () => {}

// Получить все комментарии по ID публикации
router.get('/:id', middleware, async (req, res) => {

})

// Добавить комментарий в БД
router.post('/:id', middleware, async (req, res) => {

})


module.exports = router