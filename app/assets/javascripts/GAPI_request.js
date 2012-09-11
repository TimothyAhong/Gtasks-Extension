//gets the list of all the task lists
function apiRequestTaskLists() {
		//if we get here does that mean that we are connected? if not then check before erasing our task list
		tasks = []
		var restRequest = gapi.client.request({'path': '/tasks/v1/users/@me/lists'});
		restRequest.execute(function(resp) { 
			//store the lists in local storage... dont know what for
			localStorage.setObj('lists',resp);
			console.log(resp)
			for(x in resp.items) getList(resp.items[x].id,resp.items[x].title);
		});
}
function getTaskLists() {gapi.client.load('tasks', 'v1', apiRequestTaskLists());}

//gets the list of all the tasks on the given list
function apiRequestList(listid,listname) {
		var restRequest = gapi.client.request({'path': '/tasks/v1/lists/'+listid+'/tasks'});
		restRequest.execute(function(resp,flag) {
			for(x in resp.items) resp.items[x]['listname']=listname;
			//update local storage array
			console.log(resp.items)
			//push in all our tasks
			for(x in resp.items) tasks.push(resp.items[x]);
			//update local storage
			localStorage.setObj('tasks',tasks)
			updateDOM();
		});
}
function getList(listid,flag) {gapi.client.load('tasks', 'v1', apiRequestList(listid,flag));}

//stores the data in local storage
function localize(key,object){
	console.log('doesnt exist anymore')
	console.log(object)
}

