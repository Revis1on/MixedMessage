function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }
  

  const getWords = {

    WeekDay: ['Monday','Thuesday','Wendsday','Thurstday','Friday','Saturday','Sunday'],
    fortuneOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
    advice: ['go out and eat', 'not read this', 'play more', 'trust no one']
  }
  
  
  let arrayToShow = []

  for (let word in getWords){

    let i = generateRandomNumber(getWords[word].length)

    switch(word){

        case 'WeekDay' :
            arrayToShow.push(`On this day ${getWords[word][i]} .`)
            break
        case 'fortuneOutput' :
            arrayToShow.push(`Your luck will be ${getWords[word][i]} .` )
            break
        case 'advice' :
            arrayToShow.push(`You need to ${getWords[word][i]} .`)
            break

        default :
            arrayToShow.push('There is no info');

    }
  }

  function makeItCooler(arr){
    

    const formatted = arrayToShow.join('\n')
    console.log(formatted)
  }


makeItCooler(arrayToShow);