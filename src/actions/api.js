const auth = {
API_KEY: '1ae3c82cb025cd7c8b30fbdbe788b24b',
API_ID:'b6772367',
}

export const getLineStatus = async (id) => {
  const response = await fetch(`https://api.tfl.gov.uk/Line/${id}/Status?detail=false&app_id=${auth.API_ID}&app_key=${auth.API_KEY}`);
  const json = await response.json();
  return json;
}

export const getAllLinesStatus = async () => {
  const response = await fetch(`https://api.tfl.gov.uk/Line/Mode/tube/status?app_id=${auth.API_ID}&app_key=${auth.API_KEY}`);
  const json = await response.json();
  return await json;
}

export const getLineStations = async(id) => {
  const response = await fetch(`https://api.tfl.gov.uk/Line/${id}/StopPoints?app_id=${auth.API_ID}&app_key=${auth.API_KEY}`);
  const json = await response.json();
  return json;
}

