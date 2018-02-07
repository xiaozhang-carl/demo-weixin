// pages/view/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    key: "list",
    list: [
      // {
      //   "desc": "List of Android UI/UX Libraries",
      //   "ganhuo_id": "56d795346776595ac3e5cf90",
      //   "publishedAt": "2016-03-03T12:12:56.684000",
      //   "readability": "",
      //   "type": "Android",
      //   "url": "https://github.com/wasabeef/awesome-android-ui",
      //   "who": "lxxself"
      // }
    ]
  },

  goGithub: function (e) {
    console.log(e.currentTarget.dataset.item)
    wx.navigateTo({
      url: '../view/github?title=' + e.currentTarget.dataset.item.desc + '&url=' + e.currentTarget.dataset.item.url
    })
  },

  search: function () {
    wx.getNetworkType({
      success: function (res) {
        // 返回网络类型, 有效值：
        // wifi/2g/3g/4g/unknown(Android下不常见的网络类型)/none(无网络)
        console.log(res)
      }
    })
    wx.makePhoneCall({
      phoneNumber: '1340000' //仅为示例，并非真实的电话号码
    })
    var that = this
    wx.showToast({
      title: 'loading...',
      icon: 'loading',
      duration: 2000,
      mask: true
    })
    wx.request({
      url: 'http://gank.io/api/search/query/' + this.data.key + '/category/Android/count/10/page/1',

      data: {
        noncestr: Date.now()
      },
      success: function (result) {
        wx.showToast({
          title: '请求成功',
          icon: 'success',
          mask: true
        })
        console.log('request success', result.data.results)
        that.setData({
          list: result.data.results
        })
      },

      fail: function ({ errMsg }) {
        console.log('request fail', errMsg)
        wx.showToast({
          title: '请求失败',
          icon: 'success',
          mask: true
        })
      }
    })
  },

  bindKeyInput: function (e) {
    this.setData({
      key: e.detail.value
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