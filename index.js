
// axios({
//   url: 'https://run.mocky.io/v3/a34c5fe1-6025-4c9d-8402-5c777b685476'
// }).then(res =>{
//   console.log(res);
// })

//一次三個請求數據數組形式
// axios.all([axios({
//   url: 'https://run.mocky.io/v3/a34c5fe1-6025-4c9d-8402-5c777b685476'
// }),axios({
//   url: 'https://run.mocky.io/v3/b6b3ee44-03f2-4d3d-84e1-1f2e68be6f7e'
// }),axios({
//   url: 'https://run.mocky.io/v3/8e7a5232-2974-4621-a818-0985e623169e'
// })]).then(results=>{
//   console.log(results);
// })

//數組展開三個請求展開
axios.all([axios({
  url: 'https://run.mocky.io/v3/a34c5fe1-6025-4c9d-8402-5c777b685476'
}),axios({
  url: 'https://run.mocky.io/v3/b6b3ee44-03f2-4d3d-84e1-1f2e68be6f7e'
}),axios({
  url: 'https://run.mocky.io/v3/8e7a5232-2974-4621-a818-0985e623169e'
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

