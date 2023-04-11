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
    row.addClass('row row-num-' + i)

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
    var inputEl = $(`<input id=input-element-${i}>`)
    inputEl.addClass('input-element')
    //color-coding depending on time if its past present or future
    if(i==timeInt){
        inputEl.attr('style','font-size:150%; height:70px; border: black solid 1px; width:100%; background-color:red;');
    }else if(i<=timeInt){
        inputEl.attr('style','font-size:150%; height:70px; border: black solid 1px; width:100%; background-color:gray;');
    }else{
        inputEl.attr('style','font-size:150%; height:70px; border: black solid 1px; width:100%; background-color:green;');
    } 
    
    div2.append(inputEl)    
    row.append(div2);  //appending section 2 into a row

    var div3 = $('<div>') //section 3 - save icon
    div3.addClass('col-1');
    var saveButton = $('<button>')
    saveButton.addClass('save-button')
    saveButton.attr({
        'style':'height:40px; width:50px; margin-top:10px; background-color:rgb(124, 112, 212); color:white;',
        'id':'save-button-'+i,
    });
    saveButton.text('Save')

  
      
    div3.append(saveButton)
    div3.attr('style'," background-color:rgb(237, 102, 240);border:1px solid black;  border-top-right-radius:20px; border-bottom-right-radius:20px;")
    row.append(div3); //appending section 3 into the row  
    
    
    container.append(row); //entire row gets append to the container

    //getting from local storage
    var localContent = localStorage.getItem(i)
    
    //displaying what we grab from local storage
    var inputContent = $(`#input-element-${i}`).val(localContent)
    
    
      //event listener for the save button
   $(`#save-button-${i}`).on('click',function(){
    var inputContent = $(`#input-element-${i}`).val()
    
    localStorage.setItem(i,inputContent) //saves the current user input inot local storage when save button clicked
})
    
    
}

$('#reset-button').on('click',function(){
    var confirmation = confirm('Are you sure you want to reset your scedule?')
    if(confirmation){
        localStorage.clear()
        location.reload()
    }
    
})