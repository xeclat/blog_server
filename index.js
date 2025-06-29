const express = require('express')
const Blog = require('./models/blog')
const app = express()

app.use(express.json())

app.get('/api/blogs', (request, response) => {
  console.log('inside geeet')
  Blog.find({}).then((blogs) => {
    response.json(blogs)
  })
})

app.post('/api/blogs', (request, response) => {
  console.log('body', request)
  const blog = new Blog(request.body)

  blog.save().then((result) => {
    response.status(201).json(result)
  })
})

const PORT = 3003
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})