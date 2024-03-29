
// Enter a client ID for a web application from the Google Developer Console.
// The provided clientId will only work if the sample is run directly from
// https://google-api-javascript-client.googlecode.com/hg/samples/authSample.html
// In your Developer Console project, add a JavaScript origin that corresponds to the domain
// where you will be running the script.
var clientId = '1063886181317';

// Enter the API key from the Google Develoepr Console - to handle any unauthenticated
// requests in the code.
// The provided key works for this sample only when run from
// https://google-api-javascript-client.googlecode.com/hg/samples/authSample.html
// To use in your own application, replace this API key with your own.
var apiKey = 'AIzaSyDCkB3R4CEbnHRURXLqEOAPfdiDFAVzm0o';

// To enter one or more authentication scopes, refer to the documentation for the API.
var scopes = 'https://www.googleapis.com/auth/tasks';

// Use a button to handle authentication the first time.
function handleClientLoad() {
	gapi.client.setApiKey(apiKey);
	window.setTimeout(checkAuth,1);
}

function checkAuth() {
	gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true}, handleAuthResult);
}

function handleAuthResult(authResult) {
	if (authResult) {
	  getTaskLists()
	} else {
	  getTaskLists()
	}
}

function handleAuthClick(event) {
	gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: false}, handleAuthResult);
	return false;
}

tasks = new Array()
window.onload = function() {
	console.log(localStorage.getObj('tasks'))
	if(!(localStorage.getObj('tasks')==null)) tasks = localStorage.getObj('tasks');
	console.log('tasks')
	console.log(tasks)
	updateDOM();

	$("#login").click(function() {
	  console.log("login")
	  if(navigator.onLine) 
	  {
	  	handleAuthClick();
	  	updateDOM();
	  }
	  	
	});

	$("#re-sync").click(function() {
	  console.log("re-sync2")
	  if(navigator.onLine) 
	  {
	  	getTaskLists();
	  }
	});

/*
	if(navigator.onLine) handleAuthClick();
	setInterval(function(){
		updateDOM();
		console.log('interval')
		if(navigator.onLine)getTaskLists();
	},3000);
*/
}


	

//init draw