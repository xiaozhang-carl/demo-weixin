// pages/me/history.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    girls: [
      {
        "name": "剪发",
        "icon": "http://7xi8d6.com1.z0.glb.clouddn.com/20180122090204_A4hNiG_Screenshot.jpeg"
      }, {
        "name": "剪发",
        "icon": "../../img/girl.png"
      }, {
        "name": "剪发",
        "icon": "../../img/girl.png"
      }, {
        "name": "剪发",
        "icon": "../../img/girl.png"
      }, {
        "name": "剪发",
        "icon": "../../img/girl.png"
      }, {
        "name": "剪发",
        "icon": "../../img/girl.png"
      }, {
        "name": "剪发",
        "icon": "../../img/girl.png"
      }, {
        "name": "剪发",
        "icon": "../../img/girl.png"
      }, {
        "name": "剪发",
        "icon": "../../img/girl.png"
      },
    ]

  },

  click: function (e) {
    console.log(e)
    wx.navigateTo({
      url: "../zoom?url=" + e.currentTarget.dataset.item.icon
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