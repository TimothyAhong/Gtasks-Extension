//gets the list of all the task lists
function apiRequestTaskLists() {
		//if we get here does that mean that we are connected? if not then check before erasing our task list
		tasks = []
		var restRequest = gapi.client.request({'path': '/tasks/v1/users/@me/lists'});
		restRequest.execute(function(resp) { 
			//store the lists in local storage... dont know what for
			localStorage.setObj('lists',resp);
			for(x in resp.items){
				if(resp.items[x].title=="Important")
					getList(resp.items[x].id,"Important");
				else
					getList(resp.items[x].id);
			}
		});
}
function getTaskLists() {gapi.client.load('tasks', 'v1', apiRequestTaskLists());}

//gets the list of all the tasks on the given list
function apiRequestList(listid,flag) {
		var restRequest = gapi.client.request({'path': '/tasks/v1/lists/'+listid+'/tasks'});
		restRequest.execute(function(resp,flag) {
			if(!(typeof(flag)==='undefined')){for(x in resp.items) resp.items[x][flag]=true;};
			//update local storage array
			console.log(resp.items)
			//push in all our tasks
			for(x in resp.items) (tasks.push(resp.items[x]))
			//update local storage
			localStorage.setObj('tasks',tasks)
			//update DOM

			//not yet in local storage
			/*
			A = localStorage.getObj('tasks')
			B = new Array()
			if(A===null){
				console.log('none')
				B=resp.items
			}
			//only a single object in local storage
			else if(!(A.length>0)){
				B.push(A)
				console.log('single')
				for(x in resp.items) B.push(resp.items[x]);
			}
			//array in local storage
			else{
				console.log('multiple')
				B = A
				for(x in resp.items) B.push(resp.items[x]);
			}
			localStorage.setObj('tasks',B)
			*/
		});
}
function getList(listid,flag) {gapi.client.load('tasks', 'v1', apiRequestList(listid,flag));}

//stores the data in local storage
function localize(key,object){
	console.log('doesnt exist anymore')
	console.log(object)
}

//gets all the tasks and organizes them
function taskify(){
	//get all the lists
	//get all the tasks on the important list
	//get all the tasks on the other lists
	//store in local storage
	//update DOM
}
