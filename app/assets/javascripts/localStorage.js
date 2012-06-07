Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}
Storage.prototype.appendObj = function(key, obj){
	var A = localStorage.getObj(key)
	if(A!=null){
		A.push(obj)
		return localStorage.setObj(key,A)
	}
	else
		return localStorage.setObj(key,obj)
}