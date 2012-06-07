//gets the list of all the task lists
function apiRequestTaskLists() {
		var restRequest = gapi.client.request({'path': '/tasks/v1/users/@me/lists'});
		restRequest.execute(function(resp) { 
			localize('lists',resp);
			for(x in resp.items)getList(resp.items[x].id)
		});
}
function getTaskLists() {gapi.client.load('tasks', 'v1', apiRequestTaskLists());}

//gets the list of all the tasks on the given list
function apiRequestList(listid) {
		var restRequest = gapi.client.request({'path': '/tasks/v1/lists/'+listid+'/tasks'});
		restRequest.execute(function(resp) { 
			//update local storage array
			A = localStorage.getObj('tasks')
			B = new Array()
			//not yet in local storage
			if(A===null)
				B=resp.items
			//only a single object in local storage
			else if(A.length>1){
				B.push(A)
			}
			//array in local storage
			else{
				for(x in resp.items) A.push(resp.items[x]) 
				B = A
			}
			localStorage.setObj('tasks',B)
		});
}
function getList(listid) {gapi.client.load('tasks', 'v1', apiRequestList(listid));}

//stores the data in local storage
function localize(key,object){
	console.log(object)
	//append if the local storage element exists
	//create local storage element if it doesnt
	if(localStorage.getObj(key)===null)
		localStorage.setObj(key,object)
	else
		localStorage.appendObj(key,object)
}

//gets all the tasks and organizes them
function taskify(){
	//get all the lists
	//get all the tasks on the important list
	//get all the tasks on the other lists
	//store in local storage
	//update DOM
}
