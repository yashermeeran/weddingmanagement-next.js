import Image from 'next/image';
import FrontImage  from '@/assets/gal.jpg'
const About = () => {
    return (
        <div>
            <Image
                id="aboutimg"
                src={FrontImage}
                alt="Event"
                width={800} 
                height={400} 
            />

            <p>Cathy Events is a premier event management company based in Chennai that specializes in creating unforgettable experiences for our clients. Our team of dedicated professionals is committed to providing exceptional service and attention to detail, ensuring that every event we plan is a success.</p>

            <p>With 20 years of experience in the field of Event Management, Cathy Events has built a reputation as a trusted partner for a wide range of events, including weddings, corporate events, birthday parties, product launches, and many more. We understand that each event is unique and requires personalized attention to ensure that every detail is taken care of.</p>

            <p>Our approach to event planning is simple yet effective – we take the time to understand our client's needs, preferences, and expectations, and then work closely with them to design an event that is tailored to their specific requirements. We focus on creating an atmosphere that is luxurious, elegant, and memorable. Our clients can rest assured that their event is in safe hands when working with Cathy Events.</p>

            <p>Our team of professionals includes event planners, designers, coordinators, and production experts who work seamlessly together to bring every aspect of the event to life. We believe that the key to success lies in attention to detail and great communication, which is why we work closely with our clients throughout the planning process. From the initial consultation to the post-event follow-up, we strive to exceed our client’s expectations in every aspect of event planning.</p>

            <p>At Cathy Events, we understand that every event is unique and requires a personalized approach. This is why we offer a range of customizable packages that can be tailored to fit the specific needs and budget of our clients. We work with a variety of vendors, including top-rated caterers, florists, photographers, decorators, and entertainers, to ensure that our clients have access to the best professionals in the industry.</p>

            <p>In addition to our event planning services, we also offer event rentals, including Furniture, Lighting, Photography, Fun Zones, Surprise Parties, LED Walls, Cake Decor, Catering Services, Bouquets, DJ & Audio, Corporate Events, Return Gifts, and Venue arrangements. Our extensive inventory of professional-grade equipment ensures that every event we plan is of the highest quality, with no detail left unattended. We offer competitive pricing that fits within budget without sacrificing the quality of our services. Our personalized approach ensures that our clients get the best value for their event.</p>

            <p>Contact Cathy Events today to see how we can bring your vision to life and help create an unforgettable event!</p>
        </div>
    );
};

export default About;
