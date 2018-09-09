const SocialBar = () => (
    <div id="social-bar">
        <img src="../assets/GitHub-Mark-32px.png" alt="Github"/>
        <img src="../assets/In-2CRev-34px-R.png" alt="LinkedIn"/>
        <style jsx>{`
            #social-bar{
                max-height: 5vh;
                background-color: #eee;

            }
        `}</style>
    </div>
)

const Footer = () => (
    <div>
        <div id="footer" className="container">
            <div>
                <ul>
                    <li>About this Project</li>
                    <li>Meet the Dev</li>
                    <li>Bug Reporting</li>
                    <li>Contact Me</li>
                </ul>
            </div>
            <style jsx>{`
                #footer {
                    height: 20%;
                    margin-top: 20px;
                    background-color: #fe2e2e;
                }
        
            
            `}</style>
        </div>
        <SocialBar />
    </div>
)

export default Footer;