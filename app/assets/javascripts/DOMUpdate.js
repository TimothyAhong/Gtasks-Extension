function updateDOM(){
	//clear tasks
	clearTasks()
	//for every task 
	for(x in tasks){
		console.log(tasks[x]);
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
				var selector = 'imp';
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
	if(typeof(task.due) != 'undefined' ){
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