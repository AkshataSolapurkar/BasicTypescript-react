import React from 'react'
import logo from './images.png'
import {reviews} from './data'
import { properties } from './property'

const App :React.FC = () =>  {

  const [reviewTotal, setReviewTotal] = React.useState(0);
  const[lastreviwe,setlastreviwe]=React.useState("");
  const[loyalty,setloyalty]=React.useState<boolean>()
  const[propertieshere,setproperties]=React.useState([
    {
      image: 'src/columbia.jpg',
      title: 'Colombian Shack',
      price: 45,
      location: {
          firstLine: 'shack 37',
          city: 'Bogota',
          code: 45632,
          country: 'Colombia'
      },
      contact:[+1123495082908, 'marywinkle@gmail.com'],//this is a tuple
      isAvailable: true  
  },
  {
      image: 'src/london.jpg',
      title: 'Polish Cottage',
      price: 34,
      location: {
          firstLine: 'no 23',
          city: 'Gdansk',
          code: 343903,
          country: 'Poland'
      },
      contact:[+1123495082908, 'garydavis@hotmail.com'],
      isAvailable: false 
  },
  {
      image: 'src/poland.jpg',
      title: 'London Flat',
      price: 23,
      location: {
          firstLine: '15',
          city: 'London',
          code: 35433,
          country: 'United Kingdom',
      },
      contact:[+1123495082908, 'andyluger@aol.com'],
      isAvailable: true
  }

  ])

  React.useEffect(() => {
    const totalReviews = reviews.length;
    const lastreviwer =reviews[0].name;
    const loyal =reviews[0].loyaltyUser
    setReviewTotal(totalReviews);
    setlastreviwe(lastreviwer);
    setloyalty(loyal);
    console.log('Total Reviews:', totalReviews);
  }, []); // Empty dependency array means this effect runs once after the initial render
  
  const you = {
    userName: {firstName: 'Bobby', lastName: 'Brown'},
    isReturning: true,
    }

  return (
    <>
      <body className="mx-auto my-0 text-gray-700 flex flex-col">
        <div className='sm:text-center items-center flex justify-between w-full sticky top-0 bg-white shadow-sm'>
        <img className='h-[75px] bg-cover bg-center m-[20px]' src={logo} alt="" />
           <h3 className="sm:text-[1.2rem] text-center m-[20px] font-bold text-[0.8rem]">Welcome
               <span className='sm:text-[1.2rem] text-[0.8rem] ' id="returning-user">{you.isReturning ? " Back" : " "}</span>
               <span className='sm:text-[1.2rem] text-[0.8rem] ' id="user">{" " + you.userName.firstName + " "+  you.userName.lastName}</span>
            </h3>
        </div>  
       <div className="text-center sm:text-left">
         <h5 className="sm:text-[1rem] text-gray-700 font-bold sm:font-extrabold text-[0.7rem] m-[20px] pl-2" id="reviews">Total Review : {reviewTotal} && was last reviewed by : {lastreviwe} {loyalty ? "⭐": " "}</h5>         
         <h3 className='sm:text-[1rem] text-gray-700 font-bold sm:font-extrabold text-[0.7rem] m-[20px] pl-2' >Other Properties recommended to you:</h3> 
         <div className="m-[20px] pl-2 flex gap-[30px] flex-wrap justify-center sm:items-center sm:justify-start ">
         {propertieshere.map((property, index) => (
         <div className='flex flex-col justify-center items-center' key={index}>
          <h2 className='mb-[10px] text-[1rem] sm:text-[1.2rem] font-semibold sm:font-bold'>{property.title}</h2>
          <img className='w-[275px] sm:w-[350px] sm:h-[195px] h-[183px] rounded-[8px]' src={property.image} alt={property.title} />
          <div className='mt-[10px] sm:text-left text-center'>
          <p className='text-[0.8rem] sm:text-[1rem] font-semibold'>Price: Euro {property.price}</p> 
          <p className='text-[0.8rem] sm:text-[1rem] font-semibold'>Location: {property.location.firstLine} {property.location.country} {property.location.city} {property.location.code}</p>
          </div>
        </div>
      ))}
         </div>
       </div>
       </body>
    </>
  );
}
 
export default App
