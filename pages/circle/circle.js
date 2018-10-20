// pages/circle/circle.js



Page({

  /**
   * 页面的初始数据
   */
  data: {
    text:"圈圈",
    bannerImages:[
      '../../icon/cir_banner1.png',
      '../../icon/cir_banner2.png'
    ],
    bannerAbc:{
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 500,
      circular: true
    }
  },
  changeIndecatorDots:function(e){
    this.setData({
      indicatorDots:!this.data.indicatorDots
    })
  },
  changeAutoplay:function(e){
    this.setData({
      autoplay:!this.data.autoplay
    })
  },
  intervalChange:function(e){
    this.setData({
      interval:e.detail.value
    })
  },
  durationChange:function(e){
    this.setData({
      duration:e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('start')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('ready')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('show')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('hide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('unload')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('用户下拉')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('ReachBotton')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("ShareAppMessage")
  }
})