
function GoogleForm({ testId }) {
    const formUrls = {
        "1": "https://docs.google.com/forms/d/e/1FAIpQLSdskc6tEq2aSC6nnj9kvfnoyRsIu-y_rS3c0ElJvKdyxI1t4A/viewform?usp=dialog",
        "2": "https://docs.google.com/forms/d/e/1FAIpQLScNnrmXWCPwNO0gZCUYCnjCytgeHWJTtxP3Gvw-ltYadvSgTQ/viewform?usp=dialog",
        "3": "https://docs.google.com/forms/d/e/1FAIpQLSeokCpbRWW9cU_rGqYWU9ixUpQcV-5HOseJGQiFDaMgbv3J0g/viewform?usp=dialog"
    };

    return (
        <div style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            {formUrls[testId] ? (
                <iframe
                    src={formUrls[testId]}
                    style={{ width: "100vw", height: "100vh", border: "none" }}
                    title={`Google Form ${testId}`}
                ></iframe>
            ) : (
                <h1>Invalid Test</h1>
            )}
        </div>
    );
}

export default GoogleForm;
