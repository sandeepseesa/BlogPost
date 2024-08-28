const BlogPost = require('../models/BlogPost.js');
const path = require('path');

module.exports = async (req, res) => {
    try {
        // Check if an image is uploaded
        if (req.files && req.files.image) {
            // If an image is uploaded, handle it as before
            let image = req.files.image;
            await image.mv(path.resolve(__dirname, '..', 'public', 'assets', 'img', image.name));
            await BlogPost.create({
                ...req.body,
                image: '/assets/img/' + image.name,
                userid: req.session.userId
            });
        } else {
            // If no image is uploaded, create the blog post with an empty image field
            await BlogPost.create(req.body);
        }
        res.redirect('/');
    } catch (error) {
        console.error('Error creating blog post:', error);
        res.status(500).send('Error creating blog post');
    }
};
