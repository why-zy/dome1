<template>
 <div class="zh">
     <img src="../assets/img/img26.png">
     <hr class="ben">
     <div class="bwn">
       <ul class="bwn1">
       <li>
<img src="../assets/img/img27.png">
<a href="" class="brn1">{{ben1}}</a>
<a href="" class="brn2">+</a>
<a href=""><img src="../assets/img/img30.png"></a>
<ul>
  <li class="brn3">
    <a href="" class="brn4" >{{ben2}}</a>
  </li>
  <li>
    <a href="" class="brn4">{{ben3}}</a>
  </li>
  <li>
    <a href="" class="brn4">{{ben4}}</a>
  </li>
  <li>
    <a href="" class="brn4">{{ben5}}</a>
  </li>
</ul>
       </li>
     </ul>
<ul class="bwn2">
       <li>
<img src="../assets/img/img28.png">
<a href="" class="brn1">{{zen1}}</a>
<a href="" class="brn2">+</a>
<a href=""><img src="../assets/img/img31.png"></a>
<ul>
  <li class="brn3">
    <a href="" class="brn4" >{{zen2}}</a>
  </li>
  <li>
    <a href="" class="brn4">{{zen3}}</a>
  </li>
  <li>
    <a href="" class="brn4">{{zen4}}</a>
  </li>
  <li>
    <a href="" class="brn4">{{zen5}}</a>
  </li>
</ul>
       </li>
     </ul>
     <ul class="bwn3">
       <li>
<img src="../assets/img/img29.png">
<a href="" class="brn1">{{xen1}}</a>
<a href="" class="brn2">+</a>
<a href=""><img src="../assets/img/img32.png"></a>
<ul>
  <li class="brn3">
    <a href="" class="brn4" >{{xen2}}</a>
  </li>
  <li>
    <a href="" class="brn4">{{xen3}}</a>
  </li>
  <li>
    <a href="" class="brn4">{{xen4}}</a>
  </li>
  <li>
    <a href="" class="brn4">{{xen5}}</a>
  </li>
</ul>
       </li>
     </ul>
     </div>
  </div>
</template>

<script>
export default {
  name: 'Zhong',
  data () {
    return {
      ben1: '文旅',
      ben2: '系列片《畅游渝东南·领略武陵风》今日开播',
      ben3: '重庆芭蕾舞团《死水微澜》西部巡演收官',
      ben4: '让“山水之城·美丽之地”重庆走向世界',
      ben5: '外国驻渝领团“零距离”体验中医药文化',
      zen1: '汽车',
      zen2: '2020年在即 影响汽车市场的三大政策因素',
      zen3: '12.12换车节车型大赏',
      zen4: '重庆三大“爆款车”均月销破万',
      zen5: '东南汽车携旗下DX5等热销车型亮相广州车展',
      xen1: '娱乐',
      xen2: '第十六届MAHB年度先生盛典举行',
      xen3: '丰富科普形式 让观众体会科学乐趣',
      xen4: '王珞丹携新片《被光抓走的人》来渝路演',
      xen5: '两江创意活动月在金山意库举行'
    }
  }
}
</script>

<style>
.ben{
 width: 100%;
  height: 3px;
  background-color: cadetblue;
  margin: 0;
  padding: 0;
  position: relative;
}
.bwn{
  width: 100%;
  height: 400px;

}
.bwn1{
  list-style: none;
  padding-left: 140px;
  padding-right: 40px;
  width:410px;
  height: 400x;;
  float: left;
  margin-top: 0px;
  margin-bottom: 0px;
}
.bwn2{
  list-style: none;
  padding-left: 50px;
  padding-right: 40px;
  width: 410px;
  height: 400px;;
  float: left;
  margin-top: 0px;
   margin-bottom: 0px;
}
.bwn3{
  list-style: none;
  padding-left: 50px;
  padding-right: 40px;
  width: 410px;
  height: 400px;;
  float: left;
  margin-top: 0px;
   margin-bottom: 0px;
}
.brn1{
  font-size: 20px;
  font-weight:900;
  position:absolute;
  position: relative;
  left: 3px;
  bottom: 10px;
}
.brn2{
  font-size: 20px;
  font-weight:900;
  position:absolute;
   left: 300px;
bottom: 10px;
  position: relative;

}
.brn3{
  color: black;
}
.brn4{
  font-size: 15px;
  color: black;
}
</style>
