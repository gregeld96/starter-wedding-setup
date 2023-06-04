import { useLocation } from 'react-router-dom';
import RingPhoto from '../assets/ring.jpg';
import HomePhoto from '../assets/home.jpg';
import GuitarPhoto from '../assets/guitar.jpg';
import Slider1 from '../assets/Slider1.jpg';
import Slider2 from '../assets/Slider2.jpeg';
import Slider4 from '../assets/Slider4.jpeg';
import Slider5 from '../assets/Slider5.jpeg';
import Slider6 from '../assets/Slider6.jpeg';
import Slider8 from '../assets/Slider8.jpeg';
import Slider9 from '../assets/Slider9.jpeg';
import Slider10 from '../assets/Slider10.jpeg';
import Slider11 from '../assets/Slider11.jpeg';
import Slider13 from '../assets/Slider13.jpeg';
import Slider14 from '../assets/Slider16.jpeg';
import Slider15 from '../assets/Slider17.jpeg';
import Music from '../assets/MusicSecond.mp3';
import TextButton from '../components/IconButton';
import { useEffect, useState } from 'react';
import { GiChainedHeart, GiDoorRingHandle, GiDiamondRing } from 'react-icons/gi'
import { MdOutlineDateRange, MdAccessTime } from 'react-icons/md'
import { FaGlassCheers } from 'react-icons/fa'
import { GrMapLocation } from 'react-icons/gr'
import { TbMapPin } from 'react-icons/tb'
import CountdownTimer from '../components/CountDown/CountDownTimer';
import { Carousel } from 'react-responsive-carousel';
import PopUpGift from '../components/PopUp';

function HomePage() {
    const params = useLocation();
    const [invited, setInvited] = useState("")
    const [detail, setDetail] = useState(false);
    const [popUp, setPopUp] = useState(false);

    const FUTURE_IN_MS = Date.parse("06/24/2023 10:00");
    const NOW_IN_MS = new Date().getMilliseconds();

    const dateTimeAfterThreeDays = FUTURE_IN_MS - NOW_IN_MS ;

    const showInMapClickedMatrony = () => {
        window.open(`https://goo.gl/maps/Jm56doV8wf7h3Bx56`);
    };

    const showInMapClickedParty = () => {
        window.open(`https://goo.gl/maps/5xew5LQ3j7CzgSsi6`);
    };

    useEffect(() => {
        let param = params.search.split('&');

        setInvited(param[0].replace('?to=', "").replace(/_/g, " "));
    }, []);

    return (
        <div className="max-w-[460px] mx-auto ">
            {
                !detail ? <div style={{backgroundImage: `url(${RingPhoto})`}} className="h-screen bg-cover bg-center">
                    <div className='flex flex-col justify-between h-screen opacity-100'>
                    <div className="mx-auto pt-10 font-['Dancing_Script'] text-[#876510] text-center text-5xl font-semibold italic">
                        <p>The Wedding of</p>
                        <p>Greg & Vero</p>
                    </div>
                    
                    <div className="text-center font-semibold font-['Dancing_Script'] text-[#876510] text-2xl">
                        <div className='w-3/4 mx-auto mb-[6rem]'>
                        <TextButton color={"#ffdf00"} title={"You're invited!"} onClick={() => setDetail(true)} />
                        {
                            invited ? <div className="mt-[2rem]">
                                <p>Hi :</p>
                                <p className='capitalize'>{invited?.replace('-', " & ")}</p>
                            </div> : null
                        }
                        </div>
                        <div className='my-6 font-semibold mt-6 text-xl'>
                        <p className="">Saturday, 24 June 2023</p>
                        </div>
                    </div>
                    </div>
                </div> : <div>
                    <div style={{backgroundImage: `url(${HomePhoto})`}} className="h-screen bg-cover bg-center">
                        <div className="ml-5 pt-10 text-[#876510] text-2xl font-black">
                            <p>The Wedding of</p>
                            <p>Greg & Vero</p>
                        </div>
                    </div>
                    <div className='bg-contain h-auto bg-gradient-to-br from-[#977B64] to-[#AC9D8E] py-10 px-3'>
                        <img src={GuitarPhoto} alt='' className='p-4' />
                        <div>
                            <div className='text-center text-white'>
                                <p className='text-xl font-semibold'>Gregorius Eldwin Pradipta</p>
                                <p className='text-sm px-3'>The son of A. Riyanto Heru Nugroho and B. Endang Setyowati</p>
                                <p className="my-5 animate-pulse"><GiChainedHeart size={70} className='mx-auto'/></p>
                                <p className='text-xl font-semibold'>Veronika Dwi Kristanti</p>
                                <p className='text-sm px-3 mb-10'>The daughter of Marjono and Tumirah</p>
                                <div className="py-5 font-['Dancing_Script'] text-center italic px-3 lg:px-12 font-semibold text-white"><q>Above all, clothe yourselves with love, which binds everything together in perfect harmony. And let the peace of Christ rule in your hearts, to which indeed you were called in the one body. And be thankful. - Colossians 3:14-15</q></div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between h-auto py-10 px-3 bg-gradient-to-bl text-white from-[#977B64] to-[#AC9D8E]'>
                        <div>
                            <div className='justify-center items-center flex'>
                                <GiDoorRingHandle size={80} className='rotate-45' />
                                <GiDiamondRing size={70} className='rotate-[-45deg] ml-[-120px]' />
                            </div>
                            <p className="text-3xl text-center font-bold font-['Dancing_Script'] capitalize">holy matrimony</p>
                            <div className='flex items-center justify-center mt-5'>
                                <MdOutlineDateRange className='mr-2' />
                                <p className="text-lg font-['Dancing_Script']">Saturday, 24 June 2023</p>
                            </div>
                            <div className='flex items-center justify-center'>
                                <MdAccessTime className='mr-2' />
                                <p className='text-lg'>10.00</p>
                            </div>
                            <div className='flex items-center text-center justify-center'>
                                <TbMapPin size={20} className='mr-2' />
                                <p className='text-lg'>Saint Peter Canisius Catholic Church, Wonosari</p>
                            </div>
                            <GrMapLocation size={30} color={'white'} className='mx-auto  my-2 animate-pulse' onClick={() => showInMapClickedMatrony()} />
                        </div>
                        <div className='py-10'>
                            <FaGlassCheers size={100} className='mx-auto'/>
                            <p className="text-3xl text-center font-bold font-['Dancing_Script']">Wedding Party</p>
                            <div className='flex items-center justify-center mt-5'>
                                <MdOutlineDateRange className='mr-2' />
                                <p className="text-lg font-['Dancing_Script']">Saturday, 24 June 2023</p>
                            </div>
                            <div className='flex items-center justify-center'>
                                <MdAccessTime className='mr-2' />
                                <p className='text-lg'>13.00</p>
                            </div>
                            <div className='flex items-center text-center justify-center'>
                                <TbMapPin size={20} className='mr-2' />
                                <p className='text-lg'>Wonosari, GunungKidul, Yogyakarta</p>
                            </div>
                            <GrMapLocation size={30} className='mx-auto text-white my-2 animate-pulse' onClick={() => showInMapClickedParty()} />
                        </div>
                        <div>
                            <CountdownTimer targetDate={dateTimeAfterThreeDays} />
                        </div>
                    </div>
                    <div className='bg-gradient-to-br text-white from-[#977B64] to-[#AC9D8E] py-10 px-3'>
                        <p className="text-3xl text-center font-bold mb-3 font-['Dancing_Script'] capitalize">Our Gallery</p>
                        <Carousel infiniteLoop={true} autoPlay={true} showArrows={true}>
                            <div>
                                <img src={Slider1} alt="" />
                            </div>
                            <div>
                                <img src={Slider9} alt="" />
                            </div>
                            <div>
                                <img src={Slider10} alt="" />
                            </div>
                            <div>
                                <img src={Slider2} alt="" />
                            </div>
                            <div>
                                <img src={Slider4} alt="" />
                            </div>
                            <div>
                                <img src={Slider5} alt="" />
                            </div>
                            <div>
                                <img src={Slider6} alt="" />
                            </div>
                            <div>
                                <img src={Slider8} alt="" />
                            </div>
                            <div>
                                <img src={Slider11} alt="" />
                            </div>
                            <div>
                                <img src={Slider13} alt="" />
                            </div>
                            <div>
                                <img src={Slider14} alt="" />
                            </div>
                            <div>
                                <img src={Slider15} alt="" />
                            </div>
                        </Carousel>
                    </div>
                    <div className='bg-gradient-to-bl text-white from-[#977B64] to-[#AC9D8E] py-10 px-3'>
                        <p className="text-3xl text-center font-bold mb-3 font-['Dancing_Script'] capitalize">Gift</p>
                        <p className='text-center mb-5'>We understand that some of you might want to send us a gift or greetings, so tap on the button below to send them to us.</p>
                        <TextButton color={"#ffdf00"} title={"Wedding Gift!"} onClick={() => setPopUp(true)} />
                        <PopUpGift open={popUp} onClick={() => setPopUp(false)} />
                        <audio autoPlay={true}>
                            <source src={Music} type="audio/mpeg" />
                        </audio>
                    </div>
                    <div className='text-center text-sm py-[20px] bg-black text-white'>
                        <p>© Gregorius Eldwin Pradipta. All rights reserved.</p>
                    </div>
                </div>
            }
        </div>
    )
}

export default HomePage;