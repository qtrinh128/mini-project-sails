module.exports = {
    home: (req, res)=>{
        return res.send('xin chao the gioi');
    },
    login: (req, res)=>{
        return res.send('trang dang nhap');
    },
    signup: (req, res)=>{
        return res.send('trang dang ky');
    }
}