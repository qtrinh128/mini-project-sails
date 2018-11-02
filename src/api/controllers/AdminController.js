module.exports = {
    admin: (req, res)=>{
        res.view('pages/admin/dashboard', {layout: 'layouts/admin/main'});
    }
}