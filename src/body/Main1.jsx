import Div1 from './Div1';
import './main.css';
import Div2 from './Div2';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Div3 from './Div3';
export default function Main()
{
    return(
        <div className='flex sm:flex-col md:flex-col flex-wrap mt-5 bg-gray-200'>
            <Div1/>
            <Div2/>
            <Div3/>
        </div>
    )
}