
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
	var authorizeButton = document.getElementById('authorize-button');
	if (authResult) {
	  authorizeButton.style.visibility = 'hidden';
	  //taskify
	} else {
	  authorizeButton.style.visibility = '';
	  authorizeButton.onclick = handleAuthClick;
	}
}

function handleAuthClick(event) {
	gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: false}, handleAuthResult);
	return false;
}

function apiRequestTaskList() {
		var restRequest = gapi.client.request({'path': '/tasks/v1/users/@me/lists'});
		restRequest.execute(function(resp) { console.log(resp); });
}

function getTaskLists() {
	gapi.client.load('tasks', 'v1', apiRequestTaskList());
}

function apiRequestList(listid) {
		var restRequest = gapi.client.request({'path': '/tasks/v1/lists/'+listid+'/tasks'});
		restRequest.execute(function(resp) { console.log(resp); });
}

function getList(listid) {
	gapi.client.load('tasks', 'v1', apiRequestList(listid));
}

function apiRequestTask(taskid,listid){
		var restRequest = gapi.client.request({'path': '/tasks/v1/lists/'+listid+'/'+taskid});
		restRequest.execute(function(resp) { console.log(resp); });
}

function getTask(taskid,listid){
	gapi.client.load('tasks','v1',apiRequestTask(taskid,listid))
}

function taskify(){
	//get all the lists
	//get all the tasks on the important list
	//get all the tasks on the other lists
	//store in local storage
	//update DOM
}
