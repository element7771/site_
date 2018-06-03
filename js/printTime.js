 Y=new Date();
              var Day = new Array("воскресенье","понедельник","вторник","среда","четверг","пятница","суббота");
              var Month = new Array("января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря");
              document.write("Сегодня: " + Day[Y.getDay()] + ", " + Y.getDate() + " " + Month[Y.getMonth()] + " " + Y.getFullYear())

function printTime()
{
	var date = new Date();
	

	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();

if(hours < 10)
    {
        hours = '0' + hours;
    }

if(minutes < 10)
    {
        minutes = '0' + minutes;
    }
if(seconds < 10)
    {
        seconds = '0' + seconds;
    }

	document.getElementById('timedisplay').innerHTML = 'Текущее время: '+hours + ':' + minutes + ':' + seconds;
}
setInterval(printTime, 0);