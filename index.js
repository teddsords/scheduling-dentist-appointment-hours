const d = new Date();
const openWeekday = 8;
const closeWeekday = 18;
const closeSaturday = 14;

let day = 1//d.getDay();
let hours = d.getHours() -3 ;
let minutes = 5//d.getMinutes();
let arraySchedule;


function generateHours(openHour, closeHour, hours, minutes)
{
  let arrayHours;
  if(hours >= openHour && hours <= closeHour-1)
  {
    if (minutes > 0 && minutes < 30)
    {
      minutes = 30;
    }
    else if(minutes > 30)
    {
      hours += 1;
      minutes = 0;
    }
    arrayHours = generateSchedule(hours, minutes, closeHour);
  }
  else
  {
    hours = openHour;
    minutes = 30;
    
    arrayHours = generateSchedule(hours, minutes, closeHour);
  }
  return arrayHours;
}
function generateSchedule(hours, minutes, closeHour)
{
  let arrayHours = [];
  let stringSchedule;
  for (let i = 0; i < 5; i++)
  {
    if(hours >= closeHour)
      break;
      
    else
    {
      if (minutes === 30)
      {
        hours += 1;
        minutes = 0;
      }
      else
      {
        minutes = 30;
      }
    }
    stringSchedule = {id: (i + 1), horario: hours + ":" + (minutes === 0? '00': minutes)};
    arrayHours.push(stringSchedule)
  }
  return arrayHours;
}


if (day === 0)  // Verifying if day of the week is Sunday
  console.log("We are closed on Sundays");
else if (day === 6) // Verifying if day of the week is Saturday
{
  arraySchedule = generateHours(openWeekday, closeSaturday, hours, minutes);
  console.log(arraySchedule);
}
else   // Verifying if day of the week is a weekday
{
  arraySchedule = generateHours(openWeekday, closeWeekday, hours, minutes);
  console.log(arraySchedule);
}
