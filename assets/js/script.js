//selectors
var container = $('.container')




//dayjs
var currentTime = dayjs().format('h')
var currentDate = dayjs().format('MM-DD-YYYY')
var timeInt = parseInt(currentTime) //converts the current time into an integer

console.log(timeInt)
$('#date').text(currentDate)

console.log(currentTime)

for (let i = 1; i <= 24; i++) {
   
    var row = $('<div>')    
    row.addClass('row')

    var time = $('<h3>')
    time.attr('style','float:right;')
    time.text(i)
    var div1 = $('<div>') 
    div1.addClass('col-2');
    div1.append(time)
    div1.attr('style',"border:1px solid black; border-left:none;")
    row.append(div1);

    var div2 = $('<div>')
    div2.addClass('col-8');
    var inputEl = $('<input>')
    if(i==timeInt){
        inputEl.attr('style','height:70px; border: black solid 1px; width:100%; background-color:red;');
    }else if(i<=timeInt){
        inputEl.attr('style','height:70px; border: black solid 1px; width:100%; background-color:gray;');
    }else{
        inputEl.attr('style','height:70px; border: black solid 1px; width:100%; background-color:green;');
    } 
    div2.append(inputEl)


    
    row.append(div2);

    var div3 = $('<div>') 
    div3.addClass('col-2');
    
    div3.attr('style',"border:1px solid black; border-right:none;")
    row.append(div3);
   
    
    
    container.append(row); 
    
    
}