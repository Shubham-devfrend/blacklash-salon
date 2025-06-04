import { FaSpa, FaPaintBrush } from 'react-icons/fa';
import { FaScissors } from "react-icons/fa6";

export const Services = [
  {
    title: 'Hair Services',
    icon: <FaScissors />,
    description:
      'Professional hair styling, including loc retwists, cuts, and treatments tailored to your unique style.',
    features: ['Loc Retwists', 'Haircuts', 'Deep Conditioning Treatments'],
  },
  {
    title: 'Spa Treatments',
    icon: <FaSpa />,
    description:
      'Relaxing spa services designed to rejuvenate your skin and promote overall well-being.',
    features: ['Facials', 'Skin Care Consultations', 'Aromatherapy Sessions'],
  },
  {
    title: 'Nail Services',
    icon: <FaPaintBrush />,
    description:
      'Comprehensive nail care, offering manicures, pedicures, and custom nail art to express your personality.',
    features: ['Manicures', 'Pedicures', 'Custom Nail Art'],
  },
];



import { IoLocationOutline } from "react-icons/io5";
import { FiClock } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";

export  const Info = [
    {name:"Address", content:'Fort Wayne, IN, United States', icon:<IoLocationOutline/>},
    {name:"Status", content:'Open 8 am ⋅ Closes 7 pm', icon:<FiClock/>},
    {name:"Phone", content:'+1 260-387-0565', icon:<FiPhone/>},
  ]

export const pricingPlans = [
  {
    title: 'PRO UNLIMITED\n3-MONTH TERM',
    price: '$98',
    unit: '/mo',
    note: 'plus applicable taxes and fees',
    features: [
      'Discounted New Member Gear',
      '9RoundNOW App Workouts',
      'No Long-Term Commitment',
      'New Workouts Every Day',
      'Heart Rate Training System',
      'Circuit Workouts - No Class Times',
    ],
  },
  {
    title: 'PRO UNLIMITED\n6-MONTH TERM',
    price: '$78',
    unit: '/mo',
    note: 'plus applicable taxes and fees',
    features: [
      'Discounted New Member Gear',
      '9RoundNOW App Workouts',
      'New Workouts Every Day',
      'Heart Rate Training System',
      'Circuit Workouts - No Class Times',
    ],
  },
  {
    title: '10-SESSION\nPUNCH PACK',
    price: '$168',
    unit: '',
    note: 'plus applicable taxes and fees',
    features: [
      '10 Trainer-Led Sessions',
      'Discounted New Member Gear',
      'New Workouts Every Day',
      'Heart Rate Training System',
      'Circuit Workouts - No Class Times',
    ],
  },
]
