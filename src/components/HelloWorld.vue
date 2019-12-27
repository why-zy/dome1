<template>
  <div class="hello">
     <img src="../assets/img/img19.png">
     <hr class="ben">
     <div class="bwn">
       <ul class="bwn1">
       <li>
<img src="../assets/img/img20.png">
<a href="" class="brn1">{{ben1}}</a>
<a href="" class="brn2">+</a>
<a href=""><img src="../assets/img/img23.png"></a>
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
<img src="../assets/img/img21.png">
<a href="" class="brn1">{{zen1}}</a>
<a href="" class="brn2">+</a>
<a href=""><img src="../assets/img/img24.png"></a>
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
<img src="../assets/img/img22.png">
<a href="" class="brn1">{{xen1}}</a>
<a href="" class="brn2">+</a>
<a href=""><img src="../assets/img/img25.png"></a>
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
  name: 'HelloWorld',
  data () {
    return {
      ben1: '园区',
      ben2: '重庆国际物流园实现进出口贸易额40亿美元',
      ben3: '“国际物流大通道”网络主题活动启动',
      ben4: '西南首个国际B级专业滑板赛场将亮相重庆',
      ben5: '果园港口岸开放为外向型货物提供物流服务',
      zen1: '金融',
      zen2: '交行：响应“百行进万企”破解企业融资难题',
      zen3: '“渝企金服”为企业发布3260项融资需求',
      zen4: '2019全球女性创业创新峰会开讲',
      zen5: '2019江北嘴十大年度经济人物正式出炉',
      xen1: '房产',
      xen2: '从分销到“被分销” 房地产渠道营销模式被颠覆？',
      xen3: '重庆真正的好房子原来在这里',
      xen4: '买西永合院 就看水印三生',
      xen5: '房价超25000元 最后的北环你会选吗？'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  float: left;
  height: 400px;
  margin-top: 0;
  margin-bottom: 0;
}
.bwn2{
  list-style: none;
  padding-left: 50px;
  padding-right: 40px;
  width: 410px;
 height: 400px;
  margin-top: 0;
  float: left;
   margin-bottom: 0;
}
.bwn3{
  list-style: none;
  padding-left: 50px;
  padding-right: 40px;
  width: 410px;
  height: 400px;
  margin-top: 0;
  float: left;
   margin-bottom: 0;
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
