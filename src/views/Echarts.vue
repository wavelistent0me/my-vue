<template>
  <div class="page">
    <div id="main" style="width: 100%;height:400px;"></div>
    <div id="main2" style="width: 50%;height:400px;"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: "Echarts",
  data: function () {
    return {
      list: [
        {
          "statisticDate": "22-09-26",
          "averPrice": 5.00,
          "goodsName": "豆芽",
          "goodsUnitName": "件",
          "goodsId": null
        },
        {
          "statisticDate": "22-09-26",
          "averPrice": 4.00,
          "goodsName": "豆芽",
          "goodsUnitName": "kg",
          "goodsId": null
        },
        {
          "statisticDate": "22-09-25",
          "averPrice": 6.00,
          "goodsName": "豆芽",
          "goodsUnitName": "件",
          "goodsId": null
        },
        {
          "statisticDate": "22-09-25",
          "averPrice": 3.00,
          "goodsName": "豆芽",
          "goodsUnitName": "kg",
          "goodsId": null
        },
        {
          "statisticDate": "22-09-24",
          "averPrice": 11.00,
          "goodsName": "豆芽",
          "goodsUnitName": "件",
          "goodsId": null
        },
        {
          "statisticDate": "22-09-24",
          "averPrice": 3.00,
          "goodsName": "豆芽",
          "goodsUnitName": "kg",
          "goodsId": null
        },
        {
          "statisticDate": "22-09-23",
          "averPrice": 8.00,
          "goodsName": "豆芽",
          "goodsUnitName": "件",
          "goodsId": null
        },
        {
          "statisticDate": "22-09-23",
          "averPrice": 8.00,
          "goodsName": "豆芽",
          "goodsUnitName": "kg",
          "goodsId": null
        },
        {
          "statisticDate": "22-09-22",
          "averPrice": 1.00,
          "goodsName": "豆芽",
          "goodsUnitName": "件",
          "goodsId": null
        },
        {
          "statisticDate": "22-09-22",
          "averPrice": 4.00,
          "goodsName": "豆芽",
          "goodsUnitName": "kg",
          "goodsId": null
        },
        {
          "statisticDate": "22-09-21",
          "averPrice": 12.00,
          "goodsName": "豆芽",
          "goodsUnitName": "件",
          "goodsId": null
        },
        {
          "statisticDate": "22-09-21",
          "averPrice": 6.00,
          "goodsName": "豆芽",
          "goodsUnitName": "kg",
          "goodsId": null
        },
        {
          "statisticDate": "22-09-20",
          "averPrice": 5.00,
          "goodsName": "豆芽",
          "goodsUnitName": "件",
          "goodsId": null
        },
        {
          "statisticDate": "22-09-20",
          "averPrice": 3.00,
          "goodsName": "豆芽",
          "goodsUnitName": "kg",
          "goodsId": null
        },
      ]
    }
  },
  created() {
  },
  mounted() {
    var dataList = this.Sorted(this.list, "goodsUnitName");
    var listkg = this.fillList(dataList[0]);
    var listj = this.fillList(dataList[1]);

    var myChart = echarts.init(document.getElementById('main'));
    var option = {
      title: {
        text: '价格浮动图',
      },
      legend: {
        show:true
      },
      //标题与图表的距离
      grid: {
        top:"10%"
      },
      xAxis: {
        data: this.GetWeek()
      },
      yAxis: [
        {
          type: 'value',
          name: 'kg',
          //y轴背景线虚线
          splitLine: {
            lineStyle:{
              type: "dashed",
            }
          }
        },
        {
          type: 'value',
          name: '件',
          axisLine:{
            show: false,//不显示y轴线
          },
        },
      ],
      series: [
        {
          name: "按kg统计",
          data: this.GetFieldList(listkg, "averPrice"),
          yAxisIndex: 0,
          type: 'line',
          itemStyle: {
            normal: {
              color: '#16bfff'
            }
          },
          areaStyle: {
            color: '#6ed7ff',
            opacity: 0.5
          },
          label: {
            show: true,
            // 标签的文字。
            formatter: 'This is a normal label.'
          },
          // 高亮样式。
          emphasis: {
            itemStyle: {
              // 高亮时点的颜色。
              color: 'blue'
            },
            label: {
              show: true,
              // 高亮时标签的文字。
              formatter: 'This is a emphasis label.'
            }
          }
        },
        {
          name: "按件统计",
          data: this.GetFieldList(listj, "averPrice"),
          yAxisIndex: 1,
          type: 'line',
          itemStyle: {
            normal: {
              color: '#ff7b1f'
            }
          },
          areaStyle: {
            color: '#ff8d41',
            opacity: 0.5
          },
          //平均线
          markLine:{
            data: [{type: 'average', name: '平均值'}],
            itemStyle : {
              normal : {
                color:'#ffac70',
                label : {
                  show:true
                }
              }
            },
          },
        },
      ],
      tooltip : {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
    };
    myChart.setOption(option);

    var myChart = echarts.init(document.getElementById('main2'));
    option = {
      series: [
        {
          type: 'pie',
          data: [
            {
              value: 335,
              name: '直接访问'
            },
            {
              value: 234,
              name: '联盟广告'
            },
            {
              value: 1548,
              name: '搜索引擎'
            }
          ],
          //饼图的半径
          radius: '40%',
          //设置饼图的文字标签
          label: {
            normal: {
              show: true,
              position: "outside",
              //换行
              formatter: '{b}'+'\n'+'{d}%',
            }
          },
        }
      ]
    };
    myChart.setOption(option);
  },
  methods: {
    //生成最近七天
    GetWeek() {
      let days = [];
      for (let i = 0; i <= 24 * 6; i += 24) {		//今天加上前6天
        let dateItem = new Date(Date.now() - i * 60 * 60 * 1000);	//使用当天时间戳减去以前的时间毫秒（小时*分*秒*毫秒）
        let y = dateItem.getFullYear();	//获取年份
        let m = dateItem.getMonth() + 1;	//获取月份js月份从0开始，需要+1
        let d = dateItem.getDate();	//获取日期
        m = this.AddDate0(m);	//给为单数的月份补零
        d = this.AddDate0(d);	//给为单数的日期补零
        let valueItem = m + '-' + d;	//组合
        days.unshift(valueItem);	//添加至数组
      }
      return days;
    },
    //给日期加0
    AddDate0(time) {
      if (time.toString().length == 1) {
        time = '0' + time.toString();
      }
      return time;
    },
    //将JSON数组中的某一个属性取成数组
    GetFieldList(list, key) {
      console.log(list);
      var keyList = [];
      for (var i = 0; i < list.length; i++) {
        keyList.push(list[i][key])
      }
      return keyList;
    },
    //根据JSON数组中的某一属性分成几份数组
    GroupByList(array, f) {
      const groups = {};
      array.forEach(function (o) {
        const group = JSON.stringify(f(o));
        groups[group] = groups[group] || [];
        groups[group].push(o);
      });
      return Object.keys(groups).map(function (group) {
        return groups[group];
      });
    },
    Sorted(list,key) {
      const sorted = this.GroupByList(list, function (item) {
        return [item[key]];
      });
      return sorted;
    },
    //填充数据
    fillList(list) {
      var week = this.GetWeek();

      if (list.length >= 7) {
        list = list.slice(0.7);
      }

      //原数据格式为22-09-11,切割前面年份
      list.forEach(function (e) {
        e.statisticDate = e.statisticDate.substring(3, e.statisticDate.length);
      });

      var _list = [];

      for (let i = 0; i < week.length; i++) {
        if (this.binarySearch(list, week[i], "statisticDate").length > 0) {
          _list.push(this.binarySearch(list, week[i], "statisticDate")[0]);
        }
        else {
          var item = {};
          item.statisticDate = week[i];
          item.averPrice = 0;
          _list.push(item);
        }
      }
      return _list;
    },
    //JSON数组检索
    binarySearch(arr, key, field) {
      var _arr = arr.filter(function (p) {
        return p[field] == key;
      });
      return _arr;
    }
  },
}
</script>

<style scoped>

</style>