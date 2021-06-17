
// axios({
//   url: 'https://dongkun1.000webhostapp.com'
// }).then(res =>{
//   console.log(res);
// })

//一次三個請求數據數組形式
// axios.all([axios({
//   url: 'https://dongkun1.000webhostapp.com'
// }),axios({
//   url: 'https://dongkun2.000webhostapp.com'
// }),axios({
//   url: 'https://dongkun3.000webhostapp.com'
// })]).then(results=>{
//   console.log(results);
// })

//數組展開三個請求展開
axios.all([axios({
  url: 'https://dongkun1.000webhostapp.com'
}),axios({
  url: 'https://dongkun1.000webhostapp.com'
}),axios({
  url: 'https://dongkun1.000webhostapp.com'
})]).then(axios.spread((res1,res2,res3)=>{
  const {data} = res1.data
  //const {data} = res2;
  //const {data} = res3;
  console.log(res1);
  console.log(res2);
  console.log(res3);
  console.log(data);
 // console.log(data2);
  //console.log(data3);
}))

