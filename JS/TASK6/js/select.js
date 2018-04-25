angular.module('carrots')
    .constant('menu',[
    {
        id:1,
        name:'信息管理',
        sub:[
        {
            id:1,
            name:'公司列表',
            url:''
        },
        {
            id:2,
            name:'职位列表',
            url:''
        }
        ]
    },
    {
        id:2,
        name:'Article管理',
        sub:[
        {
            id:3,
            name:'Article列表',
            url:'bgp.listpage.table'
        },
        {
            id:4,
            name:'文章管理',
            url:''
        }
        ]
    },
    {
        id: 3,
        name :"用户管理",
        sub: [
        {
            id: 5,
            url: "",
            name:"用户列表"
        }
            ]
        },
        {
            id: 4,
            name :"内容管理",
            sub: [
            {
                id: 6,
                url: "",
                name:"视频管理"
            }
            ]
        }
        ])
    .constant('select_types',[
    	{text:'全部'},
    	{value:0,text:'首页'},
    	{value:1,text:'找职位'},
    	{value:2,text:'找精英'},
    	{value:3,text:'行业大图'}
   	])
    .constant('select_status',[
    	{text:'全部'},
    	{value:1,text:'草稿'},
    	{value:2,text:'上线'}

    ])
    .constant('select_industry',[
        {text:'全部'},
        {value:0,text:'移动互联网'},
        {value:1,text:'电子商务'},
        {value:2,text:'企业服务'},
        {value:3,text:'O2O'},
        {value:4,text:'教育'},
        {value:5,text:'金融'},
        {value:6,text:'游戏'}

        ])
