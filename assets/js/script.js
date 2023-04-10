
var currentDate = dayjs().format('D')
var numOfCurrentDate = parseInt(currentDate)

for (let i = 1; i <= 30; i++) {
    var liEl = $('<li>');
    var inputEl = $('<input>')
    liEl.attr('style','height:70px; border: black solid 1px;');
    inputEl.attr('style','height:70px; border: black solid 1px; width:100%;');
    if(i==numOfCurrentDate){
        liEl.attr('style','height:70px; border: black solid 1px; background-color:red;');
    }else if(i<=numOfCurrentDate){
        liEl.attr('style','height:70px; border: black solid 1px; background-color:gray;');
    }else{
        liEl.attr('style','height:70px; border: black solid 1px; background-color:green;');
    }
    liEl.append(inputEl);
    $('.calendar-list').append(liEl); 
}