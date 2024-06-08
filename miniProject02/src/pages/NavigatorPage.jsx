import Container from "@mui/material/Container";
import { LineChart, Line } from 'recharts';

/**
 * 
 * @returns NavigatorPage component.
 */
function NavigatorPage(props) {

    const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
        { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
        { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
        { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
        { name: 'Page A', uv: 400, pv: 2400, amt: 2400 }
    ];

    return (
        <div className="NavigatorPage">
            <Container>
                <h1>NavigatorPage</h1>
                <LineChart width={400} height={400} data={data}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                </LineChart>
            </Container>
        </div>
    )
}

export default NavigatorPage