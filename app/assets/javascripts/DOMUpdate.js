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
	if(typeof(task)=='undefined') return;
	if(typeof(task.title)=='undefined') return;
	if(task.title=="") return;
	
	var prev = $('.'+selector).find('#inner').html();
	prev+= "<div class='task'><h1>"+task.title+"<br /></h1>";
	if(typeof(task.notes)!='undefined'){
		prev+="<p2>Notes: "+task.notes+"<br /></p2>";}
	if(typeof(task.due)!='undefined'){
		prev+="<p3>Due: "+task.due+"<br /></p3>";}
	prev+="</div>";
	prev+="<div class='line-separator'></div>";
	$('.'+selector).find('#inner').html(prev)
}

function clearTasks(){
	$('.tl').find('#inner').html("")
	$('.tr').find('#inner').html("")
	$('.bl').find('#inner').html("")
	$('.br').find('#inner').html("")
}