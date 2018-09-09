import Mock from 'mockjs'
//引入服务器的地址
import {baseURL} from '../util/axios'

//拦截的请求地址以及数据
/*
      Mock.mock(地址,
      {
        数据
      });



      去main.js引入mock
*/
Mock.mock(baseURL+'/vvv',
{
  "number|+1": 202
});
