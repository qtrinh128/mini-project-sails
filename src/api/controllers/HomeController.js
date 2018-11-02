module.exports = {
    home: (req, res)=>{
        return res.view('pages/home/homepage', {layout: 'layouts/home/main'});
    },
    login: (req, res)=>{
        return res.view('pages/admin/signin');
    },
    signup: (req, res)=>{
        return res.view('pages/admin/signup');
    }
}