import Main from '@/view/main'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面不会缓存
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 * }
 */

export default [{
        path: '/login',
        name: 'login',
        meta: {
            title: '登录',
            hideInMenu: true
        },
        component: () =>
            import ('@/view/login')
    },
    {
        path: '/',
        name: '_home',
        redirect: '/home',
        component: Main,
        meta: {
            hideInMenu: true,
            notCache: true
        },
        children: [{
            path: '/home',
            name: 'home',
            meta: {
                hideInMenu: true,
                title: '首页',
                notCache: true
            },
            component: () =>
                import ('@/view/home/index')
        }]
    },
    {
        path: '/monitor',
        name: 'doc',
        component: Main,
        meta: {
            title: '视频监控',
            access: ['framework'],
            icon: 'ios-cog'
        },
        children: [{
                path: 'preview',
                meta: { icon: 'md-people', title: '实时预览', access: ['frameworkPreview'] },
                name: 'frameworkPreview',
                component: () =>
                    import ('@/view/monitor/preview')
            },
            {
                path: 'playback',
                meta: { icon: 'md-body', title: '视频回放', access: ['frameworkPlayback'] },
                name: 'frameworkPlayback',
                component: () =>
                    import ('@/view/monitor/playback')
            }
        ]
    },
    {
        path: '/control',
        name: 'control',
        component: Main,
        meta: {
            title: '智能管控',
            access: ['control'],
            icon: 'ios-construct'
        },
        children: [{
                path: 'istinguish',
                meta: { icon: 'ios-filing-outline', title: '重点人员识别', access: ['controlDistinguish'] },
                name: 'controlDistinguish',
                component: () =>
                    import ('@/view/control/distinguish')
            },
            {
                path: 'retrieval',
                meta: { icon: 'ios-game-controller-b', title: '人员检索', access: ['controlRetrieval'] },
                name: 'controlRetrieval',
                component: () =>
                    import ('@/view/control/retrieval')
            },
            {
                path: 'search',
                meta: { icon: 'ios-game-controller-b', title: '以图搜图', access: ['controlSearch'] },
                name: 'controlSearch',
                component: () =>
                    import ('@/view/control/search')
            }
        ]
    },
    {
        path: '/attendance',
        name: 'attendance',
        component: Main,
        meta: {
            title: '人员考勤',
            access: ['attendance'],
            icon: 'ios-construct'
        },
        children: [{
                path: 'record',
                meta: { icon: 'ios-filing-outline', title: '考勤记录查询', access: ['attendanceRecord'] },
                name: 'attendanceRecord',
                component: () =>
                    import ('@/view/attendance/record')
            },
            {
                path: 'rule',
                meta: { icon: 'ios-game-controller-b', title: '考勤规则设置', access: ['attendanceRule'] },
                name: 'attendanceRule',
                component: () =>
                    import ('@/view/attendance/rule')
            },
        ]
    },
    // {
    //     path: '/alarmCenter',
    //     name: 'alarmCenter',
    //     component: Main,
    //     meta: {
    //         title: '访客管理',
    //         access: ['alarmCenter'],
    //         icon: 'ios-construct'
    //     },
    //     children: [{
    //             path: 'bussWarn',
    //             meta: { icon: 'ios-filing-outline', title: '访客记录', access: ['bussWarn'] },
    //             name: 'bussWarn',
    //             component: () =>
    //                 import ('@/view/alarmCenter/deviceAlarm')
    //         },
    //         {
    //             path: 'jobFeedback',
    //             meta: { icon: 'ios-game-controller-b', title: '门禁关联配置', access: ['newsFeedback'] },
    //             name: 'newsFeedback',
    //             component: () =>
    //                 import ('@/view/news/jobFeedback')
    //         }
    //     ]
    // },
    // {
    //     path: '/alarmCenter1',
    //     name: 'alarmCenter1',
    //     component: Main,
    //     meta: {
    //         title: '会议室管理',
    //         access: ['alarmCenter'],
    //         icon: 'ios-construct'
    //     },
    //     children: [{
    //             path: 'bussWarn',
    //             meta: { icon: 'ios-filing-outline', title: '访客记录', access: ['bussWarn'] },
    //             name: 'bussWarn',
    //             component: () =>
    //                 import ('@/view/alarmCenter/deviceAlarm')
    //         },
    //         {
    //             path: 'jobFeedback',
    //             meta: { icon: 'ios-game-controller-b', title: '门禁关联配置', access: ['newsFeedback'] },
    //             name: 'newsFeedback',
    //             component: () =>
    //                 import ('@/view/news/jobFeedback')
    //         }
    //     ]
    // }, {
    //     path: '/alarmCenter2',
    //     name: 'alarmCenter2',
    //     component: Main,
    //     meta: {
    //         title: '系统管理',
    //         access: ['alarmCenter'],
    //         icon: 'ios-construct'
    //     },
    //     children: [{
    //             path: 'bussWarn',
    //             meta: { icon: 'ios-filing-outline', title: '重点人员配置', access: ['bussWarn'] },
    //             name: 'bussWarn',
    //             component: () =>
    //                 import ('@/view/alarmCenter/deviceAlarm')
    //         },
    //         {
    //             path: 'jobFeedback',
    //             meta: { icon: 'ios-game-controller-b', title: '陌生人配置', access: ['newsFeedback'] },
    //             name: 'newsFeedback',
    //             component: () =>
    //                 import ('@/view/news/jobFeedback')
    //         },
    //         {
    //             path: 'jobFeedback',
    //             meta: { icon: 'ios-game-controller-b', title: '设备管理', access: ['newsFeedback'] },
    //             name: 'newsFeedback',
    //             component: () =>
    //                 import ('@/view/news/jobFeedback')
    //         },
    //         {
    //             path: 'jobFeedback',
    //             meta: { icon: 'ios-game-controller-b', title: '事件告警', access: ['newsFeedback'] },
    //             name: 'newsFeedback',
    //             component: () =>
    //                 import ('@/view/news/jobFeedback')
    //         }
    //     ]
    // },
    {
        path: '/401',
        name: 'error_401',
        meta: {
            hideInMenu: true
        },
        component: () =>
            import ('@/view/error-page/401.vue')
    },
    {
        path: '/500',
        name: 'error_500',
        meta: {
            hideInMenu: true
        },
        component: () =>
            import ('@/view/error-page/500.vue')
    },
    {
        path: '*',
        name: 'error_404',
        meta: {
            hideInMenu: true
        },
        component: () =>
            import ('@/view/error-page/404.vue')
    },
    {
        path: '/openLogin',
        name: 'openLogin',
        meta: {
            hideInMenu: true
        },
        component: () =>
            import ('@/view/openLogin/index')
    }
]