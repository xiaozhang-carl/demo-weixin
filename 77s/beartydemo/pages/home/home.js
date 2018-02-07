// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [
      '../../img/banner1.png',
      '../../img/banner2.png',
      '../../img/banner3.png'
    ],
    menus: [
      {
        "name": "剪发",
        "en": "HAIRCUT",
        "url":"haircutstyle"
      }, {
        "name": "烫发",
        "en": "PERM",
        "url": "perm"
      }, {
        "name": "染发",
        "en": "DYEING"
      }, {
        "name": "护理",
        "en": "CARE"
      }, {
        "name": "造型",
        "en": "STYLE"
      }
    ],
    beautyitems: [
      {
        "name": "丝滑SPA",
        "marketPrice": "¥396.00",
        "price": " ¥189.00",
        "desc": " 滋润皮肤滋润皮肤滋润皮肤滋润皮肤、芳香沁心、舒缓疲劳、释放压力、身心轻盈愉悦…",
      },
      {
        "name": "香薰SPA",
        "marketPrice": "¥396.00",
        "price": " ¥289.00",
        "desc": "甜美香薰、芳香醉人、调整紊乱的荷尔蒙、让身体来场舒适 …",
      }

    ]
  },

  clickMenu:function(e){
    wx.navigateTo({
      url: e.currentTarget.dataset.item.url,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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