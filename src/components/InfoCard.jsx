import React from 'react'

const isIncome = Math.round(Math.random());

const InfoCard = () => {
  return (
    <div style={{textAlign: 'center', padding:'0 10%'}}>
        Try Saying:<br/>
        Add an {isIncome ? 'Income ' : 'Expense '}
        of {isIncome ? 'Rs 100 ' : 'Rs 5000 '} 
        in Category {isIncome ? 'Salary ' : 'Pets '}
        for {isIncome ? 'Monday' : '3rd November'}...
    </div>
  )
}

export default InfoCard