/**
 * Generic helper to perform requests to RapidAPI.
 */
async function fetchData(endpoint) {
  const url = `https://${window.RAPIDAPI_HOST}/${endpoint}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': window.RAPIDAPI_KEY,
      'X-RapidAPI-Host': window.RAPIDAPI_HOST
    }
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('API request failed:', error);
    return null;
  }
}

// Expose helper globally for all pages
window.fetchData = fetchData;

