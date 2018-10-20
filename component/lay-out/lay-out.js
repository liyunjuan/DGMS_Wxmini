// component/lay-out/lay-out.js
Component({
  options:{
    multipleSlots:true
  },

  /**
   * 组件的属性列表
   */
  properties: {
    contentScroll:{
      type:Boolean,
      value:true,
      observe:function(newVal,oldVal,changedPath){
        this.setData({contentScroll:newVal})
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    contentScroll:true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTop:function(e){
      this.triggerEvent('onTop',{},{
        bubbles:false
      })
    },
    onBottom:function(e){
      this.triggerEvent('onBottom',{},{
        bubbles:false
      })
    }
  }
})
