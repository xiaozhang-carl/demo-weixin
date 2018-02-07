//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    update: '',
    basic: {},
    today: {},
    tomorrow: {},
    afterTomor: {},
    todyIcon: '../../imgs/weather/999.png',
    tomorrowIcon: '../../imgs/weather/999.png',
    afterTomorIcon: '../../imgs/weather/999.png'
  },
  onShow: function () {
    this.getLocation();
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  getLocation: function () {
    var that = this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        that.getWeatherInfo(latitude, longitude);
      }
    })
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  getWeatherInfo: function (latitude, longitude) {
    var _this = this;
    var key = '85c280bae3244f63967a999ac9c79c11';//你自己的key
    //https://console.heweather.com/my/service
    var url = 'https://free-api.heweather.com/s6/weather?key=' + key + '&location=' + longitude + ',' + latitude;
    wx.request({
      url: url,
      data: {},
      method: 'GET',
      success: function (res) {
        console.log(res)
        var daily_forecast_today = res.data.HeWeather6[0].daily_forecast[0];//今天预报
        var daily_forecast_tomorrow = res.data
        _this.setData({
          today: res.data.HeWeather6[0].daily_forecast[0],
          tomorrow: res.data.HeWeather6[0].daily_forecast[1],
          afterTomor: res.data.HeWeather6[0].daily_forecast[2],
          update: res.data.HeWeather6[0].update.loc,
        })
      }
    })
  }
})
