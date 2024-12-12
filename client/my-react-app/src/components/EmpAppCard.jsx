import EmpAppAcceptBtn from "./EmpAppAcceptBtn"
import EmpAppRejectBtn from "./EmpAppRejectBtn"
export default function EmpAppCard(props) {
    console.log(props.data)
    let companyName = props.data.empName;
    let companyLink = props.data.compLink;
    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "15px",
                    backgroundColor: "#ffffff",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >
                    <div
                        style={{
                            fontSize: "18px",
                            fontWeight: "bold",
                            color: "#333",
                            marginBottom: "8px",
                        }}
                    >
                        {companyName}
                    </div>
                    <div>
                        <a
                            href="companyLink"
                            style={{
                                color: "#6a1b9a",
                                textDecoration: "none",
                                fontSize: "16px",
                            }}
                        >
                            {companyLink}
                        </a>
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "10px",
                    }}
                >
                    <EmpAppAcceptBtn data={props.data}/>
                    <EmpAppRejectBtn data={props.data} />
                </div>
            </div>
        </>
    )
}