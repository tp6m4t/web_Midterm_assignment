const app = Vue.createApp({
  setup() {
    const state = Vue.reactive({
      playList:playList,
      playTime:playTime,
    })
    const newvido=(event)=>{
      state.playList[state.playList.length]=event.target.value;
      state.playTime.push([0,0]);
      console.log(state.playList);
      console.log(state.playTime);
    }
    const deletevido=(index)=>{
      
      state.playList.splice(index, 1);
      state.playTime.splice(index, 1); 
    }
    return {
      state,
      newvido,
      deletevido,
    }
  }
})
app.mount('#app')


