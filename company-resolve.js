const information = [

    //Add json values
    
    {
        name: 'First comapany',
        initialInvestment: 739781.48,
        unitaryIncome: 41,
        unitaryCost: 31.5,
        amount: 25000
    },
    {
        name: 'Second comapany',
        initialInvestment: 2707082.94,
        unitaryIncome: 24.50,
        unitaryCost: 15.80,
        amount: 145000
    },
]

function getValues(information){
    let number = []

    for(values of information){
        number[1] = values.initialInvestment
        number[2] = values.unitaryIncome
        number[3] = values.unitaryCost
        number[4] = values.amount

        values.time = getX(number)
        values.RPE = getValueRPE(values, number)
        values.CPE = getValueCPE(values, number)
        values.valueInitialInvestment = getValueInitialInvestment(values)
        returnFinalValues(values)
    }
}

function getX(number){
    return number[1] / (number[2] * number[4] - number[3] * number[4]) 
}

function getValueRPE(values, number){
    return number[2] * number[4] * values.time
}

function getValueCPE(values, number){
    return number[3] * number[4] * values.time
}

function getValueInitialInvestment(values){
    return values.RPE - values.CPE
}

function returnFinalValues(values){
    console.log('-------------------------------------------------')
    console.log(`Company's name: ${values.name}\n\nX: ${values.time.toFixed(6)}\nRPE: $${values.RPE.toFixed(2)}\nCPE: $${values.CPE.toFixed(2)}\nInitial Investment: $${values.valueInitialInvestment.toFixed(2)}\n`)
    console.log('-------------------------------------------------\n')
}

getValues(information)