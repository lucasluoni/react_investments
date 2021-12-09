// import Item from '../Item'
import {helperFormatNumber, helperFormatPercentage, helperFormatMoney} from '../../helpers/numberHelpers'
import {helperFormatMonthYear} from '../../helpers/dateHelpers'

export default function Investment({children: investment}) {
  const valueColor = investment.totalPercentage >= 0 ? 'text-green-700' : 'text-red-700';
  const {reports, description, totalValue, totalPercentage} = investment
  
  return (
    
    <div className='border-2 border-gray-200 rounded shadow-lg mb-8 p-6 bg-white'>
      <h1 className='flex justify-center font-semibold text-lg'>{description}</h1>
      <h2 className='flex justify-center font-semibold text-md'>
        Rendimento total:{' '} 
        <span className={`${valueColor} ml-1`}>
            {helperFormatNumber(totalValue)}
            <span className={`${valueColor} ml-1`}>
            ({helperFormatPercentage(totalPercentage)})
            </span>
        </span>
      </h2>
            <ul className='pt-4 text-sm'>
              
              {reports.map(({id, percentage, year, month, value}) => {
                
                const percentageClass = 
                percentage > 0
                  ? 'text-green-700'
                  : percentage < 0
                  ? 'text-red-700'
                  : ''

              return (
              <li key={id} className='pt-2 flex flex-row items-center justify-between border-b-2 border-gray-50 '>
                <span className='inline-block text-center rounded-lg w-20 py-2 mb-2 text-xs font-semibold text-gray-200 bg-gradient-to-t from-black via-gray-700 to-gray-600'> {helperFormatMonthYear(month, year)}</span> 
                <span className={percentageClass}> {helperFormatMoney(value)}</span> 
                <span className={percentageClass}> {(helperFormatPercentage(percentage))}</span> 
              </li>

              )
            })}

            </ul>
    </div>     
  )
}
