import aircargo from "../assests/twoWheeler1.jpg"
import turcks from "../assests/threeWheeler.jpg"
import train from "../assests/miniTruck.jpg"
import SHIPPING from "../assests/turcks.png"
import delhi from "../assests/delhi.png"
import mumbai from "../assests/mumbai.jpg"
import banglore from "../assests/banglore.jpg"
import kolkata from "../assests/kolkata.webp"
import channai from "../assests/channai.webp"
import heydrabad from "../assests/hydrabad.jpg"
import jaipur from "../assests/jaipur.png"
import agra from "../assests/agra.png"
import Varanasi from "../assests/varansi.png"
import kochi from "../assests/kochi.webp"
import pune from "../assests/pune.webp"
import goa from "../assests/gao.jpg"
import mysore from "../assests/mysore.jpg"
import lucknow from "../assests/lakhnow.jpg"
import ahemdabad from "../assests/ahemdabad.png"
import carousal1 from "../assests/carousal1.png"
import carousal2 from "../assests/carousal2.png"
import carousal3 from "../assests/carousal3.png"





export const VEHICLE_TYPES = [
    {
        name: "Two Wheelers",
        image: "https://dom-website-prod-cdn-cms.porter.in/2_wheelers_274869b2af_7262e4dde4.webp"
    }, {
        name: "Three Wheelers",
        image: turcks
    }, {
        name: "Mini Trucks",
        image: train
    }, {
        name: "Larger Trucks",
        image: SHIPPING
    }];

export const FAMOUS_CITIES = [
    {
        name: "New Delhi",
        image: delhi
    },
    {
        name: "Mumbai",
        image: mumbai
    },
    {
        name: "Bangalore",
        image: banglore
    },
    {
        name: "Kolkata",
        image: kolkata
    },
    {
        name: "Chennai",
        image: channai
    },
    {
        name: "Hyderabad",
        image: heydrabad
    },
    {
        name: "Jaipur",
        image: jaipur
    },
    {
        name: "Agra",
        image: agra
    },
    {
        name: "Varanasi",
        image: Varanasi
    },
    {
        name: "Kochi",
        image: kochi
    },
    {
        name: "Pune",
        image: pune
    },
    {
        name: "Goa",
        image: goa
    },
    {
        name: "Mysore",
        image: mysore
    },
    {
        name: "Lucknow",
        image: lucknow
    },
    {
        name: "Ahmedabad",
        image: ahemdabad
    }
]

interface CrousalItems {
    description: string,
    image: string
}

export const CAROUSAL_DATA: CrousalItems[] = [
    {
        description: "Logistics Company Abhiviridhi has launched its latest social media brand campaign House shifting hai? Ho Jayega’, highlighting its packers and movers service offerings",
        image: carousal1
    },
    {
        description: "Logistics Company Abhiviridhi has launched its latest social media brand campaign House shifting hai? Ho Jayega’, highlighting its packers and movers service offerings",
        image: carousal2
    },
    {
        description: "Logistics Company Abhiviridhi has launched its latest social media brand campaign House shifting hai? Ho Jayega’, highlighting its packers and movers service offerings",
        image: carousal3
    }
]

interface AskedQuestions {
    questions: string,
    descriptions: string
}

export const ASKED_QUESTIONS: AskedQuestions[] = [
    {
        questions: "What is Abhiviridhi App?",
        descriptions: "Abhiviridhi is a tech-enabled logistics company offering a variety of intracity and intercity delivery services. Just download and register yourself on the app, choose the service that best fits yours logistic needs and make your booking! With Abhiviridhi, you will get a verified driver and vehicle right at your doorstep."
    },
    {
        questions: "How do I use Abhiviridhi App?",
        descriptions: "Follow these simple steps to start leveraging hassle-free logistics from Abhiviridhi: 1.Download the Abhiviridhi app 2.Choose the service you want to use 3.Select your pick up and delivery locations 4.Add any extra stops, if applicable 5.Choose the most appropriate vehicle type as per your requirements (2wheeler, three-wheelers or trucks) 6.Select the type of goods you’re sending 7.Choose your payment method 8.Click on “Book Now” and your vehicle is on its way!"
    },
    {
        questions: "How do I book a tempo/mini truck/bike or intercity courier services online from the Abhiviridhi app?",
        descriptions: "Get reliable and affordable logistics services from the Abhiviridhi app by following these steps: 1.Sign in to the Abhiviridhi app 2.Choose the service you want - trucks, 2wheeler or intercity courier services 3.Set your pick up and drop off location 4.Browse through the list of available vehicles (Tata Ace, Pickup 8ft, 2wheeler etc) and pick the one that suits your moving needs 5.Enter a few additional details, apply coupons to get exciting discounts, and confirm your booking. 6.Sit back and relax - our verified driver partners will do the rest."
    },

]