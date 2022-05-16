import Mock from 'mockjs'

import homeApi from './mockServerData/home'
import userApi from './mockServerData/user'
import permissionApi from './mockServerData/permission'
// import permissionApi from './mockServerData/permission'
Mock.mock('/home/getData', homeApi.getStatisticalData)
// Mock.mock('/api/user/getUser', userApi.getUserList)
Mock.mock(/user\/add/, 'post', userApi.createUser)
Mock.mock(/user\/edit/, 'post', userApi.updateUser)

Mock.mock(/user\/getUser/, 'get', userApi.getUserList)
Mock.mock(/user\/del/, 'get', userApi.deleteUser)
// // 权限相关
Mock.mock(/permission\/getMenu/, 'post', permissionApi.getMenu)