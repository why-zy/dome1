<template>
<div>
<ul class="btn1">
    <li class="asd2">
        <img src="../assets/img/img40.png" alt="">
        <a href="" class="asd1">浏览更多</a>
        <hr class="asd3">
        <img src="../assets/img/img41.png" class="asd4">
        <ul class="asd7">
          <li class="asd6">
            <img src="../assets/img/img42.png">
            <a href="" class="asd5">+</a>
             <hr class="asd3">
          </li>
          <ul class="asd8">
         <li><a href="" class="asd9">{{asd1}}</a></li>
         <li><a href="" class="asd9">{{asd2}}</a></li>
         <li><a href="" class="asd9">{{asd3}}</a></li>
         <li><a href="" class="asd9">{{asd4}}</a></li>
         <li><a href="" class="asd9">{{asd5}}</a></li>
          </ul>
        </ul>
         <ul class="asd7">
          <li class="asd6">
            <img src="../assets/img/img43.png">
            <a href="" class="asd5">+</a>
             <hr class="asd3">
          </li>
          <ul class="asd8">
         <li><a href="" class="asd9">{{asd6}}</a></li>
         <li><a href="" class="asd9">{{asd7}}</a></li>
         <li><a href="" class="asd9">{{asd8}}</a></li>
         <li><a href="" class="asd9">{{asd9}}</a></li>
         <li><a href="" class="asd9">{{asd10}}</a></li>
          </ul>
        </ul>
         <ul class="asd71">
          <li class="asd6">
            <img src="../assets/img/img44.png">
            <span class="asd10">资讯·服务</span>
            <a href="" class="asd5">+</a>
             <hr class="asd3">
          </li>
                    <ul class="end1">
            <li>
              <img src="../assets/img/img47.png" alt="">
            </li>
          </ul>
          <ul class="end2">
            <li>
              <a href="" class="end5">{{en1}}</a>
              <ul class="end6">
                <li>
                  {{en2}}<a href="">[详情]</a>
                </li>
              </ul>
            </li>
          </ul>
          <br>
          <br>
          <br>
          <ul class="asd8">
         <li><a href="" class="asd9">{{asd11}}</a></li>
         <li><a href="" class="asd9">{{asd12}}</a></li>
         <li><a href="" class="asd9">{{asd13}}</a></li>
         <li><a href="" class="asd9">{{asd14}}</a></li>
          </ul>
        </ul>
         <ul class="asd71">
          <li class="asd6">
            <img src="../assets/img/img42.png">
            <span class="asd10">社区·评论</span>
            <a href="" class="asd5">+</a>
             <hr class="asd3">
          </li>
          <ul class="end1">
            <li>
              <img src="../assets/img/img47.png" alt="">
            </li>
          </ul>
          <ul class="end2">
            <li>
              <a href="" class="end5">{{en3}}</a>
              <ul class="end6">
                <li>
                  {{en4}}<a href="">[详情]</a>
                </li>
              </ul>
            </li>
          </ul>
          <br>
          <br>
          <br>
          <ul class="asd8">
         <li><a href="" class="asd9">{{asd16}}</a></li>
         <li><a href="" class="asd9">{{asd17}}</a></li>
         <li><a href="" class="asd9">{{asd18}}</a></li>
         <li><a href="" class="asd9">{{asd19}}</a></li>
          </ul>
        </ul>
    </li>
</ul>
<ul class="btn2">
  <li>
    <a href=""><img src="../assets/img/img48.png"></a>
    <br>
    <br>
    <a href=""><img src="../assets/img/img49.png"></a>
    <br>
    <ul class="end7">
      <li>
       <img src="../assets/img/img50.png">
    <span class="end8">人物.故事</span>
    <a href="" class="end9">+</a>
    <br>
    <img src="../assets/img/img51.png">
    <ul class="end10">
      <li>
        {{end5}}
      </li>
    </ul>
    </li>
    </ul>
    <br>
    <br>
        <ul class="end11">
      <li>
       <img src="../assets/img/img52.png">
    <span class="end8">中新出版</span>
    <a href="" class="end9">+</a>
    <br>
    <img src="../assets/img/img53.png">
    </li>
    </ul>
  </li>
</ul>
</div>
</template>

<script>
export default {
  name: 'Mack',
  data () {
    return {
      asd1: '【印尼商报】重庆开通首条直飞老挝航线',
      asd2: '【印尼商报】亚信非政府论坛第三次会议在重庆开幕',
      asd3: '【星暹日报】重庆渝中区将打造国际金融聚集地',
      asd4: '【星报】重庆警方破获特大集资诈骗案',
      asd5: '【印尼商报】上半年机器人销量首次同比下降',
      asd6: '【印尼商报】上半年机器人销量首次同比下降',
      asd7: '港府推本地游 旅行社每接待一人可获资助100港元',
      asd8: '香港油麻地2小时内发生2宗劫案',
      asd9: '驻港公署特派员：黑衣暴徒不是香港青年的代表',
      asd10: '“镜海归帆图交响诗音乐会”在澳门首演',
      asd11: '铜梁：寒冬送温暖 关爱贫困户',
      asd12: '铜梁：敬老院1300余五保老人“澡”回幸福',
      asd13: '铜梁：铜梁龙景区50万只五色风车邀你去打卡',
      asd14: '长寿利用智能手段两分钟内消除铁路险情',
      asd16: '敦煌欢歌“巨龙”来 幸福向远方延伸',
      asd17: '武陵深处腾“蛟龙” 幸福生活擎画来',
      asd18: '高铁修到家门口，幸福歌声传四方',
      asd19: '沿着春天的高铁足迹奋蹄疾驰',
      en1: '国翰能源成功举办2019年重庆区域合作伙伴大会',
      en2: '国翰能源成功举办2019年重庆区域合作伙伴大...',
      en3: '让老旧小区“面子”好看“里子”好用',
      en4: '“旧房改造成新房，我们真是欢喜１12月16日... ',
      end5: '退役后本可以享受安逸的生活，但退役军人张国全却不愿意在正当壮年时混过余生，于是他选择和志同... '

    }
  }
}
</script>

<style>
.btn1{
  float: left;
  width: 1000px;
  height: 910px;
  list-style: none;
}
.btn2{
float: right;
width: 500px;
height: 600px;
list-style: none;
}
.asdf1{
  margin: 0;
  padding: 0;
}
.asd1{
position: relative;
position: absolute;
top: 35px;
right: 10px;
}
.asd2{
  width: 1000px;
  height: 500px;
  position: relative;
}
.asd3{
   width: 100%;
  height: 3px;
  background-color: cadetblue;
  margin: 0;
  padding: 0;
  position: relative;
}
.asd4{
  width: 100%;
}
.asd5{
  font-size: 20px;
  color: black;
  font-weight:bold;
  position: relative;
  position: absolute;
  top: 5px;
  right: 10px;
}
.asd6{
  list-style: none;
  padding: 0;
  margin: 0;
}
.asd7{
  padding: 0;
 margin: 0px 70px 0px 0px;
  width: 430px;
  height: 210px;
  position: relative;
  float: left;
}
.asd71{
  padding: 0;
 margin: 0px 70px 0px 0px;
  width: 430px;
  height: 280px;
  position: relative;
  float: left;
}
.asd8{
  margin: 20px;
  padding: 0;
  color: black;
}
.asd9{
  color: #333333;
  font-size: 16px;
  margin: 2px;
}
.asd10{
    font-size: 20px;
  color: black;
  font-weight:bold;
  position: relative;
  position: absolute;
  top: 10px;
}
.end1{
  float: left;
  padding: 0;
  margin: 0;
  list-style: none;
}

.end2{
  float: left;
  width:215px;
  padding-left: 20px;
  height: 110px;
  margin-bottom: 20px;
  list-style: none;
}
.end5{
  font-size: 17px;
  color: black;
}
.end6{
  list-style: none;
  font-size: 15px;
  color:#555555;
  padding: 0;
  text-indent:2em;
}
.end7{
  width:280px ;
  height: 300px;
  background-color: #f8f6f6;
  padding: 20px;
  list-style: none;
  position: relative;
}
.end8{
  font-size: 20px;
  font-weight:bold;
  color: #333333;
  position: relative;
  position: absolute;
  top: 27px;
}
.end9{
    font-size: 15px;
  font-weight:bold;
  color: #111111;
  position: relative;
  position: absolute;
  top: 10px;
  right: 10px;
}
.end10{
  color: #555555;
  font-size: 13px;
  text-indent: 2em;
  list-style: none;
  padding: 0;
}
.end11{
    width:280px ;
  height: 250px;
  background-color: #f8f6f6;
  padding: 20px;
  list-style: none;
  position: relative;
}
</style>
