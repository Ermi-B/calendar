//selectors
var container = $('.container')




//dayjs
var currentTime = dayjs().format('h')
var currentDate = dayjs().format('MM-DD-YYYY')
var amPm = dayjs().format('A') //am/pm
var timeInt = parseInt(currentTime)+12 //converts the current time into an integer and adds 12 to convert to 24 hour format

console.log(timeInt)
$('#date').text(currentDate) //sets the header with today's date

console.log(currentTime)

//looping through 24 hours of the day
for (let i = 0; i < 24; i++) {
    var thisHour = dayjs().hour(i) //
   
    var row = $('<div>')    //creating a div with class name row - it contains 3 sections in one row
    row.addClass('row')

    var time = $('<h3>')
    time.attr('style','float:right;')
    time.text(thisHour.format('h A'))
    var div1 = $('<div>') //section 1 to display time
    div1.addClass('col-1');
    div1.append(time)
    div1.attr('style',"border:1px solid black; border-left:none;")
    row.append(div1); //appending section 1 into a row

    var div2 = $('<div>') //section 2 to display the input section to type in task name
    div2.addClass('col-10');
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
    div3.addClass('col-1');
    
    div3.attr('style',"border:1px solid black; border-right:none;")
    row.append(div3); //appending section 3 into the row  
    
    
    container.append(row); //entire row gets append to the container
    
    
}