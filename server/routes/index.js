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

//查询广告列表
router.get('/api/adverts/list', function(req, res) {
    let sign = req.query.sign;
    let TIMESTAMP = req.query.time;
    const SIGN = md5((TIMESTAMP + API_SECRET_KEY).toLowerCase())
    if (true) {

        Advert.find(function(err, result) {
            if (err) {
                res.send({ "msg": "invoke error...", "code": -200, "Success": true })
            } else {
                res.send({ "reason": "adver list", "code": "0", "list": result })
            }
        })

    } else {
        res.send({ "msg": "invoke error...", "code": -200, "Success": true })
    }
})

//首页发现商品接口
router.get('/api/mall/discoverList', function(req, res) {
    let sign = req.query.sign;
    let TIMESTAMP = req.query.time;
    const SIGN = md5((TIMESTAMP + API_SECRET_KEY).toLowerCase())
    if (true) {
        Discover.find(function(err, result) {
            if (err) {
                res.send({ "msg": "invoke error...", "code": -200, "Success": true })
            } else {
                res.send({ "reason": "hello Discover", "code": "0", "list": result })
            }
        })
    } else {
        res.send({ "msg": "invoke error...", "code": -200, "Success": true })
    }
})

//商品分类--begin
//一级分类
router.get('/api/mall/rootCtegoryList', function(req, res) {

        Cate.find(function(err, result) {
            if (err) {
                res.send({ "msg": "invoke error...", "code": -200, "Success": true })
            } else {

                res.send({ "reason": "", "code": "0", "list": result })
            }
        })
    })
    //二级三级分类
router.get('/api/mall/childGoodsCatetoryList', function(req, res) {
    res.send({ "msg": "", "code": "0", "list": [{ "secondCategory": { "code": "004009", "name": "风衣", "thumLogo": "http://sujiefs.com/upload/images/20171006/201710061145211681060_thumbnail.jpg" }, "thirdCategoryList": [] }, { "secondCategory": { "code": "004003", "name": "T恤", "thumLogo": "http://sujiefs.com/upload/images/20170816/201708161803198792334_thumbnail.jpg" }, "thirdCategoryList": [] }, { "secondCategory": { "code": "004007", "name": "衬衫", "thumLogo": "http://sujiefs.com/upload/images/20170816/201708161804083693788_thumbnail.jpg" }, "thirdCategoryList": [] }, { "secondCategory": { "code": "004010", "name": "针织衫", "thumLogo": "http://sujiefs.com/upload/images/20170819/201708192132126698260_thumbnail.jpg" }, "thirdCategoryList": [] }] })
})

//用户的购物车商品列表
router.get('/api/mall/goodsCart/list', function(req, res) {

    var openid = req.query.openId;
    let sign = req.query.sign;
    let TIMESTAMP = req.query.time;
    const SIGN = md5((TIMESTAMP + API_SECRET_KEY).toLowerCase())

    Cart.find({}, function(err, result) {
        if (err) {
            res.send({ "msg": "invoke error...", "code": -200, "Success": true })
        } else {
            // res.send(result)
            // res.send({ "reason": "hello", "code": "0", "list": result })
            res.send({ "msg": "success", "code": "0", "totalPrice": 16, "list": result });

        }
    })


})

//用户是否绑定手机号
router.get('/api/userCenter/getUserInfo', function(req, res) {
    res.send({ "code": 0, "user": null });
})

//首页发现商品接口
router.get('/api/home/hostGoodsList', async function(req, res) {

    function getHotGoods() {

        return new Promise(function(resolve, reject) {
            HotGoods.find(function(err, result) {
                if (err) {
                    reject({ "msg": "invoke error...", "code": -200, "Success": true })
                } else {
                    resolve(result)
                }

            })

        })

    }

    function getCategory() {

        return new Promise(function(resolve, reject) {
            Category.find(function(err, result) {
                if (err) {
                    reject({ "msg": "invoke error...", "code": -200, "Success": true })
                } else {
                    resolve(result)
                }

            })

        })

    }

    try {
        var hotGoods = await getHotGoods();
        var cate = await getCategory();
        res.send({ "reason": "", "code": "0", "page_total": 4, "category": cate[0], "list": hotGoods })
    } catch (error) {
        reject({ "msg": "invoke error...", "code": -200, "Success": true })
    }



    // res.send({ "reason": "", "code": "0", "page_total": 4, "category": { "code": "019", "name": "2017秋冬新上市", "logo": "http://sujiefs.com/upload/images/20171229/201712291639552483183.jpg", "id": "2c9257a15f37e432015f8feb59230c8c", "attrs": [{ "attrValList": [{ "attrName": "品牌", "attrNameId": 204, "attrVal": "素洁", "id": 547 }], "attrName": { "attrName": "品牌", "categoryCode": "019", "id": 204 } }, { "attrValList": [{ "attrName": "年份季节", "attrNameId": 205, "attrVal": "2017年冬季", "id": 548 }], "attrName": { "attrName": "年份季节", "categoryCode": "019", "id": 205 } }] }, "list": [{ "marketPrice": 170, "saleCount": 35, "businessName": "广州素洁服饰公司", "businessId": "4028800457b6cf7a0157b7998c39001d", "thumLogo": "http://sujiefs.com/upload/images/20171104/201711041932425797386_thumbnail.jpg", "title": "2017秋冬新款第三波 韩版女装秋季新款系带条纹长袖衬衫", "evaluateCount": 0, "price": 68, "name": "新款系带条纹长袖衬衫 T17D807", "stockNum": 900, "wholePrice": 63, "logo": "http://sujiefs.com/upload/images/20171104/201711041932425797386.jpg", "id": "2c9257a15f37e432015f86d624980b73" }, { "marketPrice": 170, "saleCount": 76, "businessName": "广州素洁服饰公司", "businessId": "4028800457b6cf7a0157b7998c39001d", "thumLogo": "http://sujiefs.com/upload/images/20171104/201711041906545460701_thumbnail.jpg", "title": "2017秋冬新款第三波 韩版宽松性感挂脖露肩衬衫韩国女装长袖衬衣漏肩上衣", "evaluateCount": 0, "price": 68, "name": "韩版性感挂脖露肩衬衫长袖  T17D802", "stockNum": 1599, "wholePrice": 62, "logo": "http://sujiefs.com/upload/images/20171104/201711041906545460701.jpg", "id": "2c9257a15f37e432015f86bf1a860b33" }, { "marketPrice": 169, "saleCount": 94, "businessName": "广州素洁服饰公司", "businessId": "4028800457b6cf7a0157b7998c39001d", "thumLogo": "http://sujiefs.com/upload/images/20170920/201709201433471208811_thumbnail.jpg", "title": "2017秋冬新款第二波 金丝绒阔腿裤宽松大码直筒休闲校服裤", "evaluateCount": 0, "price": 68, "name": "金丝绒阔腿裤宽松大码直筒休闲校服裤 P17D618", "stockNum": 3984, "wholePrice": 62, "logo": "http://sujiefs.com/upload/images/20170920/201709201433471208811.jpg", "id": "2c9257a15e997bee015e9e1065090189" }, { "marketPrice": 198, "saleCount": 66, "businessName": "广州素洁服饰公司", "businessId": "4028800457b6cf7a0157b7998c39001d", "thumLogo": "http://sujiefs.com/upload/images/20171104/201711041729055073008_thumbnail.jpg", "title": "2017秋冬新款第三波 新款金丝绒阔腿裤女长裤黑色开叉竖条纹松紧腰休闲运动裤", "evaluateCount": 0, "price": 69, "name": "金丝绒阔腿裤黑色开叉竖条纹松紧腰休闲 P17D801", "stockNum": 1200, "wholePrice": 63, "logo": "http://sujiefs.com/upload/images/20171104/201711041729055073008.jpg", "id": "2c9257a15f37e432015f86640ded0afc" }, { "marketPrice": 269, "saleCount": 69, "businessName": "广州素洁服饰公司", "businessId": "4028800457b6cf7a0157b7998c39001d", "thumLogo": "http://sujiefs.com/upload/images/20171104/201711041743482116501_thumbnail.jpg", "title": "2017秋冬新款第三波 新款韩版宽松高腰金丝绒背带阔腿裤女秋季丝绒九分背带裤", "evaluateCount": 0, "price": 78, "name": "金丝绒背带阔腿裤 P17D803", "stockNum": 1500, "wholePrice": 72, "logo": "http://sujiefs.com/upload/images/20171104/201711041743482116501.jpg", "id": "2c9257a15f37e432015f8671e8900b10" }, { "marketPrice": 239, "saleCount": 54, "businessName": "广州素洁服饰公司", "businessId": "4028800457b6cf7a0157b7998c39001d", "thumLogo": "http://sujiefs.com/upload/images/20171104/201711041959590174374_thumbnail.jpg", "title": "2017秋冬新款第三波 网红同款毛茸茸宽松百搭长袖针织衫", "evaluateCount": 0, "price": 79, "name": "网红同款毛茸茸宽松百搭长袖针织衫 T17D810", "stockNum": 4499, "wholePrice": 75, "logo": "http://sujiefs.com/upload/images/20171104/201711041959590174374.jpg", "id": "2c9257a15f37e432015f86ec60510ba6" }, { "marketPrice": 169, "saleCount": 507, "businessName": "广州素洁服饰公司", "businessId": "4028800457b6cf7a0157b7998c39001d", "thumLogo": "http://sujiefs.com/upload/images/20170814/201708141445064387894_thumbnail.jpg", "title": "2017新款秋季外套女装气质修身系带收腰风衣女中长款休闲薄款大衣", "evaluateCount": 0, "price": 79, "name": "气质修身系带收腰风衣女中长款休闲薄款大衣SJ20170810-16", "stockNum": 2507, "wholePrice": 75, "logo": "http://sujiefs.com/upload/images/20170814/201708141445064387894.jpg", "id": "2c9257a15dddc960015ddf81837e0045" }, { "marketPrice": 199, "saleCount": 326, "businessName": "广州素洁服饰公司", "businessId": "4028800457b6cf7a0157b7998c39001d", "thumLogo": "http://sujiefs.com/upload/images/20170828/201708281101095363007_thumbnail.jpg", "title": "2017秋季新款 时尚洋气系带翻领长袖外套", "evaluateCount": 0, "price": 88, "name": "时尚洋气系带翻领长袖外套 J17D514", "stockNum": 674, "wholePrice": 82, "logo": "http://sujiefs.com/upload/images/20170828/201708281101095363007.jpg", "id": "2c9257a15e235086015e26cdc20c0083" }, { "marketPrice": 368, "saleCount": 0, "businessName": "广州素洁服饰公司", "businessId": "4028800457b6cf7a0157b7998c39001d", "thumLogo": "http://sujiefs.com/upload/images/20171106/201711061144221576532_thumbnail.jpg", "title": "2017秋冬新款第三波 韩版纯色套头刺绣毛衣女宽松打底短款长袖针织衫", "evaluateCount": 0, "price": 89, "name": "韩版纯色刺绣毛衣 T17D816", "stockNum": 2000, "wholePrice": 83, "logo": "http://sujiefs.com/upload/images/20171106/201711061144221576532.jpg", "id": "2c9257a15f37e432015f8f781ec50c81" }, { "marketPrice": 259, "saleCount": 1, "businessName": "广州素洁服饰公司", "businessId": "4028800457b6cf7a0157b7998c39001d", "thumLogo": "http://sujiefs.com/upload/images/20171104/201711041956313135978_thumbnail.jpg", "title": "2017秋冬新款第三波 古金色梅花刺绣设计感光泽黑色长袖宽松廓形衬衫女", "evaluateCount": 0, "price": 89, "name": "古金色梅花刺绣宽松廓形衬衫 T17D815", "stockNum": 499, "wholePrice": 81, "logo": "http://sujiefs.com/upload/images/20171104/201711041956313135978.jpg", "id": "2c9257a15f37e432015f86e8ffbb0ba0" }] })
})

//查询商品列表
router.get('/api/mall/searchGoodsList', function(req, res) {

    HotGoods.find(function(err, result) {
        if (err) {
            reject({ "msg": "invoke error...", "code": -200, "Success": true })
        } else {
            res.send({ "reason": "", "code": "0", "page_total": 4, "pageSize": 10, "list": result, "totalCount": 34, "pageNum": 1 })
        }
    })

})

//查询关键字保存
router.get('/api/searchkeyword/add', function(req, res) {
    res.send({ "msg": null, "code": 0 });
})

//查询商品详情信息
router.get('/api/mall/goods', function(req, res) {
        res.send({ "msg": "", "code": "0", "data": { "attrList": [], "brandName": "素洁", "businessId": "4028800457b6cf7a0157b7998c39001d", "businessName": "广州素洁服饰公司", "code": "d18c071", "detailInfo": "<p><img title=\"201803261615069604126.jpg\" alt=\"1_01.jpg\" src=\"http://sujiefs.com/upload/images/20180326/201803261615069604126.jpg\"/><img title=\"201803261615103257016.jpg\" alt=\"1_02.jpg\" src=\"http://sujiefs.com/upload/images/20180326/201803261615103257016.jpg\"/><img title=\"201803261616325663126.jpg\" alt=\"1_03.jpg\" src=\"http://sujiefs.com/upload/images/20180326/201803261616325663126.jpg\"/><img title=\"201803261615169165579.jpg\" alt=\"1_04.jpg\" src=\"http://sujiefs.com/upload/images/20180326/201803261615169165579.jpg\"/><img title=\"201803261615185587854.jpg\" alt=\"1_05.jpg\" src=\"http://sujiefs.com/upload/images/20180326/201803261615185587854.jpg\"/><img title=\"201803261615200697730.jpg\" alt=\"1_06.jpg\" src=\"http://sujiefs.com/upload/images/20180326/201803261615200697730.jpg\"/><img title=\"201803261615213831436.jpg\" alt=\"1_07.jpg\" src=\"http://sujiefs.com/upload/images/20180326/201803261615213831436.jpg\"/><img title=\"201803261615234781859.jpg\" alt=\"1_08.jpg\" src=\"http://sujiefs.com/upload/images/20180326/201803261615234781859.jpg\"/><img title=\"201803261615255997962.jpg\" alt=\"1_09.jpg\" src=\"http://sujiefs.com/upload/images/20180326/201803261615255997962.jpg\"/><img title=\"201803261615274002031.jpg\" alt=\"1_10.jpg\" src=\"http://sujiefs.com/upload/images/20180326/201803261615274002031.jpg\"/><img title=\"201803261615297822747.jpg\" alt=\"1_11.jpg\" src=\"http://sujiefs.com/upload/images/20180326/201803261615297822747.jpg\"/><img title=\"201803261615311892348.jpg\" alt=\"1_12.jpg\" src=\"http://sujiefs.com/upload/images/20180326/201803261615311892348.jpg\"/><img title=\"201803261615326556396.jpg\" alt=\"1_13.jpg\" src=\"http://sujiefs.com/upload/images/20180326/201803261615326556396.jpg\"/><img title=\"201803261615340054544.jpg\" alt=\"1_14.jpg\" src=\"http://sujiefs.com/upload/images/20180326/201803261615340054544.jpg\"/><img title=\"201803261615357590535.jpg\" alt=\"1_15.jpg\" src=\"http://sujiefs.com/upload/images/20180326/201803261615357590535.jpg\"/><\/p>", "evaluateCount": 0, "freeShipNum": 0, "freight": 0, "goodsSkuId": "2c9257a16136c3d601626161c4613275", "goodsSkuList": [{ "goodsCode": "d18c071", "goodsId": "2c9257a16136c3d601626161c44e326f", "id": "2c9257a16136c3d601626161c4613275", "price": 138, "saleCount": 0, "skuNameIds": "[1404]", "skuNames": "[\"尺码\"]", "skuValIds": "[3466]", "skuVals": "[\"S\"]", "stockNum": 100, "stockNumWarn": 0 }, { "goodsCode": "d18c071", "goodsId": "2c9257a16136c3d601626161c44e326f", "id": "2c9257a16136c3d601626161c4633276", "price": 138, "saleCount": 0, "skuNameIds": "[1404]", "skuNames": "[\"尺码\"]", "skuValIds": "[3467]", "skuVals": "[\"M\"]", "stockNum": 100, "stockNumWarn": 0 }, { "goodsCode": "d18c071", "goodsId": "2c9257a16136c3d601626161c44e326f", "id": "2c9257a16136c3d601626161c4653277", "price": 138, "saleCount": 0, "skuNameIds": "[1404]", "skuNames": "[\"尺码\"]", "skuValIds": "[3468]", "skuVals": "[\"L\"]", "stockNum": 100, "stockNumWarn": 0 }], "goodsSkuNameList": [{ "skuName": "尺码", "skuValList": [{ "current": true, "skuVal": "S", "skuNameId": 1404, "skuValId": 3466 }, { "current": false, "skuVal": "M", "skuNameId": 1404, "skuValId": 3467 }, { "current": false, "skuVal": "L", "skuNameId": 1404, "skuValId": 3468 }], "skuNameId": 1404 }], "goodsSkuValIds": [3466], "goodsSkuVals": ["S"], "id": "2c9257a16136c3d601626161c44e326f", "logo": "http://sujiefs.com/upload/images/20180326/201803261614006088842.jpg", "marketPrice": 199, "minBuyNum": 3, "name": "2018韩版时尚优雅气质连衣裙d18c071", "photoList": [{ "goodsId": "2c9257a16136c3d601626161c44e326f", "id": "2c9257a16136c3d601626163ce753278", "photo": "http://sujiefs.com/upload/images/20180326/201803261614006088842.jpg", "thumPhoto": "http://sujiefs.com/upload/images/20180326/201803261614006088842_thumbnail.jpg" }, { "goodsId": "2c9257a16136c3d601626161c44e326f", "id": "2c9257a16136c3d601626163ce773279", "photo": "http://sujiefs.com/upload/images/20180326/201803261614032452183.jpg", "thumPhoto": "http://sujiefs.com/upload/images/20180326/201803261614032452183_thumbnail.jpg" }, { "goodsId": "2c9257a16136c3d601626161c44e326f", "id": "2c9257a16136c3d601626163ce7a327a", "photo": "http://sujiefs.com/upload/images/20180326/201803261614055803221.jpg", "thumPhoto": "http://sujiefs.com/upload/images/20180326/201803261614055803221_thumbnail.jpg" }, { "goodsId": "2c9257a16136c3d601626161c44e326f", "id": "2c9257a16136c3d601626163ce7c327b", "photo": "http://sujiefs.com/upload/images/20180326/201803261614153440053.jpg", "thumPhoto": "http://sujiefs.com/upload/images/20180326/201803261614153440053_thumbnail.jpg" }, { "goodsId": "2c9257a16136c3d601626161c44e326f", "id": "2c9257a16136c3d601626163ce7f327c", "photo": "http://sujiefs.com/upload/images/20180326/201803261614182232294.jpg", "thumPhoto": "http://sujiefs.com/upload/images/20180326/201803261614182232294_thumbnail.jpg" }], "price": 138, "saleCount": 59, "shareAmount": 3, "shareTimes": 5, "shareTips": "此商品分享5个好友，付款立减3元！", "sourceFlag": 1, "startTime": "2018-03-26 16:16:59", "status": 1, "stockNum": 100, "thumLogo": "http://sujiefs.com/upload/images/20180326/201803261614006088842_thumbnail.jpg", "validEndTime": "2021-03-26 16:12:07", "wholeNum": 3, "wholePrice": 135 }, "validDate": 1 })
    })
    //添加用户足迹
router.get('/api/userBrowse/add', function(req, res) {
        res.send({ "result": "005", "code": -1 });
    })
    //商品是否已收藏
router.get('/api/mall/goodsFavorite/goodsIsFavorite', function(req, res) {
        res.send({ "reason": null, "code": -1, "isFavorite": 0 })
    })
    //商品加入购物车
router.get('/api/mall/goodsCart/add', function(req, res) {

        var openid = req.query.openId;
        var goodsId = req.query.goodsId;
        var goodsSkuId = req.query.goodsSkuId;
        var purchaseType = req.query.purchaseType;
        var num = req.query.num;
        var sign = req.query.sign;
        var time = req.query.time;

        var goods = {
            goodsId: goodsId,
            goodsName: "food11111",
            ischecked: true,
            thumLogo: "http://sujiefs.com/upload/images/20180319/201803191442069389248.jpg",
            goodsSkuValName: "goodsSkuValName",
            type: 1,
            price: 8,
            num: 2,
            priceSubtotal: 16
        }

        res.send({ "result": "002", "msg": "Token验证错误", "code": 0 })
    })
    //商品收藏
router.get('/api/mall/goodsFavorite/add', function(req, res) {
    res.send({ "result": "005", "code": -1 })
})

//查询我的订单
router.get('/api/mall/goodsOrder/getMyOrderList', function(req, res) {
    res.send({ "result": "005", "reason": null, "code": 0, "page_total": 0, "pageSize": 10, "list": [], "totalCount": 0, "pageNum": 1 })
})

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

//更新购物车数量
router.get('/api/mall/goodsCart/updateNum', function(req, res) {

        res.send({ code: 0 })

    })
    //购物车删除商品
router.get('/api/mall/goodsCart/delete', function(req, res) {
        res.send({ code: 0 })
    })
    //购物车全选
router.get('/api/mall/goodsCart/checkAll', function(req, res) {
    res.send({ code: 0 })
})

//商品选择状态
router.get('/api/mall/goodsCart/check', function(req, res) {
    res.send({ code: 0 })
})

router.get('/api/mall/goodsOrder/commitData', function(req, res) {


    Cart.find({}, function(err, result) {
        if (err) {
            res.send({ "msg": "invoke error...", "code": -200, "Success": true })
        } else {
            // res.send(result)
            // res.send({ "reason": "hello", "code": "0", "list": result })
            // res.send({ "msg": "success", "code": "0", "totalPrice": 16, "list": result });
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
var addressList = [
        { id: 0, receiverName: "张三", mobile: "11111111111", isDef: 1, provinceName: "北京市", cityName: "北京市", areaName: "海淀区", addressDetail: "北京大学东门" },
        { id: 1, receiverName: "李四", mobile: "1111222222", isDef: 2, provinceName: "北京市", cityName: "北京市", areaName: "海淀区", addressDetail: "清华大学" }
    ]
    //收货地址
router.get('/api/receiverInfo/list', function(req, res) {


        res.send({ list: addressList, msg: "success", code: 0 })

    })
    //新增收货地址
router.get('/api/receiverInfo/saveOrUpdate', function(req, res) {
    var openId = req.query.openId;
    var address = req.query.address;
    var isDef = req.query.isDef;
    var province = req.query.province;
    var city = req.query.city;
    var area = req.query.area;
    addressList.push({ id: 2, receiverName: address.receiverName, mobile: address.mobile, isDef: isDef, provinceName: province, cityName: city, areaName: area, addressDetail: address.addressDetail })

    res.send({ msg: "success", code: 0 })

})

//查询收货地址详情
router.get("/api/receiverInfo/receiverInfoById", function(req, res) {
    var id = req.query.id;
    var info = addressList.filter(addr => addr.id == id)
    res.send({ receiverInfo: info[0], code: 0, msg: "success" })
})

//支付前生成订单
router.get('/api/mall/goodsOrder/saveByCart', function(req, res) {
    var openId = req.query.openId;
    var receiverInfoId = req.query.receiverInfoId;
    var businessMessage = req.query.businessMessage;
    var formId = req.query.formId;
    var reduceScore = req.query.reduceScore;

    res.send({ msg: "success", code: 0, tradeNo: 123 })
})

//查询订单数量
router.get('/api/mall/goodsOrder/getMyOrderSize', function(req, res) {

    res.send({ code: 0, msg: 'success', pendingPayCount: 0, backrdersCount: 0, shippedCount: 0 })

})
module.exports = router;