// pages/view/switch.js
Page({
  switch1Change: function (e) {
    console.log('switch1 发生 change 事件，携带值为', e.detail.value)
  },
  switch2Change: function (e) {
    console.dir(this)
    console.log('switch2 发生 change 事件，携带值为', e.detail.value)
  }
})