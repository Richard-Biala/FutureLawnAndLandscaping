import React from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero';
import brady from '../assets/images/brady.png'

function AboutPage(props) {
    return (
        <div>
            <div className="hero">
                <Hero title={props.title} />
            </div>
            

            <div className="brady">
                <img src={brady} alt="Brady"/>
            </div>
            

            <Content>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere distinctio error tempora corrupti aut dolor quas recusandae maxime non, ab animi rerum ratione eum quia exercitationem! Repellendus ipsam laboriosam similique?</p>

                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis saepe maiores ut quibusdam quam temporibus nesciunt inventore quia, repellat, in iste recusandae molestias ad, blanditiis doloribus voluptatem. Ab, placeat exercitationem.</p>

                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente laudantium sunt quisquam molestiae explicabo, esse a dolore amet soluta saepe impedit, fugit facilis est non maxime odio, ipsum facere consequatur.</p>
            </Content>
        </div>
    )
}

export default AboutPage;
