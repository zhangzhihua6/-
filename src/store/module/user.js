import { setToken, getToken } from '@/libs/util'
import { post } from '@/libs/axios-cfg'
import { errorHandler } from '@/libs/iview-cfg'
export default {
    state: {
        name: '',
        userId: '',
        avatorImgPath: '',
        token: getToken(),
        access: ''
    },
    mutations: {
        setAvator(state, avatorPath) {
            state.avatorImgPath = avatorPath;
        },
        setUserId(state, id) {
            state.userId = id;
        },
        setName(state, name) {
            state.name = name;
        },
        setAccess(state, access) {
            state.access = access;
        },
        setToken(state, token) {
            state.token = token;
            setToken(token);
        }
    },
    actions: {
        // 退出登录
        async handleLogOut({ state, commit }) {
            try {
                let res = await post('/logout')
                commit('setToken', '');
                commit('setAccess', []);
                localStorage.clear();
                sessionStorage.clear();
            } catch (error) {
                errorHandler(error);
            }
        },
        // 获取用户相关信息
        async getUserInfo({ state, commit }) {
            try {
                let access = this.state.user.access;
                if (access.length === 0) {
                    // let res = await post('/frameworkMenu/getPerms')
                    let res = {
                        msg: "success",
                        data: ["framework", "frameworkPlayback", "frameworkPreview",
                            "control", "controlDistinguish", "controlRetrieval", "controlSearch",
                            "attendance", "attendanceRecord", "attendanceRule",
                        ],
                        status: 200000
                    };
                    commit('setAccess', res.data);
                    access = res.data;
                }
                return { access: access };
            } catch (error) {
                errorHandler(error);
            }
        }
    }
}