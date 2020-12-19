import RaspberryImg from '../assets/raspberryPI.webp';
import HouseImg from '../assets/house.jpg';


const places = [
  {
    title: 'Raspberry-PI',
    description: 'Умный дом, построенный на базе Raspberry Pi — многофункциональный комплекс, позволяющий контролировать и управлять всеми элементами вашего места проживания, будь то квартира, дача или частный дом.',
    imageUrl: `${RaspberryImg}`,
    time: 1500,
  },
  {
    title: 'Smart Home',
    description: 'Умный дом — это автоматизированная система управления, предназначена для контроля и управления освещением, отоплением, вентиляцией, водоснабжением, безопасностью, аудио/видео аппаратурой и другими инженерными системами дома.',
    imageUrl: `${HouseImg}`,
    time: 1500,
  },
];

export default places