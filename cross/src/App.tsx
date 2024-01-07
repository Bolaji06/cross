import { useEffect, useState } from 'react'
import { Button } from './components/ui/button'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger,  } from './components/ui/navigation-menu'
import { Avatar, AvatarImage, } from './components/ui/avatar';
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTrigger } from './components/ui/drawer';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './components/ui/carousel';
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';

import  AutoPlay  from 'embla-carousel-autoplay';

import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { FaChevronUp } from "react-icons/fa6";

import { carouselData } from './data/carouselData';

import logo from './assets/logo.webp';
import card1 from './assets/3.jpg.webp';
import card2 from './assets/4.jpg.webp';
import card3 from './assets/5.jpg.webp';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './components/ui/card';
import { Accordion, AccordionContent, AccordionItem } from './components/ui/accordion';
import { AccordionHeader, AccordionTrigger } from '@radix-ui/react-accordion';
import { Separator } from './components/ui/separator';
import { ChevronDown } from 'lucide-react';


function App() {
  const [scroll, setSecroll] = useState<number>(0);
  //const [heroImage, setHeroImage] = useState<(string)[]>(carouselData);

  useEffect(() => {
     const getScrolling = () => {
      const scrollPos: number = window.scrollY;
      setSecroll(scrollPos);
     }
     window.addEventListener('scroll', getScrolling);

     return () => {
      window.removeEventListener('scroll', getScrolling);
     }

  }, [scroll]);

  return (
    <>
      <a href="#">
        <Button variant={'destructive'} className='fixed bottom-14 rounded-none h-10 w-10 z-50 right-14'>
          <div>
            <FaChevronUp size={20}/>
          </div>
        </Button>
      </a>
      <nav className={` ${scroll > 50 ? 'shadow-2xl' : 'shadow-md'} fixed z-40 bg-white w-full py-1 lg:px-12`}>
        <div className='flex justify-between items-center p-5'>
          <Avatar className='w-24 h-8 rounded-none'>
            <AvatarImage  src={logo}/>
          </Avatar>

        <div className='flex gap-2 items-center'>
          <NavigationMenu className='hidden lg:block'>
            <NavigationMenuList>
              <NavigationMenuItem >
                <NavigationMenuTrigger className='uppercase text-base        font-semibold'>
                  Sermon
                </NavigationMenuTrigger>
                <NavigationMenuContent className='w-40  p-3 shadow-md rounded-md'>
                  <NavigationMenuLink>
                    <ul className='w-[150px]'>
                    <li className='p-2 hover:bg-slate-50'><a href="">Sunday Service</a></li>
                    <li className='p-2 hover:bg-slate-50'>Sunday School</li>
                    <li className='p-2 hover:bg-slate-50'>Mid-week Service</li>
                  </ul>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>        

              <NavigationMenuItem>
                
                  <NavigationMenuLink>
                    <a href='/' className='uppercase font-semibold'>Home</a>
                  </NavigationMenuLink>
                
              </NavigationMenuItem>
              <ul className='flex uppercase font-semibold text-base'>
               
                <li className='px-4'>Contact</li>
              </ul>
            </NavigationMenuList>
          </NavigationMenu>

          <div className='lg:hidden'>
            <Drawer>
              <DrawerTrigger>
                <IoMenu size={30}/>
              </DrawerTrigger>
              <DrawerContent className=' top-0
                w-1/2 rounded-none mt-0 mr-0'>
                <DrawerHeader>

                  <DrawerClose className='top-0'>
                    <Button variant="destructive">
                      <IoMdClose />
                    </Button>
                  </DrawerClose>
                </DrawerHeader>
              </DrawerContent>
            </Drawer>
          </div>

          <Button className='bg-red-600 rounded-md hidden lg:block px-10 uppercase hover:bg-blue-950 text-white transition ease-in-out duration-700'>Donate</Button>
        </div>
          
        </div>
      </nav>

      <section className=''>
          <div className='w-full relative flex'>
            <div className='inset-0 z-10 flex-1 absolute w-full bg-black/45'/>
            {carouselData.map((item) => {
               return <Avatar key={item} className='h-[680px] w-full  py-30'>
                        <AvatarImage src={item} className='w-full object-cover'/>
                      </Avatar>
            })
              
            }
           
            <div className='absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pb-10 flex flex-col justify-center items-center'>
               <h1 className=' pb-6
            text-3xl lg:text-5xl font-bold text-blue-50 uppercase'>Welcome to church</h1>
            <p className='text-center w-full px-6 lg:max-w-2xl text-slate-200 leading-7
            '>A church isn't a building—it's the people.
               We meet in locations around the United States and globally
               at Life.Church Online. No matter where you join us.</p>
            </div>

            {/* <div className='flex gap-2 items-center justify-center relative z-10 -top-40'>
              <Button className='h-1 w-6 p-0 bg-white hover:bg-gradient-to-r from-white to-blue-900 rounded hover:bg-slate-200'></Button>

            </div> */}
          </div>
        <div className='flex justify-center py-20 flex-col md:flex-row items-center gap-8 px-6 lg:px-20'>
          <Card className='border-none shadow-none max-w-xs md:max-w-sm group'>
            <CardTitle>
              <Avatar className='shadow-md rounded-md w-full'>
                <AvatarImage src={card1}/>
              </Avatar>
            </CardTitle>
            <CardHeader className='pt-6 group-hover:text-red-600 transition ease-in-out duration-500'>
              <h1 className='text-2xl font-semibold'>Our Church</h1>
            </CardHeader>
            <CardContent className='py-3 leading-7 text-slate-500'>
                <p>There are many variations of passages of 
                  Lorem Ipsum available, but the majority
                   have suffered alteration in some form.</p>
              </CardContent>
              <CardFooter className=''>
                <p className='font-bold text-slate-500'>Read more</p>
              </CardFooter>
          </Card>

          <Card className='border-none shadow-none max-w-xs md:max-w-sm group'>
            <CardTitle>
              <Avatar className='shadow-md rounded-md w-full'>
                <AvatarImage src={card2}/>
              </Avatar>
            </CardTitle>
            <CardHeader className='pt-5 group-hover:text-red-600 transition ease-in-out duration-500'>
              <h1 className='text-2xl font-semibold'>Our Church</h1>
            </CardHeader>
            <CardContent className='py-3 leading-7 text-slate-500'>
                <p>There are many variations of passages of 
                  Lorem Ipsum available, but the majority
                   have suffered alteration in some form.</p>
              </CardContent>
              <CardFooter className=''>
                <p className='font-bold text-slate-500'>Read more</p>
              </CardFooter>
          </Card>

          <Card className='border-none shadow-none max-w-xs md:max-w-sm group'>
            <CardTitle>
              <Avatar className='shadow-md rounded-md w-full'>
                <AvatarImage src={card3}/>
              </Avatar>
            </CardTitle>
            <CardHeader className='pt-5 group-hover:text-red-600 transition ease-in-out duration-500'>
              <h1 className='text-2xl font-semibold'>Our Church</h1>
            </CardHeader>
            <CardContent className='py-3 leading-7 text-slate-500'>
                <p>There are many variations of passages of 
                  Lorem Ipsum available, but the majority
                   have suffered alteration in some form.</p>
              </CardContent>
              <CardFooter className=''>
                <p className='font-bold text-slate-500'>Read more</p>
              </CardFooter>
          </Card>
        </div>
      </section>

      <section className='relative bg-section-fixed w-full py-5 bg-fixed bg-no-repeat bg-cover bg-center'>
        <div className='absolute inset-0 bg-black/60'/>
        <div className='flex justify-center items-center py-20 relative z-10'>
          <div className='text-center'>
            <p className='uppercase text-red-600 text-xl tracking-[.3em] font-semibold'>A place for you</p>

            <h2 className='font-semibold text-4xl lg:text-5xl
             py-10 text-white max-w-md lg:max-w-5xl leading-10'>
              Find a place to connect and grow through a 
              small group, class, or regular gathering.</h2>

            <Button className='w-52 h-12 mt-6 uppercase text-base hover:bg-blue-950 hover:text-white
              transition ease-in-out duration-700 font-semibold
             text-red-600 bg-white'>Become a member</Button>
          </div>
        </div>
      </section>

      <section className='py-10 px-14'>
              <Carousel opts={{
                loop: true,
              }}
              plugins={[
                AutoPlay({
                  dalay: 2000,
                  stopOnMouseEnter: true,
                  stopOnInteraction: true,
                })
              ]}
               className='w-full'>
                <CarouselPrevious />
                <CarouselContent className='ml-6'>
                  {carouselData.map((img) => {
                    return <CarouselItem key={img} className='basis-1/2 pl-6'>
                    <Avatar>
                      <AvatarImage className='hover:blur-sm transition ease-in-out duration-700
                       hover:scale-125 object-contain' src={img} alt='Slide 1'/>
                    </Avatar>
                  </CarouselItem>})};
                </CarouselContent>
                <CarouselNext />
              </Carousel>
      </section>

      <section className='px-6 lg:px-16 bg-red-600 mt-10 py-4 lg:py-10'>
        <div className='flex flex-col lg:flex-row justify-between lg:items-center'>
         <div className='text-white pb-4'>
          <h1 className='text-3xl lg:text-4xl py-2 font-semibold'>Subscribe to our Newsletter</h1>
          <p>Subcribe Us And Tell Us About Your Story</p>
         </div>

         <div className='relative'>
              <Input type='email' className='lg:w-96 h-12 rounded-sm'/>
              <Button className='transition duration-500 ease-in-out
              rounded-sm absolute text-white right-2 top-1 bg-red-600 uppercase'>Subscribe</Button>
         </div>
        </div>
      </section>

      <section className='py-20 px-8 '>
        
      </section>
    </>
  )
}

export default App
