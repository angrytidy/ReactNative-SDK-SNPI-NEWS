const url = 'https://www.google-analytics.com/mp/collect?measurement_id=G-SMHX9TM9RZ&api_secret=wIoFJuDmQUCR4uP3terZ4w';

export let loadAppAlreadyCalled = false;
export default function gaSendLoadAppEvent(clientId, eventName, params = {}) {

  const data = {
    client_id: clientId,
    events: [{
      name: eventName,
      params: params
    }]
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };

  fetch(url, options)
      .then(response => {
        loadAppAlreadyCalled = true;
        //console.debug('gaSendLoadAppEvent SUCCESS : ', response ?? "SUCESS NO RESPONSE");
      })
      .catch(error => {
        console.debug('gaSendLoadAppEvent ERROR : ', error ?? "ERROR NO DETAIL");
      });
}
