import { calculateInvestmentResults, formatter } from "./../util/investment"

export default function Table({ values }) {

    const result = calculateInvestmentResults(values)
    console.log("App", result);
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invest Capital</th>
                </tr>
            </thead>

            <tbody>
                {result?.map((val, index) => (
                    <tr key={index}>
                        <td>{val.year}</td>
                        <td>{formatter.format(val.valueEndOfYear) }</td>
                        <td>{formatter.format(val.interest)}</td>
                        <td>
                            {/* Example calculation if needed */}
                            {(val.interest * val.year).toFixed(2)}
                        </td>
                        <td>{val.annualInvestment}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
