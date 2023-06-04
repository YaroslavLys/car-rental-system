import {FooterWrapper, FooterInner, ContentBlock, Title, Description, SocialIcons} from "./Footer.styles"

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterInner>
                <ContentBlock>
                    <Title>About Us</Title>
                    <Description> We are dedicated to providing exceptional car rental services that make your travel
                        experience convenient and memorable. With many years of experience, we offer a diverse fleet of
                        well-maintained vehicles to meet your specific needs. Our commitment to customer satisfaction,
                        convenience, and friendly service sets us apart. Book with us today and enjoy a seamless car
                        rental experience.</Description>
                </ContentBlock>

                <ContentBlock>
                    <Title>Contact Information</Title>
                    <Description>Phone number: <a href="tel:+380988172977">+380 98 817 29 77</a></Description>
                    <Description>E-mail: <a
                        href="mailto:maksdemkovych@gmail.com">maksdemkovych@gmail.com</a></Description>
                    <Description>Location: <div><a href="https://lpnu.ua" target='_blank'><p>Ukraine, Lviv.</p>
                        <p>Stepan Bandera Street, 12.</p></a></div></Description>
                </ContentBlock>
                <ContentBlock>
                    <Title>Follow Us</Title>
                    <SocialIcons>
                        <li><a className="facebook" href="https://www.facebook.com" target='_blank'><i
                            className="fa fa-facebook"></i></a></li>
                        <li><a className="twitter" href="https://www.twitter.com/" target='_blank'><i
                            className="fa fa-twitter"></i></a></li>
                        <li><a className="instagram" href="https://www.instagram.com" target='_blank'><i
                            className="fa fa-instagram"></i></a></li>
                        <li><a className="linkedin" href="https://www.linkedin.com/" target='_blank'><i
                            className="fa fa-linkedin"></i></a></li>
                    </SocialIcons>
                </ContentBlock>
            </FooterInner>
        </FooterWrapper>
    );
};

export default Footer;
