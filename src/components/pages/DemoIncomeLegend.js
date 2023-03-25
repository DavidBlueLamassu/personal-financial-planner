import DemoIncomePieChart from "./assets/DemoIncomePieChart.json";

function IncomeLegend(props) {
    let total = 0;
    const styles = {
        container: {
            margin: "0",
            width: "225px",
            background: "#E5E4E4"
        },
        colorBlock: {
            background: props.color,
            width: "10px",
            height: "10px",
            padding: "0",
            marginTop: "8px"
        },
        titleBlock: {
            width: "150px",
            margin: "0",
        },
        valueBlock: {
            width: "25px",
            margin: "0"
        }
    }
    for (let i = 0; i < DemoIncomePieChart.length; i++) {
        total = total + DemoIncomePieChart[i].value;
    }
    const percentage = props.value * 100/total;
    const roundedNumber = percentage.toFixed(0);
    return (
            <div className="row" style={styles.container}>
                <div style={styles.colorBlock}></div>
                <p style={styles.titleBlock}>{props.title}:</p>
                <p style={styles.valueBlock}>{roundedNumber}%</p>
            </div>
        );
}


export default IncomeLegend;