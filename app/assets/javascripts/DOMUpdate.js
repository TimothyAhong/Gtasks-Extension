function updateDOM(){
	console.log("AAA")
	//clear tasks
	clearTasks()
	//for every task 
	for(x in tasks){
		no_date = (typeof(tasks[x].due) == 'undefined' || tasks[x].due == null || tasks[x].due == "")
		important = (tasks[x].listname == 'Important')
		if(!no_date){
			if(important){
				var selector = 'imp_urg';
			} else {
				var selector = 'urg';
			}
		}
		else{
			if(important){
				var selector = 'urg';
			} else {
				var selector = 'none';
			}
		}
		addTask(tasks[x],selector)
	}
}

function addTask(task,selector){
	if(typeof(task)=='undefined') return;
	if(typeof(task.title)=='undefined') return;
	if(task.title=="") return;

	var prev = $('#'+selector).html();

	prev+="<tr><td>"+task.title+"</td>"
	if(task.due){
		prev+="<td>"+task.due+"</td>"
	}
	prev+="</tr>"
	$('#'+selector).html(prev)
}

function clearTasks(){
	$('#imp').html("")
	$('#imp_urg').html("")
	$('#urg').html("")
	$('#none').html("")
}