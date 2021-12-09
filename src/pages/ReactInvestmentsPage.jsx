import React, {useState, useEffect} from 'react'
import Header from '../components/containers/Header'
import Main from '../components/containers/Main'
import Investments from '../components/investments/Investments'
import Investment from '../components/investments/Investment'
import {filterRequestedData} from '../data/investments'

export default function ReactInvestmentsPage() {

  const [allInvestments, setAllInvestments] = useState([])
  
  useEffect(() => {
    setAllInvestments(filterRequestedData())
  }, [])

  return (
    <div className='bg-gray-100'>
      <Header>React Investments by Lucas</Header>
      <Main>
        <Investments>
          {allInvestments.map(investment => (
            <Investment key={investment.id}>{investment}</Investment>
          ))}
        </Investments>
      </Main>
    </div>
  )
}
