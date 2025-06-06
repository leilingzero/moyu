/**
 *    原创诺临风
 *  原创时间：2024-05-07
 *  转载请不要删除此版权声明
 */


var rule = {
    title: "新茶杯狐",
    host: "https://www.cbhtvtv.com/",
//  host: "https://www.cbhfox.com/",
    url: "/chbys/fyfilter.html",
    searchable: 2,
    quickSearch: 0,
    filterable: 1,
    detailUrl: "/cbhtv/fyid.html",
    homeUrl: "/label/hot.html",
    filter_url: "{{fl.cateId}}{{fl.area}}{{fl.by}}{{fl.class}}{{fl.lang}}{{fl.letter}}/page/fypage{{fl.year}}",
    filter: {
        "dianying": [{
            "key": "class",
            "name": "剧情",
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
                "n": "战争",
                "v": "/class/战争"
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
                "n": "微电影",
                "v": "/class/微电影"
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
            }, {
                "n": "儿童",
                "v": "/class/儿童"
            }, {
                "n": "网络电影",
                "v": "/class/网络电影"
            }]
        }, {
            "key": "area",
            "name": "地区",
            "value": [{
                "n": "全部",
                "v": ""
            }, {
                "n": "大陆",
                "v": "/area/中国大陆"
            }, {
                "n": "香港",
                "v": "/area/中国香港"
            }, {
                "n": "台湾",
                "v": "/area/中国台湾"
            }, {
                "n": "美国",
                "v": "/area/美国"
            }, {
                "n": "韩国",
                "v": "/area/韩国"
            }, {
                "n": "英国",
                "v": "/area/英国"
            }, {
                "n": "日本",
                "v": "/area/日本"
            }, {
                "n": "德国",
                "v": "/area/德国"
            }, {
                "n": "泰国",
                "v": "/area/泰国"
            }, {
                "n": "印度",
                "v": "/area/印度"
            }, {
                "n": "法国",
                "v": "/area/法国"
            }, {
                "n": "意大利",
                "v": "/area/意大利"
            }, {
                "n": "西班牙",
                "v": "/area/西班牙"
            }, {
                "n": "加拿大",
                "v": "/area/加拿大"
            }, {
                "n": "其他",
                "v": "/area/其他"
            }]
        }, {
            "key": "lang",
            "name": "语言",
            "value": [{
                "n": "全部",
                "v": ""
            }, {
                "n": "国语",
                "v": "/lang/国语"
            }, {
                "n": "英语",
                "v": "/lang/英语"
            }, {
                "n": "粤语",
                "v": "/lang/粤语"
            }, {
                "n": "闽南语",
                "v": "/lang/闽南语"
            }, {
                "n": "韩语",
                "v": "/lang/韩语"
            }, {
                "n": "日语",
                "v": "/lang/日语"
            }, {
                "n": "法语",
                "v": "/lang/法语"
            }, {
                "n": "德语",
                "v": "/lang/德语"
            }, {
                "n": "其它",
                "v": "/lang/其它"
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
            }, {
                "n": "2008",
                "v": "/year/2008"
            }, {
                "n": "2006",
                "v": "/year/2006"
            }, {
                "n": "2005",
                "v": "/year/2005"
            }, {
                "n": "2004",
                "v": "/year/2004"
            }]
        }, {
            "key": "letter",
            "name": "字母",
            "value": [{
                "n": "全部",
                "v": ""
            }, {
                "n": "A",
                "v": "/letter/A"
            }, {
                "n": "B",
                "v": "/letter/B"
            }, {
                "n": "C",
                "v": "/letter/C"
            }, {
                "n": "D",
                "v": "/letter/D"
            }, {
                "n": "E",
                "v": "/letter/E"
            }, {
                "n": "F",
                "v": "/letter/F"
            }, {
                "n": "G",
                "v": "/letter/G"
            }, {
                "n": "H",
                "v": "/letter/H"
            }, {
                "n": "I",
                "v": "/letter/I"
            }, {
                "n": "J",
                "v": "/letter/J"
            }, {
                "n": "K",
                "v": "/letter/K"
            }, {
                "n": "L",
                "v": "/letter/L"
            }, {
                "n": "M",
                "v": "/letter/M"
            }, {
                "n": "N",
                "v": "/letter/N"
            }, {
                "n": "O",
                "v": "/letter/O"
            }, {
                "n": "P",
                "v": "/letter/P"
            }, {
                "n": "Q",
                "v": "/letter/Q"
            }, {
                "n": "R",
                "v": "/letter/R"
            }, {
                "n": "S",
                "v": "/letter/S"
            }, {
                "n": "T",
                "v": "/letter/T"
            }, {
                "n": "U",
                "v": "/letter/U"
            }, {
                "n": "V",
                "v": "/letter/V"
            }, {
                "n": "W",
                "v": "/letter/W"
            }, {
                "n": "X",
                "v": "/letter/X"
            }, {
                "n": "Y",
                "v": "/letter/Y"
            }, {
                "n": "Z",
                "v": "/letter/Z"
            }, {
                "n": "0-9",
                "v": "/letter/0-9"
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
        "dianshiju": [{
            "key": "class",
            "name": "剧情",
            "value": [{
                "n": "全部",
                "v": ""
            }, {
                "n": "古装",
                "v": "/class/古装"
            }, {
                "n": "战争",
                "v": "/class/战争"
            }, {
                "n": "青春偶像",
                "v": "/class/青春偶像"
            }, {
                "n": "喜剧",
                "v": "/class/喜剧"
            }, {
                "n": "家庭",
                "v": "/class/家庭"
            }, {
                "n": "犯罪",
                "v": "/class/犯罪"
            }, {
                "n": "动作",
                "v": "/class/动作"
            }, {
                "n": "奇幻",
                "v": "/class/奇幻"
            }, {
                "n": "剧情",
                "v": "/class/剧情"
            }, {
                "n": "历史",
                "v": "/class/历史"
            }, {
                "n": "经典",
                "v": "/class/经典"
            }, {
                "n": "乡村",
                "v": "/class/乡村"
            }, {
                "n": "情景",
                "v": "/class/情景"
            }, {
                "n": "商战",
                "v": "/class/商战"
            }, {
                "n": "网剧",
                "v": "/class/网剧"
            }, {
                "n": "其他",
                "v": "/class/其他"
            }]
        }, {
            "key": "area",
            "name": "地区",
            "value": [{
                "n": "全部",
                "v": ""
            }, {
                "n": "内地",
                "v": "/area/内地"
            }, {
                "n": "韩国",
                "v": "/area/韩国"
            }, {
                "n": "香港",
                "v": "/area/香港"
            }, {
                "n": "台湾",
                "v": "/area/台湾"
            }, {
                "n": "日本",
                "v": "/area/日本"
            }, {
                "n": "美国",
                "v": "/area/美国"
            }, {
                "n": "泰国",
                "v": "/area/泰国"
            }, {
                "n": "英国",
                "v": "/area/英国"
            }, {
                "n": "新加坡",
                "v": "/area/新加坡"
            }, {
                "n": "其他",
                "v": "/area/其他"
            }]
        }, {
            "key": "lang",
            "name": "语言",
            "value": [{
                "n": "全部",
                "v": ""
            }, {
                "n": "国语",
                "v": "/lang/国语"
            }, {
                "n": "英语",
                "v": "/lang/英语"
            }, {
                "n": "粤语",
                "v": "/lang/粤语"
            }, {
                "n": "闽南语",
                "v": "/lang/闽南语"
            }, {
                "n": "韩语",
                "v": "/lang/韩语"
            }, {
                "n": "日语",
                "v": "/lang/日语"
            }, {
                "n": "其它",
                "v": "/lang/其它"
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
            }, {
                "n": "2008",
                "v": "/year/2008"
            }, {
                "n": "2006",
                "v": "/year/2006"
            }, {
                "n": "2005",
                "v": "/year/2005"
            }, {
                "n": "2004",
                "v": "/year/2004"
            }]
        }, {
            "key": "letter",
            "name": "字母",
            "value": [{
                "n": "全部",
                "v": ""
            }, {
                "n": "A",
                "v": "/letter/A"
            }, {
                "n": "B",
                "v": "/letter/B"
            }, {
                "n": "C",
                "v": "/letter/C"
            }, {
                "n": "D",
                "v": "/letter/D"
            }, {
                "n": "E",
                "v": "/letter/E"
            }, {
                "n": "F",
                "v": "/letter/F"
            }, {
                "n": "G",
                "v": "/letter/G"
            }, {
                "n": "H",
                "v": "/letter/H"
            }, {
                "n": "I",
                "v": "/letter/I"
            }, {
                "n": "J",
                "v": "/letter/J"
            }, {
                "n": "K",
                "v": "/letter/K"
            }, {
                "n": "L",
                "v": "/letter/L"
            }, {
                "n": "M",
                "v": "/letter/M"
            }, {
                "n": "N",
                "v": "/letter/N"
            }, {
                "n": "O",
                "v": "/letter/O"
            }, {
                "n": "P",
                "v": "/letter/P"
            }, {
                "n": "Q",
                "v": "/letter/Q"
            }, {
                "n": "R",
                "v": "/letter/R"
            }, {
                "n": "S",
                "v": "/letter/S"
            }, {
                "n": "T",
                "v": "/letter/T"
            }, {
                "n": "U",
                "v": "/letter/U"
            }, {
                "n": "V",
                "v": "/letter/V"
            }, {
                "n": "W",
                "v": "/letter/W"
            }, {
                "n": "X",
                "v": "/letter/X"
            }, {
                "n": "Y",
                "v": "/letter/Y"
            }, {
                "n": "Z",
                "v": "/letter/Z"
            }, {
                "n": "0-9",
                "v": "/letter/0-9"
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
        "zongyi": [{
            "key": "class",
            "name": "剧情",
            "value": [{
                "n": "全部",
                "v": "3"
            }, {
                "n": "选秀",
                "v": "/class/选秀"
            }, {
                "n": "情感",
                "v": "/class/情感"
            }, {
                "n": "访谈",
                "v": "/class/访谈"
            }, {
                "n": "播报",
                "v": "/class/播报"
            }, {
                "n": "旅游",
                "v": "/class/旅游"
            }, {
                "n": "音乐",
                "v": "/class/音乐"
            }, {
                "n": "美食",
                "v": "/class/美食"
            }, {
                "n": "纪实",
                "v": "/class/纪实"
            }, {
                "n": "曲艺",
                "v": "/class/曲艺"
            }, {
                "n": "生活",
                "v": "/class/生活"
            }, {
                "n": "游戏互动",
                "v": "/class/游戏互动"
            }, {
                "n": "财经",
                "v": "/class/财经"
            }, {
                "n": "求职",
                "v": "/class/求职"
            }]
        }, {
            "key": "area",
            "name": "地区",
            "value": [{
                "n": "全部",
                "v": ""
            }, {
                "n": "内地",
                "v": "/area/内地"
            }, {
                "n": "港台",
                "v": "/area/港台"
            }, {
                "n": "日韩",
                "v": "/area/日韩"
            }, {
                "n": "欧美",
                "v": "/area/欧美"
            }]
        }, {
            "key": "lang",
            "name": "语言",
            "value": [{
                "n": "全部",
                "v": ""
            }, {
                "n": "国语",
                "v": "/lang/国语"
            }, {
                "n": "英语",
                "v": "/lang/英语"
            }, {
                "n": "粤语",
                "v": "/lang/粤语"
            }, {
                "n": "闽南语",
                "v": "/lang/闽南语"
            }, {
                "n": "韩语",
                "v": "/lang/韩语"
            }, {
                "n": "日语",
                "v": "/lang/日语"
            }, {
                "n": "其它",
                "v": "/lang/其它"
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
            }, {
                "n": "2008",
                "v": "/year/2008"
            }, {
                "n": "2006",
                "v": "/year/2006"
            }, {
                "n": "2005",
                "v": "/year/2005"
            }, {
                "n": "2004",
                "v": "/year/2004"
            }]
        }, {
            "key": "letter",
            "name": "字母",
            "value": [{
                "n": "全部",
                "v": ""
            }, {
                "n": "A",
                "v": "/letter/A"
            }, {
                "n": "B",
                "v": "/letter/B"
            }, {
                "n": "C",
                "v": "/letter/C"
            }, {
                "n": "D",
                "v": "/letter/D"
            }, {
                "n": "E",
                "v": "/letter/E"
            }, {
                "n": "F",
                "v": "/letter/F"
            }, {
                "n": "G",
                "v": "/letter/G"
            }, {
                "n": "H",
                "v": "/letter/H"
            }, {
                "n": "I",
                "v": "/letter/I"
            }, {
                "n": "J",
                "v": "/letter/J"
            }, {
                "n": "K",
                "v": "/letter/K"
            }, {
                "n": "L",
                "v": "/letter/L"
            }, {
                "n": "M",
                "v": "/letter/M"
            }, {
                "n": "N",
                "v": "/letter/N"
            }, {
                "n": "O",
                "v": "/letter/O"
            }, {
                "n": "P",
                "v": "/letter/P"
            }, {
                "n": "Q",
                "v": "/letter/Q"
            }, {
                "n": "R",
                "v": "/letter/R"
            }, {
                "n": "S",
                "v": "/letter/S"
            }, {
                "n": "T",
                "v": "/letter/T"
            }, {
                "n": "U",
                "v": "/letter/U"
            }, {
                "n": "V",
                "v": "/letter/V"
            }, {
                "n": "W",
                "v": "/letter/W"
            }, {
                "n": "X",
                "v": "/letter/X"
            }, {
                "n": "Y",
                "v": "/letter/Y"
            }, {
                "n": "Z",
                "v": "/letter/Z"
            }, {
                "n": "0-9",
                "v": "/letter/0-9"
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
        "dongmna": [{
            "key": "area",
            "name": "地区",
            "value": [{
                "n": "全部",
                "v": ""
            }, {
                "n": "内地",
                "v": "/area/内地"
            }, {
                "n": "港台",
                "v": "/area/港台"
            }, {
                "n": "日韩",
                "v": "/area/日韩"
            }, {
                "n": "欧美",
                "v": "/area/欧美"
            }]
        }, {
            "key": "lang",
            "name": "语言",
            "value": [{
                "n": "全部",
                "v": ""
            }, {
                "n": "国语",
                "v": "/lang/国语"
            }, {
                "n": "英语",
                "v": "/lang/英语"
            }, {
                "n": "粤语",
                "v": "/lang/粤语"
            }, {
                "n": "闽南语",
                "v": "/lang/闽南语"
            }, {
                "n": "韩语",
                "v": "/lang/韩语"
            }, {
                "n": "日语",
                "v": "/lang/日语"
            }, {
                "n": "其它",
                "v": "/lang/其它"
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
            }, {
                "n": "2008",
                "v": "/year/2008"
            }, {
                "n": "2006",
                "v": "/year/2006"
            }, {
                "n": "2005",
                "v": "/year/2005"
            }, {
                "n": "2004",
                "v": "/year/2004"
            }]
        }, {
            "key": "letter",
            "name": "字母",
            "value": [{
                "n": "全部",
                "v": ""
            }, {
                "n": "A",
                "v": "/letter/A"
            }, {
                "n": "B",
                "v": "/letter/B"
            }, {
                "n": "C",
                "v": "/letter/C"
            }, {
                "n": "D",
                "v": "/letter/D"
            }, {
                "n": "E",
                "v": "/letter/E"
            }, {
                "n": "F",
                "v": "/letter/F"
            }, {
                "n": "G",
                "v": "/letter/G"
            }, {
                "n": "H",
                "v": "/letter/H"
            }, {
                "n": "I",
                "v": "/letter/I"
            }, {
                "n": "J",
                "v": "/letter/J"
            }, {
                "n": "K",
                "v": "/letter/K"
            }, {
                "n": "L",
                "v": "/letter/L"
            }, {
                "n": "M",
                "v": "/letter/M"
            }, {
                "n": "N",
                "v": "/letter/N"
            }, {
                "n": "O",
                "v": "/letter/O"
            }, {
                "n": "P",
                "v": "/letter/P"
            }, {
                "n": "Q",
                "v": "/letter/Q"
            }, {
                "n": "R",
                "v": "/letter/R"
            }, {
                "n": "S",
                "v": "/letter/S"
            }, {
                "n": "T",
                "v": "/letter/T"
            }, {
                "n": "U",
                "v": "/letter/U"
            }, {
                "n": "V",
                "v": "/letter/V"
            }, {
                "n": "W",
                "v": "/letter/W"
            }, {
                "n": "X",
                "v": "/letter/X"
            }, {
                "n": "Y",
                "v": "/letter/Y"
            }, {
                "n": "Z",
                "v": "/letter/Z"
            }, {
                "n": "0-9",
                "v": "/letter/0-9"
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
        "jilupian": [{
            "key": "area",
            "name": "地区",
            "value": [{
                "n": "全部",
                "v": ""
            }, {
                "n": "内地",
                "v": "/area/内地"
            }, {
                "n": "港台",
                "v": "/area/港台"
            }, {
                "n": "日韩",
                "v": "/area/日韩"
            }, {
                "n": "欧美",
                "v": "/area/欧美"
            }]
        }, {
            "key": "lang",
            "name": "语言",
            "value": [{
                "n": "全部",
                "v": ""
            }, {
                "n": "国语",
                "v": "/lang/国语"
            }, {
                "n": "英语",
                "v": "/lang/英语"
            }, {
                "n": "粤语",
                "v": "/lang/粤语"
            }, {
                "n": "闽南语",
                "v": "/lang/闽南语"
            }, {
                "n": "韩语",
                "v": "/lang/韩语"
            }, {
                "n": "日语",
                "v": "/lang/日语"
            }, {
                "n": "其它",
                "v": "/lang/其它"
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
            }, {
                "n": "2008",
                "v": "/year/2008"
            }, {
                "n": "2006",
                "v": "/year/2006"
            }, {
                "n": "2005",
                "v": "/year/2005"
            }, {
                "n": "2004",
                "v": "/year/2004"
            }]
        }, {
            "key": "letter",
            "name": "字母",
            "value": [{
                "n": "全部",
                "v": ""
            }, {
                "n": "A",
                "v": "/letter/A"
            }, {
                "n": "B",
                "v": "/letter/B"
            }, {
                "n": "C",
                "v": "/letter/C"
            }, {
                "n": "D",
                "v": "/letter/D"
            }, {
                "n": "E",
                "v": "/letter/E"
            }, {
                "n": "F",
                "v": "/letter/F"
            }, {
                "n": "G",
                "v": "/letter/G"
            }, {
                "n": "H",
                "v": "/letter/H"
            }, {
                "n": "I",
                "v": "/letter/I"
            }, {
                "n": "J",
                "v": "/letter/J"
            }, {
                "n": "K",
                "v": "/letter/K"
            }, {
                "n": "L",
                "v": "/letter/L"
            }, {
                "n": "M",
                "v": "/letter/M"
            }, {
                "n": "N",
                "v": "/letter/N"
            }, {
                "n": "O",
                "v": "/letter/O"
            }, {
                "n": "P",
                "v": "/letter/P"
            }, {
                "n": "Q",
                "v": "/letter/Q"
            }, {
                "n": "R",
                "v": "/letter/R"
            }, {
                "n": "S",
                "v": "/letter/S"
            }, {
                "n": "T",
                "v": "/letter/T"
            }, {
                "n": "U",
                "v": "/letter/U"
            }, {
                "n": "V",
                "v": "/letter/V"
            }, {
                "n": "W",
                "v": "/letter/W"
            }, {
                "n": "X",
                "v": "/letter/X"
            }, {
                "n": "Y",
                "v": "/letter/Y"
            }, {
                "n": "Z",
                "v": "/letter/Z"
            }, {
                "n": "0-9",
                "v": "/letter/0-9"
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
    filter_def: {
        dianying: {
            cateId: "dianying"
        },
        dianshiju: {
            cateId: "dianshiju"
        },
        zongyi: {
            cateId: "zongyi"
        },
        dongmna: {
            cateId: "dongmna"
        },
        jilupian: {
            cateId: "jilupian"
        },
    },
    class_name: "电影&剧集&动漫&综艺&记录片",
    class_url: "dianying&dianshiju&dongmna&zongyi&jilupian",
    headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/"
    },
    play_parse: true,
    lazy: `js:	
		var html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
        var url = html.url;
        var from = html.from;
        if (html.encrypt == '1') {
            url = decodeURI(url)
        } else if (html.encrypt == '2') {
            url = decodeURI(base64Decode(url))
        }
        if (/\.m3u8|\.mp4/.test(url)) {
            input = url
        } else {
            var currentDate = new Date();
            var year = currentDate.getFullYear();
            var month = String(currentDate.getMonth() + 1).padStart(2, '0');
            var day = String(currentDate.getDate()).padStart(2, '0');
            const urlTime = year + month + day;
            var MacPlayerConfig = {};
            eval(fetch(HOST + '/static/js/playerconfig.js?t=' + urlTime).replace('var Mac', 'Mac'));
            var parseUrl = MacPlayerConfig.player_list[from].parse;
            if (parseUrl && parseUrl != "") {
				let $playUrl = "";
				if(parseUrl.startsWith("http")){
					$playUrl = parseUrl;
				}else{
					$playUrl = HOST + parseUrl;
				}
                input = {
                    url: url,
                    playUrl: $playUrl,
                    parse: 1,
                    header: JSON.stringify({
                        'user-agent': 'Mozilla/5.0',
                        'Origin': input
                    })
                }
            } else {
                input       
            }
        }
	`,
    推荐: `js:
        let d = [];
        pdfh = jsp.pdfh;pdfa = jsp.pdfa;pd = jsp.pd;
        let html = request(input);
		let items = pdfa(html, "div.module-items div.module-card-item");
		function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }
		const shuffledArray = shuffleArray(items);
        shuffledArray.forEach(it => {
            d.push({
				url:pdfh(it,"div.module-card-item-title&&a&&href"),
                title:pdfh(it,"div.module-card-item-title&&a&&Text"),
                img:pdfh(it,"div.module-item-pic&&img&&data-original"),
                desc:pdfh(it,"div.module-card-item-class&&Text") + "/" + pdfh(it,"div.module-item-note&&Text")
            })
        });
        setResult(d);
    `,
    一级: `js:
        var d = [];
        pdfh = jsp.pdfh;pdfa = jsp.pdfa;pd = jsp.pd;
        var html = request(input);
        let items = pdfa(html, "a.module-item");		
        items.forEach(it => {
            d.push({
                url:pdfh(it,"a&&href"),
                title:pdfh(it,"a&&title"),
                img:pdfh(it,"div.module-item-pic&&img&&data-original"),
                desc:pdfh(it,"div.module-item-note&&Text")
            })
        });
        setResult(d)
    `,
    二级: $js.toString(() => {
        VOD = {};
        let html = request(input);
        VOD.vod_name = pdfh(html, "h1&&Text");
        VOD.vod_pic = pd(html, ".module-item-pic&&img&&data-original");
        VOD.vod_year = pdfh(html, ".module-info-tag-link:eq(0)&&Text");
        VOD.vod_area = pdfh(html, ".module-info-tag-link:eq(1)&&Text");
        VOD.type_name = pdfh(html, ".module-info-tag-link:eq(2)&&Text");
        VOD.vod_actor = pdfh(html, ".module-info-item-content:eq(1)&&Text");
        VOD.vod_director = pdfh(html, ".module-info-item-content:eq(0)&&Text");
        VOD.vod_remarks = "不信广告就你赢了";
        VOD.vod_content = pdfh(html, ".module-info-introduction-content&&Text");
        if (typeof play_url === "undefined") {
            var play_url = ""
        }
        let playFrom = [];
        let playUrl = [];
        let tabs = pdfa(html, "div.module-tab-item");
        tabs.forEach((it, index) => {
            playFrom.push(pdfh(it, 'span&&Text') + "[" + pdfh(it, 'small&&Text') + "]");
            let playTag = "div.module-play-list:eq(" + index + ") a";
            let tags = pdfa(html, playTag);
            let mapUrl = tags.map((tag) => {
                let title = pdfh(tag, "a&&Text").trim();
                let purl = pd(tag, "a&&href");
                return title + "$" + play_url + urlencode(purl);
            });
            playUrl.push(mapUrl.join("#"))
        });
        VOD.vod_play_from = playFrom.join("$$$");
        VOD.vod_play_url = playUrl.join("$$$");
    }),
    double: false,
    searchUrl: "/index.php/vod/search/wd/**.html",
    搜索: `js:
        var d = [];
        pdfh = jsp.pdfh;pdfa = jsp.pdfa;pd = jsp.pd;
        var html = request(input);       
        let list = pdfa(html, "div.module-item");
        list.forEach(it => {
            d.push({
                title: pdfh(it, "div.module-card-item-title&&Text"),
                desc: pdfh(it, "div.module-item-note&&Text"),
                pic_url: pdfh(it, "div.module-item-pic&&img&&data-original"),
                url: pdfh(it, "div.module-card-item-title&&a&&href")
            })
        });
        setResult(d)
    `
};
