export default function getTextFromUrl(url) {
  // read text from URL location
  return new Promise((resolve) => {
    const request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.send(null);
    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
        const type = request.getResponseHeader('Content-Type');
        if (type.indexOf('text') !== 1) {
          resolve(request.responseText);
          // return request.responseText;
        }
      }
    };
  });
}
