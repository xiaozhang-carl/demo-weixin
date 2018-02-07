// pages/view/mei'zi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },

  goSwiper: function (e) {
    console.log(e)
    //传递json字符串过去，然后解析，赋值
    var imgs = JSON.stringify(e.currentTarget.dataset.item.images)
    wx.navigateTo({
      url: '../view/swiper?title=' + e.currentTarget.dataset.item.desc + '&imgs=' + imgs
    })
  },

  goGithub: function (e) {
    console.log(e.currentTarget.dataset.item)
    wx.navigateTo({
      url: '../view/github?title=' + e.currentTarget.dataset.item.desc + '&url=' + e.currentTarget.dataset.item.url
    })
  },

  onPullDownRefresh: function () {
    wx.showToast({
      title: 'loading...',
      icon: 'loading',
      duration: 2000
    })
    var that = this
    wx.request({
      url: 'http://gank.io/api/data/Android/2/1',

      data: {
        noncestr: Date.now()
      },
      success: function (result) {
        console.log('request success', result.data.results)
        that.stopPullDownRefresh()
        that.setData({
          list: result.data.results
        })
      },

      fail: function ({ errMsg }) {
        console.log('request fail', errMsg)
        that.stopPullDownRefresh()
      }
    })
  },
  stopPullDownRefresh: function () {
    wx.stopPullDownRefresh({
      complete: function (res) {
        wx.hideToast()
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.startPullDownRefresh()
    wx.switchTab({
      url: '../view/widget'
    })
  },

  onShow:function(options){
    this.stopPullDownRefresh()
  }
})