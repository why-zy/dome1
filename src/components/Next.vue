<template>
 <div class="zhi">
     <img src="../assets/img/img33.png">
     <hr class="ben">
     <div class="bwn">
       <ul class="bwn1">
       <li>
<img src="../assets/img/img34.png">
<a href="" class="brn1">{{ben1}}</a>
<a href="" class="brn2">+</a>
<a href=""><img src="../assets/img/img37.png"></a>
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
<img src="../assets/img/img35.png">
<a href="" class="brn1">{{zen1}}</a>
<a href="" class="brn2">+</a>
<a href=""><img src="../assets/img/img38.png"></a>
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
<img src="../assets/img/img36.png">
<a href="" class="brn1">{{xen1}}</a>
<a href="" class="brn2">+</a>
<a href=""><img src="../assets/img/img39.png"></a>
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
  name: 'Next',
  data () {
    return {
      ben1: '美食',
      ben2: '40国农特产品来渝参展 市民可淘全球好货',
      ben3: '重庆市沙坪坝区餐饮住宿行业协会成立',
      ben4: '一把好面坊：大胆出新好吃又营养的桑叶面条',
      ben5: '这些汤争取都煲一次 滋阴润燥养五脏',
      zen1: '教育',
      zen2: '砥砺前行 为了更好的自己',
      zen3: '“民族刺绣+剪纸工艺品制作技术”培训开班',
      zen4: '智联西门子 校企铸匠魂',
      zen5: '华夏职业教育教师发展共同体成立',
      xen1: '健康',
      xen2: '重庆建卡贫困户实现家庭医生签约全覆盖',
      xen3: '重庆儿童医院开展“健康科普达人秀”',
      xen4: '欧亚专家首次联手推荐中国聚焦超声消融技术',
      xen5: '86岁患者在新桥医院成功接受左心耳封堵术'
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
