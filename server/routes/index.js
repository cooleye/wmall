var express = require('express');
var router = express.Router();
var md5 = require('md5');
var request = require('request');

const APPID = "wxdfae9e6726fc843e"
const SECRET = "bc903a970f4f4fef99d0b2061f2fc444"

const API_SECRET_KEY = 'github.com/cooleye'

var cartList = [{
        goodsId: "1111",
        goodsName: "food11111",
        ischecked: true,
        thumLogo: "http://sujiefs.com/upload/images/20180319/201803191442069389248.jpg",
        goodsSkuValName: "goodsSkuValName",
        type: 1,
        price: 8,
        num: 2,
        priceSubtotal: 16
    },
    {
        goodsId: "2222",
        goodsName: "food2222",
        ischecked: false,
        thumLogo: "http://sujiefs.com/upload/images/20180322/201803221353348299896.jpg",
        goodsSkuValName: "goodsSkuValName2",
        type: 2,
        price: 10,
        num: 3,
        priceSubtotal: 30
    },
    {
        goodsId: "3333",
        goodsName: "food3333",
        ischecked: false,
        thumLogo: "http://sujiefs.com/upload/images/20180321/201803211341067195861.jpg",
        goodsSkuValName: "goodsSkuValName2",
        type: 2,
        price: 100,
        num: 1,
        priceSubtotal: 100
    }
];


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
        res.send({ "reason": "", "code": "0", "list": [{ "advertUrl": "/pages/home_detail?code=020", "createTime": { "date": 28, "day": 4, "hours": 14, "minutes": 11, "month": 11, "nanos": 0, "seconds": 38, "time": 1514441498000, "timezoneOffset": -480, "year": 117 }, "id": "2c9257a1609b12a301609bbf5e790169", "isdeleted": 0, "limitFowards": 0, "limitPrice": 0, "locationFlag": 1, "picUrl": "http://sujiefs.com/upload/images/20180319/201803191442069389248.jpg", "presentAmout": 0, "promoDesc": "", "promoPicUrl": "", "promoTips": "", "sort": 5, "status": 1, "title": "嘉年华", "type": 1, "updateTime": { "date": 9, "day": 6, "hours": 12, "minutes": 24, "month": 5, "nanos": 0, "seconds": 50, "time": 1528518290000, "timezoneOffset": -480, "year": 118 } }, { "advertUrl": "/pages/home_detail?code=019", "createTime": { "date": 29, "day": 5, "hours": 16, "minutes": 41, "month": 11, "nanos": 0, "seconds": 58, "time": 1514536918000, "timezoneOffset": -480, "year": 117 }, "id": "2c9257a1609b12a30160a16f5d9a039b", "isdeleted": 0, "limitFowards": 0, "limitPrice": 0, "locationFlag": 1, "picUrl": "http://sujiefs.com/upload/images/20180322/201803221353348299896.jpg", "presentAmout": 0, "promoDesc": "", "promoPicUrl": "", "promoTips": "", "sort": 11, "status": 1, "title": "时尚英伦风", "type": 1, "updateTime": { "date": 22, "day": 4, "hours": 13, "minutes": 53, "month": 2, "nanos": 0, "seconds": 36, "time": 1521698016000, "timezoneOffset": -480, "year": 118 } }, { "advertUrl": "/pages/home_detail?code=020", "createTime": { "date": 20, "day": 5, "hours": 17, "minutes": 29, "month": 9, "nanos": 0, "seconds": 14, "time": 1508491754000, "timezoneOffset": -480, "year": 117 }, "id": "2c9257a15f37e432015f391d7d8d00d5", "isdeleted": 0, "limitFowards": 0, "limitPrice": 0, "locationFlag": 1, "picUrl": "http://sujiefs.com/upload/images/20180321/201803211341067195861.jpg", "presentAmout": 0, "promoDesc": "", "promoPicUrl": "", "promoTips": "", "sort": 12, "status": 1, "title": "趁年轻穿自己想穿的", "type": 1, "updateTime": { "date": 21, "day": 3, "hours": 13, "minutes": 41, "month": 2, "nanos": 0, "seconds": 8, "time": 1521610868000, "timezoneOffset": -480, "year": 118 } }, { "advertUrl": "/pages/home_detail?code=020", "createTime": { "date": 5, "day": 4, "hours": 19, "minutes": 40, "month": 9, "nanos": 0, "seconds": 45, "time": 1507203645000, "timezoneOffset": -480, "year": 117 }, "id": "2c9257a15eaf3ade015eec56806f08a9", "isdeleted": 0, "limitFowards": 0, "limitPrice": 0, "locationFlag": 1, "picUrl": "http://sujiefs.com/upload/images/20180322/201803221355480509362.jpg", "presentAmout": 0, "promoDesc": "", "promoPicUrl": "", "promoTips": "", "sort": 13, "status": 1, "title": "热销潮流必买单品", "type": 1, "updateTime": { "date": 22, "day": 4, "hours": 13, "minutes": 55, "month": 2, "nanos": 0, "seconds": 48, "time": 1521698148000, "timezoneOffset": -480, "year": 118 } }, { "advertUrl": "/pages/home_detail?code=019", "createTime": { "date": 29, "day": 5, "hours": 17, "minutes": 4, "month": 11, "nanos": 0, "seconds": 15, "time": 1514538255000, "timezoneOffset": -480, "year": 117 }, "id": "2c9257a1609b12a30160a183c3ff03a5", "isdeleted": 0, "limitFowards": 0, "limitPrice": 0, "locationFlag": 1, "picUrl": "http://sujiefs.com/upload/images/20180322/201803221356007729116.jpg", "presentAmout": 0, "promoDesc": "", "promoPicUrl": "", "promoTips": "", "sort": 15, "status": 1, "title": "秋冬", "type": 1, "updateTime": { "date": 22, "day": 4, "hours": 13, "minutes": 56, "month": 2, "nanos": 0, "seconds": 1, "time": 1521698161000, "timezoneOffset": -480, "year": 118 } }] })
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
        res.send({ "reason": "", "code": "0", "list": [{ "code": "022", "logo": "http://sujiefs.com/upload/images/20181107/201811071529292978067.jpg", "id": "2c9257a16126d14701612b52808100d6", "attrs": [{ "attrValList": [{ "attrName": "品牌", "attrNameId": 215, "attrVal": "素洁", "id": 558 }], "attrName": { "attrName": "品牌", "categoryCode": "022", "id": 215 } }, { "attrValList": [{ "attrName": "年份季节", "attrNameId": 216, "attrVal": "2018秋季", "id": 559 }], "attrName": { "attrName": "年份季节", "categoryCode": "022", "id": 216 } }] }, { "code": "021", "logo": "http://sujiefs.com/upload/images/20180319/201803191401583397599.jpg", "id": "2c9257a160e0cb1c0160ee3562e0024e", "attrs": [{ "attrValList": [{ "attrName": "品牌", "attrNameId": 211, "attrVal": "素洁", "id": 554 }], "attrName": { "attrName": "品牌", "categoryCode": "021", "id": 211 } }, { "attrValList": [{ "attrName": "年份季节", "attrNameId": 212, "attrVal": "2018全新升级版", "id": 555 }], "attrName": { "attrName": "年份季节", "categoryCode": "021", "id": 212 } }] }] })
    } else {
        res.send({ "msg": "invoke error...", "code": -200, "Success": true })
    }
})

//商品分类--begin
//一级分类
router.get('/api/mall/rootCtegoryList', function(req, res) {
        res.send({ "reason": "", "code": "0", "list": [{ "code": "004", "name": "上衣", "logo": "http://sujiefs.com/upload/images/20170819/201708191958392454606.jpg", "id": "402880f75d78aa88015d7905a5500003" }, { "code": "008", "name": "裤子", "logo": "", "id": "2c9257a15de92f53015dea1c43280037" }, { "code": "009", "name": "裙子", "logo": "http://sujiefs.com/upload/images/20170816/201708161632508062033.jpg", "id": "2c9257a15de92f53015dea1e76d3003e" }] })
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
    console.log('openid:', openid);
    console.log('sing:', sign);

    res.send({ "msg": "success", "code": "0", "totalPrice": 16, "list": cartList });

})

//用户是否绑定手机号
router.get('/api/userCenter/getUserInfo', function(req, res) {
    res.send({ "code": 0, "user": null });
})

//首页发现商品接口
router.get('/api/home/hostGoodsList', function(req, res) {
    res.send({ "reason": "", "code": "0", "page_total": 4, "category": { "code": "019", "name": "2017秋冬新上市", "logo": "http://sujiefs.com/upload/images/20171229/201712291639552483183.jpg", "id": "2c9257a15f37e432015f8feb59230c8c", "attrs": [{ "attrValList": [{ "attrName": "品牌", "attrNameId": 204, "attrVal": "素洁", "id": 547 }], "attrName": { "attrName": "品牌", "categoryCode": "019", "id": 204 } }, { "attrValList": [{ "attrName": "年份季节", "attrNameId": 205, "attrVal": "2017年冬季", "id": 548 }], "attrName": { "attrName": "年份季节", "categoryCode": "019", "id": 205 } }] }, "list": [{ "marketPrice": 170, "saleCount": 35, "businessName": "广州素洁服饰公司", "businessId": "4028800457b6cf7a0157b7998c39001d", "thumLogo": "http://sujiefs.com/upload/images/20171104/201711041932425797386_thumbnail.jpg", "title": "2017秋冬新款第三波 韩版女装秋季新款系带条纹长袖衬衫", "evaluateCount": 0, "price": 68, "name": "新款系带条纹长袖衬衫 T17D807", "stockNum": 900, "wholePrice": 63, "logo": "http://sujiefs.com/upload/images/20171104/201711041932425797386.jpg", "id": "2c9257a15f37e432015f86d624980b73" }, { "marketPrice": 170, "saleCount": 76, "businessName": "广州素洁服饰公司", "businessId": "4028800457b6cf7a0157b7998c39001d", "thumLogo": "http://sujiefs.com/upload/images/20171104/201711041906545460701_thumbnail.jpg", "title": "2017秋冬新款第三波 韩版宽松性感挂脖露肩衬衫韩国女装长袖衬衣漏肩上衣", "evaluateCount": 0, "price": 68, "name": "韩版性感挂脖露肩衬衫长袖  T17D802", "stockNum": 1599, "wholePrice": 62, "logo": "http://sujiefs.com/upload/images/20171104/201711041906545460701.jpg", "id": "2c9257a15f37e432015f86bf1a860b33" }, { "marketPrice": 169, "saleCount": 94, "businessName": "广州素洁服饰公司", "businessId": "4028800457b6cf7a0157b7998c39001d", "thumLogo": "http://sujiefs.com/upload/images/20170920/201709201433471208811_thumbnail.jpg", "title": "2017秋冬新款第二波 金丝绒阔腿裤宽松大码直筒休闲校服裤", "evaluateCount": 0, "price": 68, "name": "金丝绒阔腿裤宽松大码直筒休闲校服裤 P17D618", "stockNum": 3984, "wholePrice": 62, "logo": "http://sujiefs.com/upload/images/20170920/201709201433471208811.jpg", "id": "2c9257a15e997bee015e9e1065090189" }, { "marketPrice": 198, "saleCount": 66, "businessName": "广州素洁服饰公司", "businessId": "4028800457b6cf7a0157b7998c39001d", "thumLogo": "http://sujiefs.com/upload/images/20171104/201711041729055073008_thumbnail.jpg", "title": "2017秋冬新款第三波 新款金丝绒阔腿裤女长裤黑色开叉竖条纹松紧腰休闲运动裤", "evaluateCount": 0, "price": 69, "name": "金丝绒阔腿裤黑色开叉竖条纹松紧腰休闲 P17D801", "stockNum": 1200, "wholePrice": 63, "logo": "http://sujiefs.com/upload/images/20171104/201711041729055073008.jpg", "id": "2c9257a15f37e432015f86640ded0afc" }, { "marketPrice": 269, "saleCount": 69, "businessName": "广州素洁服饰公司", "businessId": "4028800457b6cf7a0157b7998c39001d", "thumLogo": "http://sujiefs.com/upload/images/20171104/201711041743482116501_thumbnail.jpg", "title": "2017秋冬新款第三波 新款韩版宽松高腰金丝绒背带阔腿裤女秋季丝绒九分背带裤", "evaluateCount": 0, "price": 78, "name": "金丝绒背带阔腿裤 P17D803", "stockNum": 1500, "wholePrice": 72, "logo": "http://sujiefs.com/upload/images/20171104/201711041743482116501.jpg", "id": "2c9257a15f37e432015f8671e8900b10" }, { "marketPrice": 239, "saleCount": 54, "businessName": "广州素洁服饰公司", "businessId": "4028800457b6cf7a0157b7998c39001d", "thumLogo": "http://sujiefs.com/upload/images/20171104/201711041959590174374_thumbnail.jpg", "title": "2017秋冬新款第三波 网红同款毛茸茸宽松百搭长袖针织衫", "evaluateCount": 0, "price": 79, "name": "网红同款毛茸茸宽松百搭长袖针织衫 T17D810", "stockNum": 4499, "wholePrice": 75, "logo": "http://sujiefs.com/upload/images/20171104/201711041959590174374.jpg", "id": "2c9257a15f37e432015f86ec60510ba6" }, { "marketPrice": 169, "saleCount": 507, "businessName": "广州素洁服饰公司", "businessId": "4028800457b6cf7a0157b7998c39001d", "thumLogo": "http://sujiefs.com/upload/images/20170814/201708141445064387894_thumbnail.jpg", "title": "2017新款秋季外套女装气质修身系带收腰风衣女中长款休闲薄款大衣", "evaluateCount": 0, "price": 79, "name": "气质修身系带收腰风衣女中长款休闲薄款大衣SJ20170810-16", "stockNum": 2507, "wholePrice": 75, "logo": "http://sujiefs.com/upload/images/20170814/201708141445064387894.jpg", "id": "2c9257a15dddc960015ddf81837e0045" }, { "marketPrice": 199, "saleCount": 326, "businessName": "广州素洁服饰公司", "businessId": "4028800457b6cf7a0157b7998c39001d", "thumLogo": "http://sujiefs.com/upload/images/20170828/201708281101095363007_thumbnail.jpg", "title": "2017秋季新款 时尚洋气系带翻领长袖外套", "evaluateCount": 0, "price": 88, "name": "时尚洋气系带翻领长袖外套 J17D514", "stockNum": 674, "wholePrice": 82, "logo": "http://sujiefs.com/upload/images/20170828/201708281101095363007.jpg", "id": "2c9257a15e235086015e26cdc20c0083" }, { "marketPrice": 368, "saleCount": 0, "businessName": "广州素洁服饰公司", "businessId": "4028800457b6cf7a0157b7998c39001d", "thumLogo": "http://sujiefs.com/upload/images/20171106/201711061144221576532_thumbnail.jpg", "title": "2017秋冬新款第三波 韩版纯色套头刺绣毛衣女宽松打底短款长袖针织衫", "evaluateCount": 0, "price": 89, "name": "韩版纯色刺绣毛衣 T17D816", "stockNum": 2000, "wholePrice": 83, "logo": "http://sujiefs.com/upload/images/20171106/201711061144221576532.jpg", "id": "2c9257a15f37e432015f8f781ec50c81" }, { "marketPrice": 259, "saleCount": 1, "businessName": "广州素洁服饰公司", "businessId": "4028800457b6cf7a0157b7998c39001d", "thumLogo": "http://sujiefs.com/upload/images/20171104/201711041956313135978_thumbnail.jpg", "title": "2017秋冬新款第三波 古金色梅花刺绣设计感光泽黑色长袖宽松廓形衬衫女", "evaluateCount": 0, "price": 89, "name": "古金色梅花刺绣宽松廓形衬衫 T17D815", "stockNum": 499, "wholePrice": 81, "logo": "http://sujiefs.com/upload/images/20171104/201711041956313135978.jpg", "id": "2c9257a15f37e432015f86e8ffbb0ba0" }] })
})

//查询商品列表
router.get('/api/mall/searchGoodsList', function(req, res) {
    res.send({ "reason": "", "code": "0", "page_total": 4, "pageSize": 10, "category": { "code": "009002", "name": "连衣裙", "logo": "http://sujiefs.com/upload/images/20170816/201708161904263180558.jpg", "id": "2c9257a15de92f53015dea1ed4690040", "attrs": [] }, "list": [{ "marketPrice": 199, "code": "d18c071", "saleCount": 59, "businessId": "4028800457b6cf7a0157b7998c39001d", "businessName": "广州素洁服饰公司", "thumLogo": "http://sujiefs.com/upload/images/20180326/201803261614006088842_thumbnail.jpg", "evaluateCount": 0, "price": 138, "name": "2018韩版时尚优雅气质连衣裙d18c071", "stockNum": 300, "logo": "http://sujiefs.com/upload/images/20180326/201803261614006088842.jpg", "id": "2c9257a16136c3d601626161c44e326f", "sourceFlag": 1, "status": 1 }, { "marketPrice": 238, "code": "D18C069", "saleCount": 131, "businessId": "4028800457b6cf7a0157b7998c39001d", "businessName": "广州素洁服饰公司", "thumLogo": "http://sujiefs.com/upload/images/20180317/201803171625190100575_thumbnail.jpg", "evaluateCount": 0, "price": 168, "name": "2018女士时尚格子优雅连衣裙D18C069", "stockNum": 300, "logo": "http://sujiefs.com/upload/images/20180317/201803171625190100575.jpg", "id": "2c9257a16136c3d6016233126ece2846", "sourceFlag": 1, "status": 1 }, { "marketPrice": 988, "code": "D18C071", "saleCount": 6, "businessId": "4028800457b6cf7a0157b7998c39001d", "businessName": "广州素洁服饰公司", "thumLogo": "http://sujiefs.com/upload/images/20180309/201803091318114902644_thumbnail.jpg", "evaluateCount": 0, "price": 268, "name": "2018春季条纹女士连衣裙 D18C071", "stockNum": 150, "logo": "http://sujiefs.com/upload/images/20180309/201803091318114902644.jpg", "id": "2c9257a16126d1470161359fc27502a1", "sourceFlag": 1, "status": 1 }, { "marketPrice": 299, "code": "S17D504", "saleCount": 205, "businessId": "4028800457b6cf7a0157b7998c39001d", "businessName": "广州素洁服饰公司", "thumLogo": "http://sujiefs.com/upload/images/20170828/201708281735587338796_thumbnail.jpg", "evaluateCount": 0, "price": 109, "name": "通勤双排扣西装领连衣裙 S17D504", "stockNum": 1295, "logo": "http://sujiefs.com/upload/images/20170828/201708281735587338796.jpg", "id": "2c9257a15e27fb1f015e28356c820038", "sourceFlag": 1, "status": 1 }, { "marketPrice": 149, "code": "T17D501", "saleCount": 24, "businessId": "4028800457b6cf7a0157b7998c39001d", "businessName": "广州素洁服饰公司", "thumLogo": "http://sujiefs.com/upload/images/20170828/201708281902269618052_thumbnail.jpg", "evaluateCount": 0, "price": 104, "name": "性感V领长袖衬衫连衣裙 T17D501", "stockNum": 1476, "logo": "http://sujiefs.com/upload/images/20170828/201708281902269618052.jpg", "id": "2c9257a15e27fb1f015e2886209f0135", "sourceFlag": 1, "status": 1 }, { "marketPrice": 195, "code": "SJ20170816-41", "saleCount": 0, "businessId": "4028800457b6cf7a0157b7998c39001d", "businessName": "广州素洁服饰公司", "thumLogo": "http://sujiefs.com/upload/images/20170909/201709091050538290646_thumbnail.jpg", "evaluateCount": 0, "price": 95, "name": "显瘦POLO领连衣裙 SJ20170816-41", "stockNum": 4000, "logo": "http://sujiefs.com/upload/images/20170909/201709091050538290646.jpg", "id": "2c9257a15e55d524015e6495e96401c3", "sourceFlag": 1, "status": 1 }, { "marketPrice": 189, "code": "SJ20170816-38", "saleCount": 4, "businessId": "4028800457b6cf7a0157b7998c39001d", "businessName": "广州素洁服饰公司", "thumLogo": "http://sujiefs.com/upload/images/20170907/201709071154127399383_thumbnail.jpg", "evaluateCount": 0, "price": 92, "name": "韩版显瘦百搭两件套背带裙女中长款格子连衣裙 SJ20170816-38", "stockNum": 7996, "logo": "http://sujiefs.com/upload/images/20170907/201709071154127399383.jpg", "id": "2c9257a15e55d524015e5a7fca120073", "sourceFlag": 1, "status": 1 }, { "marketPrice": 195, "code": "J17D618-18", "saleCount": 84, "businessId": "4028800457b6cf7a0157b7998c39001d", "businessName": "广州素洁服饰公司", "thumLogo": "http://sujiefs.com/upload/images/20171003/201710031736480598764_thumbnail.jpg", "evaluateCount": 0, "price": 108, "name": "宽松显瘦网纱拼接连衣裙女气质a字短裙 J17D618-18", "stockNum": 1500, "logo": "http://sujiefs.com/upload/images/20171003/201710031736480598764.jpg", "id": "2c9257a15eaf3ade015ee19e10480540", "sourceFlag": 1, "status": 1 }, { "marketPrice": 318, "code": "SJ20170703-29", "saleCount": 223, "businessId": "4028800457b6cf7a0157b7998c39001d", "businessName": "广州素洁服饰公司", "thumLogo": "http://sujiefs.com/upload/images/20170810/201708101027451267268_thumbnail.jpg", "evaluateCount": 0, "price": 89, "name": "欧美短袖上衣+印花吊带裙两件套连衣裙 SJ20170703-29", "stockNum": 1277, "logo": "http://sujiefs.com/upload/images/20170810/201708101027451267268.jpg", "id": "2c9257a15db2e750015dc9fa49c3060b", "sourceFlag": 1, "status": 1 }, { "marketPrice": 169, "code": "SJ20170816-47", "saleCount": 1, "businessId": "4028800457b6cf7a0157b7998c39001d", "businessName": "广州素洁服饰公司", "thumLogo": "http://sujiefs.com/upload/images/20170911/201709111410525781397_thumbnail.jpg", "evaluateCount": 0, "price": 88, "name": "假两件立领蕾丝拼接系带甜美荷叶边连衣裙  SJ20170816-47", "stockNum": 5999, "logo": "http://sujiefs.com/upload/images/20170911/201709111410525781397.jpg", "id": "2c9257a15e55d524015e6fa0f15f04fe", "sourceFlag": 1, "status": 1 }], "totalCount": 34, "pageNum": 1 })
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
        res.send({ "result": "002", "msg": "Token验证错误", "code": -1 })
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

    console.log('jsCode:', jsCode)
    console.log('nickName:', nickName)

    var url = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + APPID + '&secret=' + SECRET + '&js_code=' + jsCode + '&grant_type=authorization_code';

    request({
        url: url,
        method: "GET",
        json: true,
        headers: {
            "content-type": "application/json",
        }
    }, function(error, response, body) {
        console.log(body)
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

    res.send({
        goodsList: cartList,
        totalPrice: 999,
        actualPrice: 999,
        hasDefaultAddress: false,
        defaultAddress: "",
        userScore: 100,
        canUseScore: true,
        deduScore: 0,
        deduFee: 0,
        jf_num: 10,
        reduce_fee: 0.1
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
module.exports = router;