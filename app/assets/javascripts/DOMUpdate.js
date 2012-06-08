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
	$('.'+selector).find('#inner').html(prev)
}

function clearTasks(){
	$('.tl').find('#inner').html("")
	$('.tr').find('#inner').html("")
	$('.bl').find('#inner').html("")
	$('.br').find('#inner').html("")
}