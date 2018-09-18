import Link from 'next/link';

const SocialButtons = () => (
    <div id="social-links">
        <a href="https://github.com/stellaCmiller/flash-lang-japanese">
            <img src="../assets/GitHub-Mark-32px.png" alt="Github"/>
        </a>
        <a href="https://www.linkedin.com/in/stellacmiller512/">
            <img src="../assets/In-2CRev-34px-R.png" alt="LinkedIn"/>
        </a>
        <style jsx>{`
            img {
                padding: 15px;
            }
            #social-links{
                display: inline-block;
                float: right;
                margin-right: 10vw;
            }
        `}</style>
    </div>
)

const Footer = () => (
    <div>
        <div id="footer">
            <div id="footer-links">
                <Link href="/about"><a>About this Project</a></Link>
                <Link href="/bugs"><a>Bug Reporting</a></Link>
            </div>
            <SocialButtons />
            <style jsx>{`
                #footer-links {
                    display: inline-block;
                    padding: 15px 0px 15px 0px;
                    margin-left: 10vw;
                }

                a {
                    color: white;
                    margin-right: 30px;
                }

                #footer {
                    height: 10vh;
                    margin-top: 20px;
                    background-color: #FF5F5F;
                    flex-shrink: 0;
                }
            `}</style>
        </div>
    </div>
)

export default Footer;