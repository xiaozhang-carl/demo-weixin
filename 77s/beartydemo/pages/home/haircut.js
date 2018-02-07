// pages/home/haircut.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    banners: [
      '../../img/girl.png',
      '../../img/girl.png',
      '../../img/girl.png'
    ],

    haircut: { "icon": "../../img/girl.png", "price": "¥68.00", "desc": "明星同款气质齐肩中发", "style": "翘发尾", "lable1": "可爱", "lable2": "轻盈" },
    texts: [
      '显露的额头',
      '随意且自然的发尾',
      '简单又大方，散发着光芒',
      '俏皮又可爱',
      '......'
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var data = JSON.parse(options.haircut)
    console.log(options)
      this.setData({
        haircut: data
      })
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