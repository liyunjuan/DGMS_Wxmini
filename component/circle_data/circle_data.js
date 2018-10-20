// component/circle_data/circle_data.js
import * as allData from '../../data_demo/data_demo.js'


Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    cicle_data: allData.getCircleData(),
    contentScroll:true
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
