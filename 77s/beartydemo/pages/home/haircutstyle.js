// pages/home/haircutstyle.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url: "../../img/ic_coupon_header.png",
    list: [
      { "icon": "../../img/girl.png", "price": "¥58999999999999.00", "desc": "新人专享通用券新人专享通用券新人专享通用券新人专享通用券新人专享通用券", "style": "剪发(精剪)", "lable1": "随意", "lable2": "自然" },
      { "icon": "../../img/girl.png", "price": "¥58.00", "desc": "人群中最酷的就是你", "style": "个性短发", "lable1": "有型", "lable2": "干练" },
      { "icon": "../../img/girl.png", "price": "¥158.00", "desc": "时尚界的不败神话", "style": "时尚Bob头", "lable1": "气质", "lable2": "时尚" },
      { "icon": "../../img/girl.png", "price": "¥58.00", "desc": "风靡全球的时尚法宝", "style": "空气刘海", "lable1": "清新", "lable2": "自然" },
      { "icon": "../../img/girl.png", "price": "¥128.00", "desc": "帅气也能艳压群芳", "style": "碎剪", "lable1": "俏皮", "lable2": "自然" },
      { "icon": "../../img/girl.png", "price": "¥68.00", "desc": "明星同款气质齐肩中发", "style": "翘发尾", "lable1": "可爱", "lable2": "轻盈" }
    ]
  },

  click: function (e) {
    console.log(e)
    var json = JSON.stringify(e.currentTarget.dataset.item)
    wx.navigateTo({
      url: "haircut?haircut=" + json
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