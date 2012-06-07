//gets the list of all the task lists
function apiRequestTaskLists() {
		var restRequest = gapi.client.request({'path': '/tasks/v1/users/@me/lists'});
		restRequest.execute(function(resp) { localize('lists',resp); });
}

function getTaskLists() {
	gapi.client.load('tasks', 'v1', apiRequestTaskLists());
}

//gets the list of all the tasks on the given list
function apiRequestList(listid) {
		var restRequest = gapi.client.request({'path': '/tasks/v1/lists/'+listid+'/tasks'});
		restRequest.execute(function(resp) { localize('list',resp); });
}

function getList(listid) {
	gapi.client.load('tasks', 'v1', apiRequestList(listid));
}

//gets the specified task
function apiRequestTask(taskid,listid){
		var restRequest = gapi.client.request({'path': '/tasks/v1/lists/'+listid+'/tasks/'+taskid});
		restRequest.execute(function(resp) { localize('task',resp); });
}

function getTask(taskid,listid){
	gapi.client.load('tasks','v1',apiRequestTask(taskid,listid))
}

//stores the data in local storage
function localize(key,object){
	console.log(object)
	//append if the local storage element exists
	//create local storage element if it doesnt
	if(localStorage.getObj(key)!=null)
		localStorage.appendObj(object)
	else
		localStorage.setObj(key,object)
}

//gets all the tasks and organizes them
function taskify(){
	//get all the lists
	//get all the tasks on the important list
	//get all the tasks on the other lists
	//store in local storage
	//update DOM
}
