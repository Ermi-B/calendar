//selectors
var container = $('.container')




//dayjs
var currentTime = dayjs().format('h')
var currentDate = dayjs().format('MM-DD-YYYY')
var timeInt = parseInt(currentTime) //converts the current time into an integer

console.log(timeInt)
$('#date').text(currentDate) //sets the header with today's date

console.log(currentTime)

//looping through 24 hours of the day
for (let i = 1; i <= 24; i++) {
   
    var row = $('<div>')    //creating a div with class name row - it contains 3 sections in one row
    row.addClass('row')

    var time = $('<h3>')
    time.attr('style','float:right;')
    time.text(i)
    var div1 = $('<div>') //section 1 to display time
    div1.addClass('col-2');
    div1.append(time)
    div1.attr('style',"border:1px solid black; border-left:none;")
    row.append(div1); //appending section 1 into a row

    var div2 = $('<div>') //section 2 to display the input section to type in task name
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


    
    row.append(div2);  //appending section 2 into a row

    var div3 = $('<div>') //section 3 - save icon
    div3.addClass('col-2');
    
    div3.attr('style',"border:1px solid black; border-right:none;")
    row.append(div3); //appending section 3 into the row
   
    
    
    container.append(row); //entire row gets append to the container
    
    
}