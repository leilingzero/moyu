var rule = {
title: '看了么',
host: 'https://www.ksksl.com',
// url:'/show/fyclass/page/fypage.html',
url: '/show/fyclassfyfilter.html',
filterable: 1, //是否启用分类筛选,
filter_url: '{{fl.area}}{{fl.by or "/by/time"}}{{fl.class}}/page/fypage{{fl.year}}',
filter: {
"dy": [{
"key": "area",
"name": "地区",
"value": [{
"n": "全部",
"v": ""
}, {
"n": "中国大陆",
"v": "/area/中国大陆"
}, {
"n": "中国香港",
"v": "/area/中国香港"
}, {
"n": "中国台湾",
"v": "/area/中国台湾"
}, {
"n": "美国",
"v": "/area/美国"
}, {
"n": "日本",
"v": "/area/日本"
}, {
"n": "韩国",
"v": "/area/韩国"
}, {
"n": "英国",
"v": "/area/英国"
}, {
"n": "法国",
"v": "/area/法国"
}]
}, {
"key": "class",
"name": "分类",
"value": [{
"n": "全部",
"v": ""
}, {
"n": "喜剧",
"v": "/class/喜剧"
}, {
"n": "爱情",
"v": "/class/爱情"
}, {
"n": "恐怖",
"v": "/class/恐怖"
}, {
"n": "动作",
"v": "/class/动作"
}, {
"n": "科幻",
"v": "/class/科幻"
}, {
"n": "剧情",
"v": "/class/剧情"
}, {
"n": "警匪",
"v": "/class/警匪"
}, {
"n": "犯罪",
"v": "/class/犯罪"
}, {
"n": "动画",
"v": "/class/动画"
}, {
"n": "奇幻",
"v": "/class/奇幻"
}, {
"n": "武侠",
"v": "/class/武侠"
}, {
"n": "冒险",
"v": "/class/冒险"
}, {
"n": "枪战",
"v": "/class/枪战"
}, {
"n": "恐怖",
"v": "/class/恐怖"
}, {
"n": "悬疑",
"v": "/class/悬疑"
}, {
"n": "惊悚",
"v": "/class/惊悚"
}, {
"n": "经典",
"v": "/class/经典"
}, {
"n": "青春",
"v": "/class/青春"
}, {
"n": "文艺",
"v": "/class/文艺"
}, {
"n": "古装",
"v": "/class/古装"
}, {
"n": "历史",
"v": "/class/历史"
}, {
"n": "运动",
"v": "/class/运动"
}, {
"n": "农村",
"v": "/class/农村"
}]
}, {
"key": "year",
"name": "年份",
"value": [{
"n": "全部",
"v": ""
}, {
"n": "2025",
"v": "/year/2025"
}, {
"n": "2024",
"v": "/year/2024"
}, {
"n": "2023",
"v": "/year/2023"
}, {
"n": "2022",
"v": "/year/2022"
}, {
"n": "2021",
"v": "/year/2021"
}, {
"n": "2020",
"v": "/year/2020"
}, {
"n": "2019",
"v": "/year/2019"
}, {
"n": "2018",
"v": "/year/2018"
}, {
"n": "2017",
"v": "/year/2017"
}, {
"n": "2016",
"v": "/year/2016"
}, {
"n": "2015",
"v": "/year/2015"
}, {
"n": "2014",
"v": "/year/2014"
}, {
"n": "2013",
"v": "/year/2013"
}, {
"n": "2012",
"v": "/year/2012"
}, {
"n": "2011",
"v": "/year/2011"
}, {
"n": "2010",
"v": "/year/2010"
}, {
"n": "2009",
"v": "/year/2009"
}]
}, {
"key": "by",
"name": "排序",
"value": [{
"n": "时间",
"v": "/by/time"
}, {
"n": "人气",
"v": "/by/hits"
}, {
"n": "评分",
"v": "/by/score"
}]
}],
"tv": [{
"key": "area",
"name": "地区",
"value": [{
"n": "全部",
"v": ""
}, {
"n": "中国大陆",
"v": "/area/中国大陆"
}, {
"n": "中国香港",
"v": "/area/中国香港"
}, {
"n": "中国台湾",
"v": "/area/中国台湾"
}, {
"n": "美国",
"v": "/area/美国"
}, {
"n": "日本",
"v": "/area/日本"
}, {
"n": "韩国",
"v": "/area/韩国"
}, {
"n": "英国",
"v": "/area/英国"
}, {
"n": "法国",
"v": "/area/法国"
}]
}, {
"key": "class",
"name": "分类",
"value": [{
"n": "全部",
"v": ""
}, {
"n": "古装",
"v": "/class/古装"
}, {
"n": "言情",
"v": "/class/言情"
}, {
"n": "武侠",
"v": "/class/武侠"
}, {
"n": "偶像",
"v": "/class/美国"
}, {
"n": "家庭",
"v": "/class/家庭"
}, {
"n": "喜剧",
"v": "/class/喜剧"
}, {
"n": "战争",
"v": "/class/战争"
}, {
"n": "军旅",
"v": "/class/军旅"
}, {
"n": "谍战",
"v": "/class/谍战"
}, {
"n": "悬疑",
"v": "/class/悬疑"
}, {
"n": "罪案",
"v": "/class/罪案"
}, {
"n": "穿越",
"v": "/class/穿越"
}, {
"n": "宫廷",
"v": "/class/宫廷"
}, {
"n": "历史",
"v": "/class/历史"
}, {
"n": "神话",
"v": "/class/神话"
}, {
"n": "科幻",
"v": "/class/科幻"
}, {
"n": "年代",
"v": "/class/年代"
}, {
"n": "农村",
"v": "/class/农村"
}, {
"n": "商战",
"v": "/class/商战"
}, {
"n": "剧情",
"v": "/class/剧情"
}, {
"n": "奇幻",
"v": "/class/奇幻"
}, {
"n": "网剧",
"v": "/class/网剧"
}, {
"n": "都市",
"v": "/class/都市"
}]
}, {
"key": "year",
"name": "年份",
"value": [{
"n": "全部",
"v": ""
}, {
"n": "2025",
"v": "/year/2025"
}, {
"n": "2024",
"v": "/year/2024"
}, {
"n": "2023",
"v": "/year/2023"
}, {
"n": "2022",
"v": "/year/2022"
}, {
"n": "2021",
"v": "/year/2021"
}, {
"n": "2020",
"v": "/year/2020"
}, {
"n": "2019",
"v": "/year/2019"
}, {
"n": "2018",
"v": "/year/2018"
}, {
"n": "2017",
"v": "/year/2017"
}, {
"n": "2016",
"v": "/year/2016"
}, {
"n": "2015",
"v": "/year/2015"
}, {
"n": "2014",
"v": "/year/2014"
}, {
"n": "2013",
"v": "/year/2013"
}, {
"n": "2012",
"v": "/year/2012"
}, {
"n": "2011",
"v": "/year/2011"
}, {
"n": "2010",
"v": "/year/2010"
}, {
"n": "2009",
"v": "/year/2009"
}]
}, {
"key": "by",
"name": "排序",
"value": [{
"n": "时间",
"v": "/by/time"
}, {
"n": "人气",
"v": "/by/hits"
}, {
"n": "评分",
"v": "/by/score"
}]
}],
"zy": [{
"key": "area",
"name": "地区",
"value": [{
"n": "全部",
"v": ""
}, {
"n": "中国大陆",
"v": "/area/中国大陆"
}, {
"n": "中国香港",
"v": "/area/中国香港"
}, {
"n": "中国台湾",
"v": "/area/中国台湾"
}, {
"n": "美国",
"v": "/area/美国"
}, {
"n": "日本",
"v": "/area/日本"
}, {
"n": "韩国",
"v": "/area/韩国"
}, {
"n": "英国",
"v": "/area/英国"
}, {
"n": "法国",
"v": "/area/法国"
}]
}, {
"key": "class",
"name": "分类",
"value": [{
"n": "全部",
"v": ""
}, {
"n": "表演",
"v": "/class/表演"
}, {
"n": "播报",
"v": "/class/播报"
}, {
"n": "访谈",
"v": "/class/访谈"
}, {
"n": "体验",
"v": "/class/体验"
}, {
"n": "养成",
"v": "/class/养成"
}, {
"n": "游戏",
"v": "/class/游戏"
}, {
"n": "亲子",
"v": "/class/亲子"
}, {
"n": "美食",
"v": "/class/美食"
}, {
"n": "情感",
"v": "/class/情感"
}, {
"n": "选秀",
"v": "/class/选秀"
}, {
"n": "益智",
"v": "/class/益智"
}, {
"n": "晚会",
"v": "/class/晚会"
}, {
"n": "音乐",
"v": "/class/音乐"
}, {
"n": "文化",
"v": "/class/文化"
}, {
"n": "喜剧",
"v": "/class/喜剧"
}, {
"n": "曲艺",
"v": "/class/曲艺"
}, {
"n": "职场",
"v": "/class/职场"
}, {
"n": "脱口秀",
"v": "/class/脱口秀"
}, {
"n": "文艺",
"v": "/class/文艺"
}, {
"n": "竞技",
"v": "/class/竞技"
}, {
"n": "潮流文化",
"v": "/class/潮流文化"
}, {
"n": "体育",
"v": "/class/体育"
}, {
"n": "资讯",
"v": "/class/资讯"
}]
}, {
"key": "year",
"name": "年份",
"value": [{
"n": "全部",
"v": ""
}, {
"n": "2025",
"v": "/year/2025"
}, {
"n": "2024",
"v": "/year/2024"
}, {
"n": "2023",
"v": "/year/2023"
}, {
"n": "2022",
"v": "/year/2022"
}, {
"n": "2021",
"v": "/year/2021"
}, {
"n": "2020",
"v": "/year/2020"
}, {
"n": "2019",
"v": "/year/2019"
}, {
"n": "2018",
"v": "/year/2018"
}, {
"n": "2017",
"v": "/year/2017"
}, {
"n": "2016",
"v": "/year/2016"
}, {
"n": "2015",
"v": "/year/2015"
}, {
"n": "2014",
"v": "/year/2014"
}, {
"n": "2013",
"v": "/year/2013"
}, {
"n": "2012",
"v": "/year/2012"
}, {
"n": "2011",
"v": "/year/2011"
}, {
"n": "2010",
"v": "/year/2010"
}, {
"n": "2009",
"v": "/year/2009"
}]
}, {
"key": "by",
"name": "排序",
"value": [{
"n": "时间",
"v": "/by/time"
}, {
"n": "人气",
"v": "/by/hits"
}, {
"n": "评分",
"v": "/by/score"
}]
}],
"dm": [{
"key": "area",
"name": "地区",
"value": [{
"n": "全部",
"v": ""
}, {
"n": "中国大陆",
"v": "/area/中国大陆"
}, {
"n": "中国香港",
"v": "/area/中国香港"
}, {
"n": "中国台湾",
"v": "/area/中国台湾"
}, {
"n": "美国",
"v": "/area/美国"
}, {
"n": "日本",
"v": "/area/日本"
}, {
"n": "韩国",
"v": "/area/韩国"
}, {
"n": "英国",
"v": "/area/英国"
}, {
"n": "法国",
"v": "/area/法国"
}]
}, {
"key": "class",
"name": "分类",
"value": [{
"n": "全部",
"v": ""
}, {
"n": "热门",
"v": "/class/热门"
}, {
"n": "搞笑",
"v": "/class/搞笑"
}, {
"n": "番剧",
"v": "/class/番剧"
}, {
"n": "国创",
"v": "/class/国创"
}, {
"n": "大电影",
"v": "/class/大电影"
}, {
"n": "热血",
"v": "/class/热血"
}, {
"n": "催泪",
"v": "/class/催泪"
}, {
"n": "励志",
"v": "/class/励志"
}, {
"n": "机战",
"v": "/class/机战"
}, {
"n": "格斗",
"v": "/class/格斗"
}, {
"n": "恋爱",
"v": "/class/恋爱"
}, {
"n": "科幻",
"v": "/class/科幻"
}, {
"n": "奇幻",
"v": "/class/奇幻"
}, {
"n": "魔幻",
"v": "/class/魔幻"
}, {
"n": "推理",
"v": "/class/推理"
}, {
"n": "校园",
"v": "/class/校园"
}, {
"n": "日常",
"v": "/class/日常"
}, {
"n": "经典",
"v": "/class/经典"
}, {
"n": "历史",
"v": "/class/历史"
}, {
"n": "美食",
"v": "/class/美食"
}, {
"n": "武侠",
"v": "/class/武侠"
}, {
"n": "玄幻",
"v": "/class/玄幻"
}, {
"n": "竞技",
"v": "/class/竞技"
}]
}, {
"key": "year",
"name": "年份",
"value": [{
"n": "全部",
"v": ""
}, {
"n": "2025",
"v": "/year/2025"
}, {
"n": "2024",
"v": "/year/2024"
}, {
"n": "2023",
"v": "/year/2023"
}, {
"n": "2022",
"v": "/year/2022"
}, {
"n": "2021",
"v": "/year/2021"
}, {
"n": "2020",
"v": "/year/2020"
}, {
"n": "2019",
"v": "/year/2019"
}, {
"n": "2018",
"v": "/year/2018"
}, {
"n": "2017",
"v": "/year/2017"
}, {
"n": "2016",
"v": "/year/2016"
}, {
"n": "2015",
"v": "/year/2015"
}, {
"n": "2014",
"v": "/year/2014"
}, {
"n": "2013",
"v": "/year/2013"
}, {
"n": "2012",
"v": "/year/2012"
}, {
"n": "2011",
"v": "/year/2011"
}, {
"n": "2010",
"v": "/year/2010"
}, {
"n": "2009",
"v": "/year/2009"
}]
}, {
"key": "by",
"name": "排序",
"value": [{
"n": "时间",
"v": "/by/time"
}, {
"n": "人气",
"v": "/by/hits"
}, {
"n": "评分",
"v": "/by/score"
}]
}],
"jl": [{
"key": "area",
"name": "地区",
"value": [{
"n": "全部",
"v": ""
}, {
"n": "中国大陆",
"v": "/area/中国大陆"
}, {
"n": "日本",
"v": "/area/日本"
}, {
"n": "美国",
"v": "/area/美国"
}, {
"n": "国外",
"v": "/area/国外"
}, {
"n": "其他",
"v": "/area/其他"
}]
}, {
"key": "class",
"name": "分类",
"value": [{
"n": "全部",
"v": ""
}, {
"n": "社会",
"v": "/class/社会"
}, {
"n": "动物",
"v": "/class/动物"
}, {
"n": "文化",
"v": "/class/文化"
}, {
"n": "自然",
"v": "/class/自然"
}, {
"n": "人文",
"v": "/class/人文"
}, {
"n": "军事",
"v": "/class/军事"
}, {
"n": "历史",
"v": "/class/历史"
}, {
"n": "记录",
"v": "/class/记录"
}]
}, {
"key": "year",
"name": "年份",
"value": [{
"n": "全部",
"v": ""
}, {
"n": "2025",
"v": "/year/2025"
}, {
"n": "2024",
"v": "/year/2024"
}, {
"n": "2023",
"v": "/year/2023"
}, {
"n": "2022",
"v": "/year/2022"
}, {
"n": "2021",
"v": "/year/2021"
}, {
"n": "2020",
"v": "/year/2020"
}, {
"n": "2019",
"v": "/year/2019"
}, {
"n": "2018",
"v": "/year/2018"
}, {
"n": "2017",
"v": "/year/2017"
}, {
"n": "2016",
"v": "/year/2016"
}, {
"n": "2015",
"v": "/year/2015"
}, {
"n": "2014",
"v": "/year/2014"
}, {
"n": "2013",
"v": "/year/2013"
}, {
"n": "2012",
"v": "/year/2012"
}, {
"n": "2011",
"v": "/year/2011"
}, {
"n": "2010",
"v": "/year/2010"
}]
}, {
"key": "by",
"name": "排序",
"value": [{
"n": "时间",
"v": "/by/time"
}, {
"n": "人气",
"v": "/by/hits"
}, {
"n": "评分",
"v": "/by/score"
}]
}]
},
// searchUrl:'/ch.html?wd=**',
searchUrl: '/ch/page/fypage/wd/**.html',
searchable: 2,
headers: {
'User-Agent': 'UC_UA'
},
timeout: 5000,
// class_name: '电影&电视剧&动漫&综艺&纪录片',//静态分类名称拼接
// class_url: 'dy&tv&dm&zy&jl',//静态分类标识拼接
class_parse: '.vi-nav.swiper-wrapper&&li:gt(0):lt(6);a&&Text;a&&href;.*/(.*?).html',
play_parse: true,
lazy: `js:
var html = JSON.parse(request(input).match(/r player_.*?=(.*?) var url = html.url;
if (html.encrypt == '1') {
url = unescape(url)
} else if (html.encrypt == '2') {
url = unescape(base64Decode(url))
}
if (/\\.m3u8|\\.mp4/.test(url)) {
input = {
jx: 0,
url: url,
parse: 0
}
} else {
input
}
`,
limit: 5,
推荐: '.dx-top;li;a&&title;a&&data-original;.vod_remarks&&Text;a&&href',
double: true, // 推荐内容是否双层定位
一级: 'ul.dx-list li;a&&title;a&&data-original;.vod_remarks&&Text;a&&href',
二级: {
"title": "h1--span&&Text;",
"img": ".picHover&&img&&src",
"desc": ";;;.video-info-item:eq(0)&&Text;.item-tags&&Text",
"content": ".vod_content&&Text",
"tabs": ".play-title h2",
"lists": ".play_li.fn-clear:eq(#id) a"
},
搜索: '*',
}
