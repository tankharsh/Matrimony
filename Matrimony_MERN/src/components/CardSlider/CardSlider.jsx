import React from 'react';
import Slider from 'react-slick';
import 'tailwindcss/tailwind.css';
import { IoIosHeart } from "react-icons/io";

const cards = [
  { title: 'Date 1', description: 'When on a date, switch off your phone. Nothing is more insulting to a girl than a man answering every call while on a date. You are allowed to make a small deal about turning off your phone at the start of the date with a comment like "Now we will not be disturbed". Power down your phone or lose your date. Cant have both.', imageUrl: 'https://cdn.pixabay.com/photo/2022/04/12/04/57/couple-7127168_640.jpg' },
  { title: 'Date 2', description: 'Communicate openly and honestly, understand each others goals, and support one anothers dreams. Manage conflicts respectfully, spend quality time together, and discuss important topics like finances and family. Maintain individual interests, build trust, show appreciation, and keep the relationship fun and enjoyable. These practices strengthen and sustain a marriage.', imageUrl: 'https://cdn.pixabay.com/photo/2022/10/21/03/29/relationship-7536124_640.jpg' },
  { title: 'Date 3', description: 'Be patient and give each other time to grow. Share responsibilities and work as a team. Respect personal boundaries and needs for space. Keep romance alive with regular dates and surprises. Stay open to personal growth and self-improvement, which can positively influence and strengthen the relationship.', imageUrl: 'https://cdn.pixabay.com/photo/2020/03/11/15/16/friends-4922436_640.jpg' },
  { title: 'Date 4', description: 'Listen actively to your partner without judgment, and express your own feelings honestly. Be flexible and willing to compromise. Set and work towards shared goals to strengthen your partnership. If challenges arise, seek counseling or therapy to address issues constructively and maintain a healthy relationship.', imageUrl: 'https://i.pinimg.com/564x/86/2f/4e/862f4e91e74ebc9a47735d19c5c8e33a.jpg' },
  { title: 'Date 5', description: 'Celebrate each other’s successes and milestones to build a positive and supportive atmosphere. Prioritize quality time and maintain physical affection to strengthen your bond. Address issues promptly and avoid letting resentment build up. Embrace each other’s differences and learn from them to enhance mutual understanding and respect.', imageUrl: 'https://cdn.pixabay.com/photo/2023/04/16/11/03/couple-7929926_640.jpg' },
  { title: 'Date 6', description: 'Maintain a sense of humor to navigate challenges together and reduce stress. Show empathy by validating each other’s feelings and experiences. Set aside regular time for meaningful conversations to stay connected. Be proactive in resolving issues and avoid blame. Focus on each other’s strengths and celebrate your relationship daily.', imageUrl: 'https://i.pinimg.com/474x/36/f2/af/36f2af1d02a5639f6a4628c9c2723894.jpg' },
  // Add more cards as needed
];

const CardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="container max-w-7xl p-4">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="px-4">
            <div className="bg-white shadow-md rounded-lg overflow-hidden h-full transition-transform duration-300 hover:scale-105 hover:drop-shadow-2xl">
              <img src={card.imageUrl} alt={card.title} className="w-full h-96  bg-cover" />
              <div className="p-6">
                <h2 className="text-xl flex font-bold items-center ">
                  <span className='text-purple-700'><IoIosHeart /></span>{card.title}
                </h2>

                <p className="text-gray-700 flex justify-between">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
