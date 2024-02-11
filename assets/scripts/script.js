window.onload = function() {
  if (window.location.pathname.length > 33) {    //Replace 33 with domain Length Function
    window.location.assign(sew());
  }
}

function sew() {
	var token = window.location.pathname.substring(33);      //Replace 33 with domain Length Function
  var decrypt = pako.inflate(Uint8Array.from(atob(token), (c) => c.charCodeAt(0)));   //Decryption still needs work.
  var realUrl = atob(String.fromCharCode.apply(null, decrypt));
	return(realUrl);
}

function snip() {
	var longUrl =  document.getElementById("input").value;
	var encrypt = btoa(longUrl);
	var token = String.fromCharCode.apply(null, new Uint8Array(pako.deflate(encrypt)));
	var shortUrl = window.location.href + "/" + token;
  document.getElementById("input").value = shortUrl;
}




/*

function snip() {
  event.preventDefault();
  var longUrl = document.getElementById("input").value;

  if (isValidUrl(longUrl)) {
    var encrypt = btoa(longUrl);
    var token = String.fromCharCode.apply(null, new Uint8Array(pako.deflate(encrypt)));
    var shortUrl = window.location.href + "/" + token;
    document.getElementById("input").value = shortUrl;
  } else {
    document.getElementById("input").value = "ERROR! Invalid URL: " + longUrl;
  }
}

function sew() {
  var token = window.location.pathname.substring(1);
  var decrypt = pako.inflate(Uint8Array.from(atob(token), (c) => c.charCodeAt(0)));
  var realUrl = atob(String.fromCharCode.apply(null, decrypt));
  window.location.href = realUrl;
}


function isValidUrl(url) {///////////////////////////////////////
  var regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
  return regex.test(url);
}////////////////////////////////////////////////////////////////


if (window.location.pathname.length > 1) {
  sew();
}

*/



/*

function snip() {
  const longUrl = document.getElementById('input').value;

  if (longUrl.trim() === "") {
    document.getElementById("input").value = "ERROR! Invalid URL: " + longUrl;
    return;
  }

  const encrypt = btoa(longUrl);
  const token = pako.deflate(encrypt, { to: 'string' });
  const shortUrl = window.location.href + "/" + token;
  document.getElementById('input').value = shortUrl;
  //document.getElementById('result').innerHTML = `<p>Shortened URL: <a href="${shortenedUrl}" target="_blank">${shortenedUrl}</a></p>`;
}

function sew() {
  const token = window.location.pathname.substring(1);
  const decrypt = pako.inflate(token, { to: 'string' });
  const realUrl = atob(decrypt);

  window.location.href = realUrl;
}

window.onload = function() {
  if (window.location.pathname.length > 1) {
    sew();
  }
};

*/