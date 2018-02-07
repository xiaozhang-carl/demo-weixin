// pages/kind.js
const util = require('../utils/throttle.js')
// const util = require('../utils/eventProxy.js')
import eventProxy from '../utils/eventProxy'
var helloData = {
  name: 'WeChat'
}


Page({


  /**
   * 页面的初始数据
   */
  data: {
  
    childName: helloData.name,
    kinds: [
      {
        "groupName": "餐饮美食",
        "isExpanded": false,
        "icon":'/resources/food_blue.png',
        "childs": [{
          "childName": "甜品饮品",
          "checked": true
        }, {
          "childName": "自助餐",
        }, {
          "childName": "日韩料理",
        }, {
          "childName": "川湘菜",
        }, {
          "childName": "江浙菜",
        },
        ]
      },
      {
        "groupName": "生鲜水果",
        "isExpanded": true,
        "icon": "/resources/fruit_blue.png",
        "childs": [{
          "childName": "柑橘类",
        }, {
          "childName": "瓜果类",
        }, {
          "childName": "核果类",
        }, {
          "childName": "坚（壳）果类",
        }, {
          "childName": "浆果类",
        },

        ]
      }
    ]
  },

  clickParent: function (e) {
    //
    // console.log(e)
    // var item = e.currentTarget.dataset.item
    // var arr=this.data.kinds
    // item.groupName
    // for (let i of arr) {
    //   if (item.groupName == i.groupName){
    //     i.isExpanded = !i.isExpanded
    //     break
    //   }
    // }
    // this.setData({
    //   kinds: arr
    // })

    // 发布 msg 事件
    eventProxy.trigger('msg', '柑橘类');
  },

  // clickChild: function (e) {
  //   console.log(e)
  //   var item = e.currentTarget.dataset.item
  //   this.setData({
  //     childName: item.childName
  //   })
  // },

  clickChild: util.throttle(function (e) {
    console.log(this)
    console.log(e)
    console.log((new Date()).getSeconds())
  }, 1000),

  imageError: function (e) {
    console.log('image3发生error事件，携带值为', e.detail.errMsg)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 监听 msg 事件
    eventProxy.on('msg', (msg) => {
      console.log(this)
      this.setData({
        childName:msg
      });
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})