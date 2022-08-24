import React from 'react'


import { AiOutlineShoppingCart } from "react-icons/ai";


export const Header = () => {

    return (
        <>
            <nav className="h-[70px] w-fit relative flex flex-wrap items-center pr-2 pl-0 py-0 bg-[#EE5601] mb-3">
                <div className="container h-[70px] pr-2 pl-0 mx-auto flex flex-wrap items-center justify-right ml-0">
                    <div className=" relative lg:w-auto  pr-6 pl-0 lg:static lg:block  ml-0">
                        <button className="bg-gradient-to-r from-[#FF6200] via-[#FF861B] to-[#FF861B]  text-white active:bg-amber-600 font-bold text-sm px-6 py-3 rounded-r-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ml-0 self-start h-[70px]" type="button"
                        >
                            <img src="../src/img/falabella-logo.svg" alt="" />
                        </button>
                    </div>
                    <div className="relative flex w-full sm:w-7/12 md:w-5/12 px-4 flex-wrap items-center lg:ml-auto">
                        <input type="text" className="bg-white px-2 py-1 h-8 border border-solid text-sm leading-snug text-[#6C7883] shadow-none outline-none focus:outline-none w-full font-normal rounded-full flex-1 border-l-0 placeholder-[#6C7883]" placeholder="Buscar en falabella.com" />
                    </div>
                    <div className="lg:flex flex-grow justify-end" id="example-navbar-warning w-56" >
                        <ul className="flex flex-collg:flex-row list-none items-center">
                            <li className="nav-item">
                                <a className="flex items-center font-bold leading-snug text-white hover:opacity-75">
                                    <span className="text-lg pr-2">Inicia sesión</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="flex items-center font-bold leading-snug text-white hover:opacity-75">
                                    <span className="text-lg pl-2 ">Mis compras </span> <AiOutlineShoppingCart style={{display: 'inline', width: '50px', height: '37px'   }} />
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
                <div className='bg-white h-[50px] w-full flex items-center justify-between'>
                    <div>
                        <img className='w-8 inline' src="../src/img/location.svg" />
                        <p className='text-[#495867] text-lg align-middle pl-0 pr-6 px-6 inline'>Entrega en Ñuñoa</p>
                    </div>
                    <div>
                        <p className='text-[#495867] text-lg align-middle pr-3 px-6 inline'>Nuestras tiendas: </p>
                        <div className='w-36 inline-flex justify-between align-middle'><img className='w-8' src="../src/img/falabella-store-logo.svg" alt="falabella" /><img className='w-8' src="../src/img/sodimac-logo.svg" alt="sodimac" /><img className='w-8' src="../src/img/tottus-logo.svg" alt="tottus" /><img className='w-8' src="../src/img/linio-logo.svg" alt="linio" /></div></div>
                    <div>
                        <span className='text-[#495867] text-sm pr-2'>Vende en Falabella.com</span>
                        <span className='text-[#495867] text-sm pr-2'>Tarjeta CMR</span>
                        <span className='text-[#495867] text-sm pr-2'>Venta telefónica</span>
                        <span className='text-[#495867] text-sm pr-2'>Novios</span>
                        <span className='text-[#495867] text-sm'>Ayuda</span>
                    </div>
                </div>
                <img className='w-full' src="../src/img/img-header.PNG" alt='header-gray' />
            </nav>
        </>
    )
}