async function periods() {
  const response = await fetch('https://raw.githubusercontent.com/christopherjael/time-tracking-dashboard--solution/master/data.json')

  const json = await response.json()
  
  console.log(response, json)
}

periods()