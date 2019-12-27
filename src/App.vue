/* eslint-disable vue/require-v-for-key */
<template>
  <div id="app">
    <div class="navbar">
  <a href="" v-for="item in nav" :key="item" class="item">{{item}}</a>
  </div>
  <div class="navcen">
          <ul class="navcen-left">
         <li>
           <img src="../src/assets/img/img1.png">
<a href="" class="a2" :key="nava">{{ nava }}</a>
<br>
<a href="" class="navb" v-for="item in navb" :key="item">{{ item }}</a>
         </li>
       </ul>
       <ul class="navcen-right">
         <li>
           <img src="../src/assets/img/img2.png">
         </li>
       </ul>
  </div>
  <hr class="na">
  <div class="navi">
    <ul class="navj">
      <li>
<swiper class="navd">
  <swiper-item><a href=""></a><img src="../src/assets/img/img3.png"></swiper-item>
  <swiper-item><a href=""></a><img src="../src/assets/img/img4.png"></swiper-item>
  <swiper-item><a href=""></a><img src="../src/assets/img/img5.png"></swiper-item>
</swiper>
      </li>
    </ul>
        <ul class="navk">
      <li>
         <a href="" class="nave">渝首次发布建筑物外立面清洁标准</a>
<ul class="nave-a">
<li>
  <a href="">中国丝绸业面临下行压力何以“解愁”：科技、内需、品质</a></li>
  <br>
  <li><a href="">重庆市转贷总额已达450余亿元</a></li>
  <br>
  <li><a href="">重庆加快培育成长型中小微企业</a>
  </li>
</ul>
 <a href="" class="nave">重庆前三季度新增减税95.5亿元</a>
<ul class="nave-a">
<li>
  <a href="">兜底解决建档立卡贫困家庭大学生学费</a></li>
  <br>
  <li><a href="">重庆首办残疾人旱地冰壶赛 300名运动员参与</a></li>
  <br>
  <li><a href="">重庆市主城社区体育文化公园受市民青睐</a>
  </li>
</ul>
      </li>
    </ul>
        <ul class="navl">
      <li>
        <img src="../src/assets/img/img6.png">
<span class="navg">专题.直播</span>
<a href="" class="navf">+</a>
<br>
<img src="../src/assets/img/img7.png">
<ul class="navh">
  <li>宪法进网络</li>
  <li>重庆全面融入共建“一带一路”</li>
  <li>2019第六届互联网大会</li>
</ul>
      </li>
    </ul>
  </div>
<div>
  <img src="../src/assets/img/img8.png" alt="" class="nbvb">
  <hr class="nbva">
<div>
   <ul class="navj">
      <li>
<ul class="z4">
    <li>
  <a href="" class="z10">{{z1}}</a>
  <br>
  <br>
      <img class="zb" src="../src/assets/img/img9.png">
    </li>
  </ul>
   <ul class="z5">
    <li>
      <a href="" class="z9">{{za}}</a>
      <br>
      <br>
      <br>
      <a href="" class="z8">{{z2}}</a>
      <br>
      <ul class="z7">
        <li>
          {{z3}}<a href="" class="z6">[详情]</a>
        </li>
      </ul>
    </li>
  </ul>

  <br>
   <ul class="z12">
    <li v-for="item in z11" :key="item">{{item}}</li>
  </ul>
  <hr class="z13">
      </li>
    </ul>
        <ul class="navk">
      <li>
         <ul class="x4">
    <li>
  <a href="" class="x10">{{x1}}</a>
  <br>
  <br>
      <img class="xb" src="../src/assets/img/img10.png">
    </li>
  </ul>
   <ul class="x5">
    <li>
      <a href="" class="x9">{{xa}}</a>
      <br>
      <br>
      <br>
      <a href="" class="x8">{{x2}}</a>
      <br>
      <ul class="x7">
        <li>
          {{x3}}<a href="" class="x6">[详情]</a>
        </li>
      </ul>
    </li>
  </ul>

  <br>
   <ul class="x12">
    <li v-for="item in x11" :key="item">{{item}}</li>
  </ul>
  <hr class="x13">
      </li>
    </ul>
        <ul class="navm">
      <li>
        <img src="../src/assets/img/img13.png">
<span class="navg">中新视频</span>
<a href="" class="navf">+</a>
<br>
<img src="../src/assets/img/img14.png">
<br>
    <img src="../src/assets/img/img17.png">
    <a href="">“相约金秋后”中国画在王琦美术博物馆展出</a>
      </li>
    </ul>
</div>
<div>
     <ul class="navj">
      <li>
<ul class="q4">
    <li>
  <a href="" class="q10">{{q1}}</a>
  <br>
  <br>
      <img class="qb" src="../src/assets/img/img11.png">
    </li>
  </ul>
   <ul class="q5">
    <li>
      <a href="" class="q9">{{qa}}</a>
      <br>
      <br>
      <br>
      <a href="" class="q8">{{q2}}</a>
      <br>
      <ul class="q7">
        <li>
          {{z3}}<a href="" class="q6">[详情]</a>
        </li>
      </ul>
    </li>
  </ul>

  <br>
   <ul class="q12">
    <li v-for="item in q11" :key="item">{{item}}</li>
  </ul>
  <hr class="q13">
      </li>
    </ul>
        <ul class="navk">
      <li>
         <ul class="w4">
    <li>
  <a href="" class="w10">{{w1}}</a>
  <br>
  <br>
      <img class="wb" src="../src/assets/img/img12.png">
    </li>
  </ul>
   <ul class="w5">
    <li>
      <a href="" class="w9">{{wa}}</a>
      <br>
      <br>
      <br>
      <a href="" class="w8">{{w2}}</a>
      <br>
      <ul class="w7">
        <li>
          {{w3}}<a href="" class="w6">[详情]</a>
        </li>
      </ul>
    </li>
  </ul>

  <br>
   <ul class="w12">
    <li v-for="item in w11" :key="item">{{item}}</li>
  </ul>
  <hr class="w13">
      </li>
    </ul>
        <ul class="navm">
      <li>
        <img src="../src/assets/img/img15.png">
<a href="" class="navf">+</a>
<br>
<img src="../src/assets/img/img16.png">
<br>
    <img src="../src/assets/img/img17.png">
    <a href="">“重庆市商务委员会19日下午发布消息称，为了让人民群众过上一个愉...</a>
    <a href="" class="navn">[详</a>
      </li>
    </ul>
</div>
</div>
<img src="../src/assets/img/img18.png" class="navo">
<HelloWorld></HelloWorld>
<Zhong></Zhong>
<Next></Next>
<Mack></Mack>
<hr class="btn">
<Last></Last>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from '../src/components/common/swiper'
import HelloWorld from '../src/components/HelloWorld'
import Zhong from '../src/components/Zhong'
import Next from '../src/components/Next'
import Mack from '../src/components/Mack'
import Last from '../src/components/Last'
export default {
  name: 'App',
  components: {
    Swiper,
    SwiperItem,
    HelloWorld,
    Zhong,
    Next,
    Mack,
    Last
  },
  data () {
    return {
      nav: ['首页', '中新社报道重庆', '聚焦重庆', '投资重庆', '乐活重庆', '行走重庆', '图片.重庆IN', '中新视频', '房产', '文旅', '教育', '园区', '飞阅渝州'],
      nava: '重庆市第五届人大常委会第二十九次主任会议举行',
      navb: ['重庆将打造千亿元级智能安防产业', '确保高质量如期打赢脱贫攻坚战', '为决胜全面建成小康社会贡献智慧力量'],
      z1: '中新记者看重庆',
      za: '更多>>',
      z2: '亚信非政府论坛第三次会议在重庆开幕',
      z3: '亚信非政府论坛第三次会议主席,  全国政协副主席秘书长夏宝龙在作主旨讲话...',
      z11: ['多国专家呼吁加强亚洲区域内安全合作', '中国学者报告指出外媒炒作涉疆"内部文件"存"三大谬误', '重庆云阳发现新的恐龙动物群'],
      x1: '本网报道',
      xa: '更多>>',
      x2: '重庆首办残疾人旱地冰壶赛',
      x3: '第四届中国残疾人冰雪运动季暨2019重庆市残疾人旱地冰壶赛21日开赛。',
      x11: ['重庆发展软件服务辐射“一带一路”沿线国家', '乌拉圭驻重庆总领事馆开馆', '重庆慈善总会今年款物支出近9成用于脱贫攻坚'],
      q1: '社会 · 法治',
      qa: '更多>>',
      q2: '重庆12315投诉举报中心建成投用',
      q3: '20日，重庆市市场监督管理局12315投诉举报中心建成投用。今后，12315热线统...',
      q11: ['重庆奉节村民担任“交通劝导员” 劝出新变化', '全国餐厨废弃物资源化利用交流会在渝召开', '“大美水土·重庆瑰宝”主题活动在渝开幕'],
      w1: '时政 · 区县',
      wa: '更多>>',
      w2: '北碚让绿色“立”起来',
      w3: '城市公园、城市道路绿化、坡地堡坎崖壁绿化、城市节点景观绿化……北碚区坚...',
      w11: ['合川区加压加温出实招为民服务解难题', '重庆中梁山风景区项目举行开工仪式', '重庆长寿国际慢城开园迎客']
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
.btn{
    width: 100%;
}
.item{
  padding: 10px;
  font-size: 20px;
  color: aliceblue;
  text-decoration:none;
}
.na{
  width: 100%;

}
a{
  text-decoration:none;
}
.navbar{
  height: 40px;
  width: 100%;
  background-color: cornflowerblue;
  align-self: auto;
 text-align: center;
}

.a2{
  margin-left: 10px;
   text-decoration:none;
   font-size: 40px;
   color: #000;
}
.navb{
  margin-left: 10px;
   text-decoration:none;
   font-size: 5px;
   color: #000;
   margin-top: 10px;
}
.navcen{
  margin: 0;
  padding: 0;
  height: 100px;
  background-color: aliceblue;
}
  .navcen-left {
   float: left;
   width: 65%;
   margin-top: 10px;
   margin-left: 10px;
    list-style: none;
}
 .navcen-right {
  float: right;;
  width: 20%;
  margin-top: 10px;
  margin-right: 20px;
   list-style: none;
}
.navd{
width: 500px;
height: 300px;
}
.nave{
font-size: 30px;
color: #000
}
.nave-a  li a{
color: #000;
}
.navf{
  margin-left:100px;
}
.navg{
  margin-left: 30px;
  font-size: 20px;
}
.navh{
  font-size: 15px;
  color: #000;
}
.navi{
  background-color: aliceblue;
}
.navj{
  list-style: none;
  float: left;
}
.navk{
list-style: none;
float: left;
}
.navl{
list-style: none;
float: left;
background-color: #f1efef;
margin-left: 100px;
padding: 10px;
margin-right: 10px;
}
.nbva{
  width: 100%;
  height: 3px;
  background-color: cadetblue;
  margin: 0;
  padding: 0;
}
.nbvb img{
   margin: 0;
  padding: 0;
  height: 100px;
  background-color: aliceblue;
}
.nbvc{
  width: 530px;
  height: 340px;
  margin-left: 0;
}
.z4{
  float: left;
  list-style: none;
  margin-top: 10px;
}
.z5{
  float: left;
  width: 250px;
  height: 190px;
  color: #000;
  list-style: none;
  margin-top: 10px;
}
.z6{
  color: red;
}
.z7{
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 15px;
  text-indent:2em;
 color: #555555;
}
.z8{
  color: #000;
  font-size: 17px;
  font-weight:bold;
  margin-top: 50px;
}
.z9{
  color: #555555;
  font-size: 12px;
  display: block;
  height: 16px;
  float: right;
  margin-top: 0;
  position: relative;
  right: 0;top: 10px;
}
.z10{
 list-style: none;
  font-weight:bold;
  color: #000;
  font-size:25px;
  margin-bottom: 10px;
  margin-top: 10px;
}
.z12{
  width: 450px;
  height:250px;
  margin-top: 10px;
   text-indent:1em;
   margin-bottom: 5px;
}
.nbvd{
  width: 580px;
  height: 200px;
}
.z13{
 height: 0.5px;
  background-color: #999999;
  margin: 1px;
  padding: 0;
}
.navvb{
  list-style: none;
}
.x4{
  float: left;
  list-style: none;
  margin-top: 10px;
}
.x5{
  float: left;
  width: 250px;
  height: 190px;
  color: #000;
  list-style: none;
  margin-top: 10px;
}
.x6{
  color: red;
}
.x7{
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 15px;
  text-indent:2em;
 color: #555555;
}
.x8{
  color: #000;
  font-size: 17px;
  font-weight:bold;
  margin-top: 50px;
}
.x9{
  color: #555555;
  font-size: 12px;
  display: block;
  height: 16px;
  float: right;
  margin-top: 0;
  position: relative;
  right: 0;top: 10px;
}
.x10{
 list-style: none;
  font-weight:bold;
  color: #000;
  font-size:25px;
  margin-bottom: 10px;
  margin-top: 10px;
}
.x12{
  width: 450px;
  height:250px;
  margin-top: 10px;
   text-indent:1em;
   margin-bottom: 5px;
}
.nbvd{
  width: 580px;
  height: 200px;
}
.x13{
 height: 0.5px;
  background-color: #999999;
  margin: 1px;
  padding: 0;
}
.navvb{
  list-style: none;
}
.q4{
  float: left;
  list-style: none;
  margin-top: 10px;
}
.q5{
  float: left;
  width: 250px;
  height: 190px;
  color: #000;
  list-style: none;
  margin-top: 10px;
}
.q6{
  color: red;
}
.q7{
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 15px;
  text-indent:2em;
 color: #555555;
}
.q8{
  color: #000;
  font-size: 17px;
  font-weight:bold;
  margin-top: 50px;
}
.q9{
  color: #555555;
  font-size: 12px;
  display: block;
  height: 16px;
  float: right;
  margin-top: 0;
  position: relative;
  right: 0;top: 10px;
}
.q10{
 list-style: none;
  font-weight:bold;
  color: #000;
  font-size:25px;
  margin-bottom: 10px;
  margin-top: 10px;
}
.q12{
  width: 450px;
  height:250px;
  margin-top: 10px;
   text-indent:1em;
   margin-bottom: 5px;
}
.nbvd{
  width: 580px;
  height: 200px;
}
.q13{
 height: 0.5px;
  background-color: #999999;
  margin: 1px;
  padding: 0;
}
.w4{
  float: left;
  list-style: none;
  margin-top: 10px;
}
.w5{
  float: left;
  width: 250px;
  height: 190px;
  color: #000;
  list-style: none;
  margin-top: 10px;
}
.w6{
  color: red;
}
.w7{
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 15px;
  text-indent:2em;
 color: #555555;
}
.w8{
  color: #000;
  font-size: 17px;
  font-weight:bold;
  margin-top: 50px;
}
.w9{
  color: #555555;
  font-size: 12px;
  display: block;
  height: 16px;
  float: right;
  margin-top: 0;
  position: relative;
  right: 0;top: 10px;
}
.w10{
 list-style: none;
  font-weight:bold;
  color: #000;
  font-size:25px;
  margin-bottom: 10px;
  margin-top: 10px;
}
.w12{
  width: 450px;
  height:250px;
  margin-top: 10px;
   text-indent:1em;
   margin-bottom: 5px;
}
.nbvd{
  width: 580px;
  height: 200px;
}
.w13{
 height: 0.5px;
  background-color: #999999;
  margin: 1px;
  padding: 0;
}
.navm{
list-style: none;
float: left;
background-color: #f1efef;
margin-left: 10px;
font-size: 13px;
color: #000;
width: 300px;
height: 300px;
}
.navm a{
  color: #555555;
}
.navn{
  color: #5473c9;
}
.navo{
  width: 100%;
}
</style>
