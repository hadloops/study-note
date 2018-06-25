let API_HOST = "https://xcxapi.minqin58.com";
function ajax(data = '', fn, method = "get", header = {}) {
    wx.request({
      url: config.API_HOST + data,
      method: method ? method : 'get',
      data: {},
      header: header ? header : { "Content-Type": "application/json" },
      success: function (res) {
        fn(res);
      }
    });
    // console.log(JSON.stringify(res, null, 2))
    fn(res);
  
 }
module.exports = {
  ajax: ajax
}