export function authHeader(method = 'GET', body) {
  if (true) {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", 'Basic ' + localStorage.getItem('user'));
    myHeaders.append('Content-Type', 'application/json')

    var myInit = {
      method: method,
      headers: myHeaders,
      mode: 'cors',
      cache: 'default'
    }

    if(body) {
      myInit.body = JSON.stringify(body);
    }

    return myInit;
  }
}
