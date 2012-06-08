function updateDOM(){
	//clear tasks
	clearTasks()
	//for every task 
	for(x in tasks){
		hasDate = (tasks[x].due===undefined)
		important = (tasks[x].listname=='Important')
		if(hasDate){
			if(important){var selector = 'tr';}
			else {var selector = 'br';}
		}
		else{
			if(important){var selector = 'tl';}
			else {var selector = 'bl';}
		}
		addTask(tasks[x],selector)
	}
}

function addTask(task,selector){
	var prev = $('.'+selector).find('#inner').html()
	prev+= "<div>"+task.title+"</div>"
}

function clearTasks(){
	$('.tl').html("")
	$('.tr').html("")
	$('.bl').html("")
	$('.br').html("")
}