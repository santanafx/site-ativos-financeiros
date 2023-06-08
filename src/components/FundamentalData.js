import React from 'react'
import './FundamentalData.css'

export const FundamentalData = ({ dataIncome, ticker }) => {

    return (
        <div className='fundamentalData'>
            <h1>Fundamental Data for {ticker}</h1>
            <p>Fiscal year end: {dataIncome.annualReports[0].fiscalDateEnding}</p>
            <p>Reported Currency:{dataIncome.annualReports[0].reportedCurrency}</p>
            <hr />
            <span>ebit:{dataIncome.annualReports[0].ebit}</span>
            <span>ebitda:{dataIncome.annualReports[0].ebitda}</span>
            <span>Gross Profit:{dataIncome.annualReports[0].grossProfit}</span>
            <span>Income Before Tax:{dataIncome.annualReports[0].incomeBeforeTax}</span>
            <span>Income Tax Expense:{dataIncome.annualReports[0].incomeTaxExpense}</span>
            <span>Interest and Debt Expense:{dataIncome.annualReports[0].interestAndDebtExpense}</span>
            <span>Interest Expense:{dataIncome.annualReports[0].interestExpense}</span>
            <span>Interest Income:{dataIncome.annualReports[0].interestIncome}</span>
            <span>Net Income:{dataIncome.annualReports[0].netIncome}</span>
            <span>Total Revenue:{dataIncome.annualReports[0].totalRevenue}</span>
        </div>
    )
}
