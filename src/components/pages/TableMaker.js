//A props file for the expenses and income tables in Summary.js. This is used both for demo and user data. The data 
//is switched using context and state hooks.

function TableMaker(props) {
    const styles = {
        container: {
            margin: "0",
            width: "225px",
            background: "#E5E4E4"
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
    return (
        <div className="row" style={styles.container}>
            <p style={styles.titleBlock}>{props.title}:</p>
            <p style={styles.valueBlock}>£{props.value}</p>
        </div>
    );
}

export default TableMaker;