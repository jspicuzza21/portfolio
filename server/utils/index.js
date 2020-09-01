
convertTimeStampToMonth=(time)=>{
  const newTime = time.slice(5,7);
  if(newTime[0]==='0'){
    return newTime[1]
  } else {
    return newTime
  }
}

convertTimeStampToYear=(time)=>{
  return time.slice(0,4)
}

calculate= (arr, property, filter, time)=>{
  const date= new Date();
  const currentMonth = date.getMonth()+1;
  const currentYear = date.getFullYear();
  let matchTime='';

    if (property==='other'){
    return arr.reduce((accum, current)=>{
      if(time==='month') {
        matchTime=convertTimeStampToMonth(current.createdAt)
        if(Number(matchTime)===currentMonth) return accum+1
        else return accum
      }
      if(time==='year') {
        matchTime=convertTimeStampToYear(current.createdAt)
        if(Number(matchTime)===currentYear) return accum+1
        else return accum
      }
    }, 0)
  } else {
    return arr.reduce((accum, current)=>{
      if(time==='month') {
        matchTime=convertTimeStampToMonth(current.createdAt)
        if(Number(matchTime)===currentMonth && current[property]===filter) return accum+1
        else return accum
      }
      if(time==='year') {
        matchTime=convertTimeStampToYear(current.createdAt)
        if(Number(matchTime)===currentYear && current[property]===filter) return accum+1
        else return accum
      }
    }, 0)
  }
}

const createPassword=(length)=>{
  const dictionary='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
  let password='';

  for (let i=0; i<length; i++){
    const randomIdx = Math.floor(Math.random() * dictionary.length)
    password+=dictionary[randomIdx];
  }
  return password;
}

const validateEmail = (email) => {
  const dictionary=['bedminster.us','bernardspd.org','bernardsvillepd.org','boundbrookpd.org','branchburg.nj.us','bridgewaterpd.com','co.somerset.nj.us','farhillspolice.org','franklinnj.gov','greenbrookpd.org','hillsboroughpolice.org','manvillepd.org','npmail.org','peapackgladstonepd.org','police.montgomery.nj.us','raritanpd.org','sbbpolice.org','somervillepd.org','twp.franklin.nj.us','warrenpolice.com','watchungpd.com']
  email = email.split('@');
  if (dictionary.includes(email[1])){
    return true
  } else {
    return false
  }
}

function downloadBlob(blob, name = 'file.txt') {
  // Convert your blob into a Blob URL (a special url that points to an object in the browser's memory)
  const blobUrl = URL.createObjectURL(blob, name);
  // // Create a link element
  // const link = document.createElement("a");
  // // Set link's href to point to the Blob URL
  // link.href = blobUrl;
  // link.download = name;
  // // Append link to the body
  // document.body.appendChild(link);
  // // Dispatch click event on the link
  // // This is necessary as link.click() does not work on the latest firefox
  // link.dispatchEvent(
  //   new MouseEvent('click', { 
  //     bubbles: true, 
  //     cancelable: true, 
  //     view: window 
  //   })
  // );
  // // Remove link from body
  // document.body.removeChild(link);
}


module.exports={
  convertTimeStampToMonth,
  convertTimeStampToYear,
  calculate,
  createPassword,
  validateEmail,
  downloadBlob
}