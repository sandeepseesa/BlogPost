module.exports = (req, res, next) => {
    // now middle ware checks when trying to submit form wheather mentioned conditions 
    // missing then user will be redirected to form page
    if(req.files == null || req.body.title == null || req.body.body == null ){
        return res.redirect('/posts/new')
    }
    next()
}