// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{
      "nickName":"",
      "avatarUrl":""
    },
    items: [{
      "name": "我的足迹",
      "icon": "../../img/icon_my_history.png",
      "url": "history"
    }, {
      "name": "分享有礼",
      "icon": "../../img/icon_my_share.png"
    }, {
      "name": "我的礼券",
      "icon": "../../img/icon_my_ticket.png",
      "url": "coupon"
    }, {
      "name": "收藏作品",
      "icon": "../../img/icon_my_product.png",
      "url": "collections"
    }, {
      "name": "收藏手艺人",
      "icon": "../../img/icon_my_collections.png"
    }]

  },

  onReady:function(options){
    var app=getApp()
    console.log(app)
    this.setData({
      userInfo: app.globalData.userInfo
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  click: function (e) {
    console.log(e)
    wx.navigateTo({
      url: e.currentTarget.dataset.item.url
    })

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