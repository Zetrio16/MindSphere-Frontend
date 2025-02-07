function GoogleForm() {
    return (
        <div style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSdskc6tEq2aSC6nnj9kvfnoyRsIu-y_rS3c0ElJvKdyxI1t4A/viewform?usp=dialog/viewform?embedded=fasle"
                width="800"
                height="600"
                // style={{ border: "none" }}
                allowFullScreen
                title="Google Form"
            ></iframe>
        </div>
    );
}

export default GoogleForm;
