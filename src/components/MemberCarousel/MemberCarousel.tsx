import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Typography, SxProps } from '@mui/material';
import { EffectCoverflow, Autoplay } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import './styles.css';

import { CarouselMember } from './interfaces';
import api from '../../api/axios.config';

function MemberImageSource(member: CarouselMember): string {
    let fullName: string = `${member.firstName}-${member.lastName}`;
    fullName = fullName.toLowerCase().replace(" ", "-");
    return `${api.getUri()}/team-images/${fullName}.jpeg`;
}

function MemberLeaderString(member: CarouselMember): string {
    let roleList: string = "";
    roleList = member.leadership.join(", ");
    return roleList;
}

function MemberCarousel(props?: { id: string, sx?: SxProps }) {
    const [members, setMembers] = React.useState<CarouselMember[]>([]);

    React.useEffect(() => {
        api.get('members/leaders/').then((res) => {
            setMembers(() => (res.data));
        });
    }, []);

    return (
        <Box
            {...props}
            sx={{
                ...props?.sx,
                borderRadius: "35px",
                display: "flex",
                flexDirection: 'column',
                gap: "15px",
                width: "100%",
                height: "100%",
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Typography sx={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '30px' }}>Our Team</Typography>
            {
                (members.length < 1) ? <></> :
                    <Swiper
                        modules={[EffectCoverflow, Autoplay]}
                        effect='coverflow'
                        centeredSlides
                        loop
                        slidesPerView={'auto'}
                        spaceBetween={3}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 200,
                            modifier: 1,
                        }
                        }
                        autoplay={{
                            delay: 1200,
                            disableOnInteraction: false,
                        }}
                    >
                        {
                            members.map((member) => (
                                <SwiperSlide>
                                    <Box sx={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
                                        <img src={MemberImageSource(member)} alt="member_image" />
                                        <Box sx={{ 
                                            position: 'absolute', 
                                            bottom: '0px', 
                                            color: 'white', 
                                            width: '100%', 
                                            height: '130px',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            background: "linear-gradient(to top, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0.8) 60%, rgba(0, 0, 0, 0.6) 70%, rgba(0, 0, 0, 0.4) 80%, rgba(0, 0, 0, 0.2) 90%, rgba(0, 0, 0, 0) 100%)",
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'end',
                                            textAlign: 'center',
                                            paddingBottom: '20px',
                                        }}>
                                            <Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{`${member.firstName} ${member.lastName}`}</Typography>
                                            <Typography sx={{ fontSize: '1rem' }}>{MemberLeaderString(member)}</Typography>
                                        </Box>
                                    </Box>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
            }
        </Box>
    );
};




export default MemberCarousel;

