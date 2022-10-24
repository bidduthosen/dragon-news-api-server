const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json');
const news = require('./data/news.json');



app.use(cors());
app.get('/' , (req, res)=>{
    res.send('Coming categories data');
})
app.get('/news-categories', (req, res)=>{
    res.send(categories);
})

// category news and dynamic id
app.get('/category/:id', (req, res)=>{
    const id = req.params.id;
    if(id === '08'){
        res.send(news)
    }
    else{
        const category_news = news.filter(n=> n.category_id === id);
        res.send(category_news);
    }
})
// news-----
app.get('/news', (req, res)=>{
    res.send(news);
})
app.get('/news/:id', (req, res)=>{
    const id = req.params.id;
    const selectNews = news.find(n=> n._id === id);
    res.send(selectNews)
})
app.listen(port, ()=>{
    console.log(`dragon news ${port}`)
})