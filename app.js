function insert (num) {
     document.form.text.value = document.form.text.value + num;
}


function clean() {
     document.form.text.value = "";
}


function back() {
     document.form.text.value = document.form.text.value.slice(0,-1);
}


function equal() {
    var str = document.form.text.value;

    if(str) {
         document.form.text.value = eval(str);
    }


}
