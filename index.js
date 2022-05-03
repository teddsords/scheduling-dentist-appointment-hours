const d = new Date();
var day = 1; //d.getDay();
var hours = 7; //d.getHours();
var minutes = 55; //d.getMinutes();

if (day === 0)  // Verifying if day of the week is Sunday
  console.log("We are closed on Sundays");
else if (day === 6) // Verifying if day of the week is Saturday
  
  console.log("Today is Saturday, we close at 14:00");
else   // Verifying if day of the week is a weekday
{
  if((hours >= 8 && minutes >= 0) && (hours <= 15 && minutes <=29))
  {
    if (minutes >= 1 && minutes <= 29)
    {
      minutes = 30;
      for (var i = 0; i < 5; i++)
      {
        if (i === 0 || i === 2 || i === 4)
          {
            hours += 1;
            minutes = 0;
            console.log(hours + ":" + minutes);
          }
        else
          {
            minutes = 30;
            console.log(hours + ":" + minutes);
          }              
      }
    }
    else if(minutes === 0)
    {
      for (var i = 0; i < 5; i++)
        {
          if (i === 0 || i === 2 || i === 4)
          {
            minutes = 30;
            console.log(hours + ":" + minutes);
          }
          else
          {
            hours += 1;
            minutes = 0;
            console.log(hours + ":" + minutes);
          }
        }
    }
    else if (minutes === 30)
    {
      for (var i = 0; i < 5; i++)
        {
          if(i === 0 || i === 2 || i === 4)
          {
            minutes = 0;
            hours += 1;
            console.log(hours + ":" + minutes);
          }
          else
          {
            minutes = 30;
            console.log(hours + ":" + minutes);
          }
        }
    }
    else
    {
      hours += 1;
      minutes = 0;
      for(var i = 0; i < 5; i++)
        {
          if(i === 0 || i === 2 || i === 4)
          {
            minutes = 30;
            console.log(hours + ":" + minutes);
          }
          else
          {
            hours += 1;
            minutes = 0;
            console.log(hours + ":" + minutes);
          }
        }
    }
  }
  else if(hours >= 15 && minutes >= 0)
  {
    if (minutes >= 1 && minutes <= 29)
    {
      console.log("line 90");
      minutes = 30;
      for (var i = 0; i < 5; i++)
        {
          if (hours >= 18 && minutes === 0)
            break;
          else
          {
            if (i === 0 || i === 2 || i === 4)
            {
              hours += 1;
              minutes = 0;
              console.log(hours + ":" + minutes);
            }
            else
            {
              minutes = 30;
              console.log(hours + ":" + minutes);
            } 
          }
        }
      }
    else if(minutes === 0)
    {
      for (var i = 0; i < 5; i++)
        {
          if ((hours >= 18) && (minutes >= 0))
            break;
          else{ 
            if (i === 0 || i === 2 || i === 4)
            {
              minutes = 30;
              console.log(hours + ":" + minutes);
            }
            else
            {
              hours += 1;
              minutes = 0;
              console.log(hours + ":" + minutes);
            }
          }
        }
    }
    else if (minutes === 30)
    {
      for (var i = 0; i < 5; i++)
        {
          if ((hours >= 18) && (minutes >= 0))
            break;
          else
          {
            if(i === 0 || i === 2 || i === 4)
            {
              minutes = 0;
              hours += 1;
              console.log(hours + ":" + minutes);
            }
            else
            {
              minutes = 30;
              console.log(hours + ":" + minutes);
            }
          }
        }
    }
    else 
    {
      hours += 1;
      minutes = 0;
      for(var i = 0; i < 5; i++)
        {
          if (hours >= 18 && minutes === 0)
            break;
          else
          {
            if(i === 0 || i === 2 || i === 4)
            {
              minutes = 30;
              console.log(hours + ":" + minutes);
            }
            else
            {
              hours += 1;
              minutes = 0;
              console.log(hours + ":" + minutes);
            }
          }
        }
    }
  }
  else
  {
    hours = 8;
    minutes = 30;

    for (var i = 0; i < 5; i++)
    {
      if (i === 0 || i === 2 || i === 4)
      {
        console.log(hours + ":" + minutes);
        minutes = 0;
        hours += 1;
      }
      else
      {
        console.log(hours + ":" + minutes);
        minutes = 30;
      }
    }
  }

}
  
  //else
    //console.log((hours +1) + ":" + "00");