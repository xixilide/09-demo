import axios from 'axios';

function getJson(){
  let address=`https://raw.githubusercontent.com/xixilide/demoData/master/demo.json?${Math.random()}`;
  return axios.get(address)
    .then((res) => ({

      getJson:res.data
    }))
    .catch(function (error) {
      alert(error);
    })
}
export { getJson };
