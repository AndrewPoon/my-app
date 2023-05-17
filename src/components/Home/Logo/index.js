import './index.scss';
import Logo1 from '../../../assets/images/Logo1.png'
import { useEffect,useRef } from 'react';
import { DrawSVGPlugin } from 'gsap-trial/DrawSVGPlugin';
import gsap from 'gsap-trial'
const Logo=()=>{
    const bgRef=useRef();
    const outlineLogoRef=useRef();
    const solidLogoRef=useRef();
    useEffect(()=>{
        gsap.registerPlugin(DrawSVGPlugin)
        gsap.timeline().to(bgRef.current,{
            duration:1,
            opacity:1
        })
        .from(outlineLogoRef.current,{
            drawSVG:0,
            duration:8
        })
        gsap.fromTo(solidLogoRef.current,{opacity:0,},{opacity:1,delay:5.5,duration:2})
    },[])
    return (
        <div className='logo-container' ref={bgRef}>
            <img ref={solidLogoRef}className='solid-logo' src={Logo1} alt="A"/>
            <svg width="559pt"
            height="897pt"
            version="1.0"
            viewBox="0 0 559 897"
            xmlns="http://www.w3.org/2000/svg">
                <g className="svg-container"
                transform='translate(6 415) scale(0.137 -0.137)'
                fill='none'>
                    <path
                    ref={outlineLogoRef}
                     d="M2211 2449 c-566 -41 -1032 -240 -1171 -500 -46 -87 -53 -183 -18
-249 50 -93 184 -145 314 -121 32 6 59 11 61 11 2 0 -8 17 -21 38 -37 55 -50
129 -36 199 53 259 364 467 780 523 129 18 378 15 494 -5 197 -34 329 -91 432
-187 82 -77 108 -136 107 -239 -2 -270 -199 -425 -636 -499 -139 -23 -177 -25
-177 -7 0 149 50 484 94 637 14 46 23 87 20 90 -3 3 -47 5 -97 4 -278 -2 -453
-161 -731 -660 l-89 -159 -141 -23 c-546 -86 -876 -263 -912 -489 -9 -61 3
-109 38 -149 108 -123 357 -120 569 6 134 79 303 267 445 493 27 43 55 82 64
87 8 4 60 11 115 14 55 4 118 9 141 12 l40 6 0 -189 c1 -245 24 -355 101 -466
54 -77 158 -112 264 -87 56 13 212 88 206 99 -41 76 -70 155 -86 236 -18 90
-41 308 -41 391 0 37 -26 31 220 54 347 34 620 116 776 234 223 167 244 477
45 658 -214 193 -624 276 -1170 237z m-131 -472 c0 -1 -13 -36 -29 -77 -43
-112 -81 -249 -111 -400 l-27 -135 -39 -6 c-22 -4 -83 -10 -136 -14 l-98 -7
69 124 c37 67 83 150 101 183 87 156 226 335 259 335 6 0 11 -1 11 -3z m-600
-746 c0 -15 -90 -133 -149 -194 -74 -78 -171 -148 -266 -193 -98 -47 -207 -58
-265 -26 -41 23 -77 95 -66 135 28 112 223 199 585 262 159 28 161 28 161 16z"/>
                </g>

            </svg>
        </div>
    )
}

export default Logo