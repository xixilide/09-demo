import axios from 'axios';

function searchGit(){
  return axios.get('https://api.github.com/users/xixilide')
    .then((res) => ({

      data:res.data
    }))
    .catch(function (error) {
      alert(error);
    })
}
export { searchGit };
