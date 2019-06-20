var express = require('express');
var router = express.Router();
var md5 = require('md5');
var request = require('request');

const APPID = "wxdfae9e6726fc843e"
const SECRET = "bc903a970f4f4fef99d0b2061f2fc444"

const API_SECRET_KEY = 'github.com/cooleye'

var Advert = require('../Model/Advert');
var Discover = require('../Model/Discover');
var Cart = require('../Model/Cart');
var HotGoods = require('../Model/HotGoods');
var Category = require('../Model/Category');
var Cate = require('../Model/Cate');


/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});

//获取openid
router.get('/api/wechat/jscode2session', function(req, res) {
    var jsCode = req.query.jsCode;
    var nickName = req.query.nickName;

    var url = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + APPID + '&secret=' + SECRET + '&js_code=' + jsCode + '&grant_type=authorization_code';

    request({
        url: url,
        method: "GET",
        json: true,
        headers: {
            "content-type": "application/json",
        }
    }, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send({ expires_in: body.expires_in, openid: body.openid });
        }
    });
})

//查询广告列表
router.get('/api/adverts/list', async function(req, res) {
    let sign = req.query.sign;
    let TIMESTAMP = req.query.time;
    const SIGN = md5((TIMESTAMP + API_SECRET_KEY).toLowerCase())
    if (true) {

        try {
            var ad = await Advert.find();
            res.send({ "reason": "adver list", "code": "0", "list": ad })
        } catch (error) {
            res.send({ "msg": "invoke error...", "code": -200, "Success": true })
        }

    } else {
        res.send({ "msg": "invoke error...", "code": -200, "Success": true })
    }
})

//首页发现商品接口
router.get('/api/mall/discoverList', async function(req, res) {
    let sign = req.query.sign;
    let TIMESTAMP = req.query.time;
    const SIGN = md5((TIMESTAMP + API_SECRET_KEY).toLowerCase())
    if (true) {

        try {
            var dis = await Discover.find();
            res.send({ "reason": "hello Discover", "code": "0", "list": dis })
        } catch (error) {
            res.send({ "msg": "invoke error...", "code": -200, "Success": true })
        }
    } else {
        res.send({ "msg": "invoke error...", "code": -200, "Success": true })
    }
})

//商品分类--begin
//一级分类
router.get('/api/mall/rootCtegoryList', async function(req, res) {
    try {
        var cate = await Cate.find();
        res.send({ "reason": "", "code": "0", "list": cate })
    } catch (error) {
        res.send({ "msg": "invoke error...", "code": -200, "Success": true })
    }
})


//用户的购物车商品列表
router.get('/api/mall/goodsCart/list', async function(req, res) {

    var openid = req.query.openId;
    let sign = req.query.sign;
    let TIMESTAMP = req.query.time;
    const SIGN = md5((TIMESTAMP + API_SECRET_KEY).toLowerCase())

    try {
        var cartList = await Cart.find();
        var totalPrice = 0;
        for (let i = 0; i < cartList.length; i++) {
            totalPrice += cartList[i].priceSubtotal;
        }
        res.send({ "msg": "success", "code": "0", "totalPrice": totalPrice, "list": cartList });

    } catch (error) {
        res.send({ "msg": "invoke error...", "code": -200, "Success": true })
    }
})

//首页发现商品接口
router.get('/api/home/hostGoodsList', async function(req, res) {

    try {
        var hotGoods = await HotGoods.find();
        var cate = await Category.find();
        res.send({ "reason": "", "code": "0", "page_total": 4, "category": cate[0], "list": hotGoods })
    } catch (error) {
        reject({ "msg": "invoke error...", "code": -200, "Success": true })
    }

})

//查询商品详情信息
router.get('/api/mall/goods', function(req, res) {
    res.send({ "msg": "", "code": "0", "data": { "attrList": [], "brandName": "素洁", "businessId": "4028800457b6cf7a0157b7998c39001d", "businessName": "广州素洁服饰公司", "code": "d18c071", "detailInfo": "<p><img title=\"201803261615069604126.jpg\" alt=\"1_01.jpg\" src=\"http://sujiefs.com/upload/images/20180326/201803261615069604126.jpg\"/><img title=\"201803261615103257016.jpg\" alt=\"1_02.jpg\" src=\"http://sujiefs.com/upload/images/20180326/201803261615103257016.jpg\"/><img title=\"201803261616325663126.jpg\" alt=\"1_03.jpg\" src=\"http://sujiefs.com/upload/images/20180326/201803261616325663126.jpg\"/><img title=\"201803261615169165579.jpg\" alt=\"1_04.jpg\" src=\"http://sujiefs.com/upload/images/20180326/201803261615169165579.jpg\"/><img title=\"201803261615185587854.jpg\" alt=\"1_05.jpg\" src=\"http://sujiefs.com/upload/images/20180326/201803261615185587854.jpg\"/><img title=\"201803261615200697730.jpg\" alt=\"1_06.jpg\" src=\"http://sujiefs.com/upload/images/20180326/201803261615200697730.jpg\"/><img title=\"201803261615213831436.jpg\" alt=\"1_07.jpg\" src=\"http://sujiefs.com/upload/images/20180326/201803261615213831436.jpg\"/><img title=\"201803261615234781859.jpg\" alt=\"1_08.jpg\" src=\"http://sujiefs.com/upload/images/20180326/201803261615234781859.jpg\"/><img title=\"201803261615255997962.jpg\" alt=\"1_09.jpg\" src=\"http://sujiefs.com/upload/images/20180326/201803261615255997962.jpg\"/><img title=\"201803261615274002031.jpg\" alt=\"1_10.jpg\" src=\"http://sujiefs.com/upload/images/20180326/201803261615274002031.jpg\"/><img title=\"201803261615297822747.jpg\" alt=\"1_11.jpg\" src=\"http://sujiefs.com/upload/images/20180326/201803261615297822747.jpg\"/><img title=\"201803261615311892348.jpg\" alt=\"1_12.jpg\" src=\"http://sujiefs.com/upload/images/20180326/201803261615311892348.jpg\"/><img title=\"201803261615326556396.jpg\" alt=\"1_13.jpg\" src=\"http://sujiefs.com/upload/images/20180326/201803261615326556396.jpg\"/><img title=\"201803261615340054544.jpg\" alt=\"1_14.jpg\" src=\"http://sujiefs.com/upload/images/20180326/201803261615340054544.jpg\"/><img title=\"201803261615357590535.jpg\" alt=\"1_15.jpg\" src=\"http://sujiefs.com/upload/images/20180326/201803261615357590535.jpg\"/><\/p>", "evaluateCount": 0, "freeShipNum": 0, "freight": 0, "goodsSkuId": "2c9257a16136c3d601626161c4613275", "goodsSkuList": [{ "goodsCode": "d18c071", "goodsId": "2c9257a16136c3d601626161c44e326f", "id": "2c9257a16136c3d601626161c4613275", "price": 138, "saleCount": 0, "skuNameIds": "[1404]", "skuNames": "[\"尺码\"]", "skuValIds": "[3466]", "skuVals": "[\"S\"]", "stockNum": 100, "stockNumWarn": 0 }, { "goodsCode": "d18c071", "goodsId": "2c9257a16136c3d601626161c44e326f", "id": "2c9257a16136c3d601626161c4633276", "price": 138, "saleCount": 0, "skuNameIds": "[1404]", "skuNames": "[\"尺码\"]", "skuValIds": "[3467]", "skuVals": "[\"M\"]", "stockNum": 100, "stockNumWarn": 0 }, { "goodsCode": "d18c071", "goodsId": "2c9257a16136c3d601626161c44e326f", "id": "2c9257a16136c3d601626161c4653277", "price": 138, "saleCount": 0, "skuNameIds": "[1404]", "skuNames": "[\"尺码\"]", "skuValIds": "[3468]", "skuVals": "[\"L\"]", "stockNum": 100, "stockNumWarn": 0 }], "goodsSkuNameList": [{ "skuName": "尺码", "skuValList": [{ "current": true, "skuVal": "S", "skuNameId": 1404, "skuValId": 3466 }, { "current": false, "skuVal": "M", "skuNameId": 1404, "skuValId": 3467 }, { "current": false, "skuVal": "L", "skuNameId": 1404, "skuValId": 3468 }], "skuNameId": 1404 }], "goodsSkuValIds": [3466], "goodsSkuVals": ["S"], "id": "2c9257a16136c3d601626161c44e326f", "logo": "http://sujiefs.com/upload/images/20180326/201803261614006088842.jpg", "marketPrice": 199, "minBuyNum": 3, "name": "2018韩版时尚优雅气质连衣裙d18c071", "photoList": [{ "goodsId": "2c9257a16136c3d601626161c44e326f", "id": "2c9257a16136c3d601626163ce753278", "photo": "http://sujiefs.com/upload/images/20180326/201803261614006088842.jpg", "thumPhoto": "http://sujiefs.com/upload/images/20180326/201803261614006088842_thumbnail.jpg" }, { "goodsId": "2c9257a16136c3d601626161c44e326f", "id": "2c9257a16136c3d601626163ce773279", "photo": "http://sujiefs.com/upload/images/20180326/201803261614032452183.jpg", "thumPhoto": "http://sujiefs.com/upload/images/20180326/201803261614032452183_thumbnail.jpg" }, { "goodsId": "2c9257a16136c3d601626161c44e326f", "id": "2c9257a16136c3d601626163ce7a327a", "photo": "http://sujiefs.com/upload/images/20180326/201803261614055803221.jpg", "thumPhoto": "http://sujiefs.com/upload/images/20180326/201803261614055803221_thumbnail.jpg" }, { "goodsId": "2c9257a16136c3d601626161c44e326f", "id": "2c9257a16136c3d601626163ce7c327b", "photo": "http://sujiefs.com/upload/images/20180326/201803261614153440053.jpg", "thumPhoto": "http://sujiefs.com/upload/images/20180326/201803261614153440053_thumbnail.jpg" }, { "goodsId": "2c9257a16136c3d601626161c44e326f", "id": "2c9257a16136c3d601626163ce7f327c", "photo": "http://sujiefs.com/upload/images/20180326/201803261614182232294.jpg", "thumPhoto": "http://sujiefs.com/upload/images/20180326/201803261614182232294_thumbnail.jpg" }], "price": 138, "saleCount": 59, "shareAmount": 3, "shareTimes": 5, "shareTips": "此商品分享5个好友，付款立减3元！", "sourceFlag": 1, "startTime": "2018-03-26 16:16:59", "status": 1, "stockNum": 100, "thumLogo": "http://sujiefs.com/upload/images/20180326/201803261614006088842_thumbnail.jpg", "validEndTime": "2021-03-26 16:12:07", "wholeNum": 3, "wholePrice": 135 }, "validDate": 1 })
})


//商品加入购物车
router.get('/api/mall/goodsCart/add', async function(req, res) {

    var openid = req.query.openId;
    var goodsId = req.query.goodsId;
    var goodsSkuId = req.query.goodsSkuId;
    var purchaseType = req.query.purchaseType;
    var num = req.query.num;
    var sign = req.query.sign;
    var time = req.query.time;

    try {
        var good = await HotGoods.find({ id: goodsId })
        good = good[0];
        var priceSubtotal = (num - 0) * (good.price - 0);

        var cart = new Cart({
            goodsId: goodsId,
            goodsName: good.name,
            ischecked: true,
            thumLogo: good.logo,
            goodsSkuValName: goodsSkuId,
            type: purchaseType,
            price: good.price,
            num: num,
            priceSubtotal: priceSubtotal
        })

        try {
            var result = await cart.save();
            console.log('加入购物车成功', result)
            res.send({ "result": result, "msg": "加入购物车成功", "code": 0 })
        } catch (error) {
            console.log('加入购物车失败', error)
            res.send({ "result": "002", "msg": error, "code": -1 })
        }

    } catch (error) {
        console.log('查询失败：', error)
        res.send({ "result": "002", "msg": error, "code": -1 })
    }
})



//更新购物车数量
router.get('/api/mall/goodsCart/updateNum', async function(req, res) {

        var id = req.query.id;
        var num = req.query.num;
        console.log('id:', id)
        console.log('num:', num);
        try {
            var result = await Cart.updateOne({ _id: id }, { num: num });
            res.send({ code: 0, msg: "success", data: result })
        } catch (error) {
            res.send({ "result": "002", "msg": error, "code": -1 })
        }

    })
    //购物车删除商品
router.get('/api/mall/goodsCart/delete', async function(req, res) {

        var id = req.query.id;
        try {
            var result = await Cart.remove({ _id: id });
            console.log('删除购物车数据：', result)
            res.send({ code: 0, msg: "success", data: result })
        } catch (error) {
            res.send({ "result": "002", "msg": error, "code": -1 })
        }

    })
    //购物车全选
router.get('/api/mall/goodsCart/checkAll', async function(req, res) {
    var check = req.query.check;
    check = check == 1 ? true : false
    try {
        var result = await Cart.update({}, { ischecked: check });
        res.send({ code: 0, msg: "success", data: result })
    } catch (error) {
        res.send({ "result": "002", "msg": error, "code": -1 })
    }
})

//商品选择状态
router.get('/api/mall/goodsCart/check', async function(req, res) {

    var id = req.query.id;
    var ischecked = req.query.ischecked;
    try {
        var result = await Cart.update({ _id: id }, { ischecked: ischecked });
        console.log('状态更新：', result)
        res.send({ code: 0, msg: "success", data: result })
    } catch (error) {
        console.log('状态更新error：', error)
        res.send({ "result": "002", "msg": error, "code": -1 })
    }

})

router.get('/api/mall/goodsOrder/commitData', function(req, res) {

    Cart.find({}, function(err, result) {
        if (err) {
            res.send({ "msg": "invoke error...", "code": -200, "Success": true })
        } else {
            res.send({
                goodsList: result,
                totalPrice: 999,
                actualPrice: 999,
                hasDefaultAddress: false,
                defaultAddress: "",
                userScore: 100,
                canUseScore: true,
                deduScore: 0,
                deduFee: 0,
                jf_num: 10,
                reduce_fee: 0.1,
                code: 0,
                msg: "success"
            })
        }
    })

})

//支付前生成订单
router.get('/api/mall/goodsOrder/saveByCart', async function(req, res) {
    // var openId = req.query.openId;
    // var receiverInfoId = req.query.receiverInfoId;
    // var businessMessage = req.query.businessMessage;
    // var formId = req.query.formId;
    // var reduceScore = req.query.reduceScore;


    //清空购物车
    try {
        var result = await Cart.remove({});
        console.log(result)
        res.send({ msg: "success", code: 0, result: result })
    } catch (error) {
        res.send({ msg: error, code: 0, })
    }
})

module.exports = router;