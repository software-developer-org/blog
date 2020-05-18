import {app} from './server.js';
import {path} from './server.js';

app.get('/', (req, res) => res.sendFile(path.join(__dirname+'/posts')));

app.get('/posts/:id', (req, res) => {
    const post = posts.find(c => c.id === parseInt(req.params.id));
    if (!post) return res.status(404).send('The post with the given id was not found.');
    res.send(post);
});

app.post('/posts', (req, res) => {
    const post = {
        id: posts.length + 1, 
        name: req.body.name
    };
    posts.push(post);
    res.send(post);
});

app.delete('/posts/:id', (req, res) => {
    const post = posts.find(c => c.id === parseInt(req.params.id));
    if (!post) return res.status(404).send('The post with the given ID was not found.');

    const index = posts.indexOf(post);
    posts.splice(index, 1);

    res.send(post);
});


/** 
app.put('/posts/:id', (req, res) => {
    const post = posts.find(c => c.id === parseInt(req.params.id));
    if (!post) return res.status(404).send('The post with the given ID was not found.');

    const { error } = validatePost(req.body);
    if(error) return res.status(400).send(result.error.details[0].message);

    post.name = req.body.name;
    res.send(post);
});
*/