const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];
import { useEffect } from "react";
import { UsersContext, smallActions } from "../../context";


const unsplashPhotos = [
    { url: "Osq7UAVxIOI", width: 1080, height: 780 },
    { url: "Dhmn6ete6g8", width: 1080, height: 1620 },
    { url: "RkBTPqPEGDo", width: 1080, height: 720 },
    { url: "Yizrl9N_eDA", width: 1080, height: 721 },
    { url: "KG3TyFi0iTU", width: 1080, height: 1620 },
    { url: "Jztmx9yqjBw", width: 1080, height: 607 },
    { url: "-heLWtuAN3c", width: 1080, height: 608 },
    { url: "xOigCUcFdA8", width: 1080, height: 720 },
    { url: "1azAjl8FTnU", width: 1080, height: 1549 },
    { url: "ALrCdq-ui_Q", width: 1080, height: 720 },
    { url: "twukN12EN7c", width: 1080, height: 694 },
    { url: "9UjEyzA6pP4", width: 1080, height: 1620 },
    { url: "sEXGgun3ZiE", width: 1080, height: 720 },
    { url: "S-cdwrx-YuQ", width: 1080, height: 1440 },
    { url: "q-motCAvPBM", width: 1080, height: 1620 },
    { url: "Xn4L310ztMU", width: 1080, height: 810 },
    { url: "iMchCC-3_fE", width: 1080, height: 610 },
    { url: "X48pUOPKf7A", width: 1080, height: 160 },
    { url: "GbLS6YVXj0U", width: 1080, height: 810 },
    { url: "9CRd1J1rEOM", width: 1080, height: 720 },
    { url: "xKhtkhc9HbQ", width: 1080, height: 1440 },
];
const photos = unsplashPhotos.map((photo) => ({
    src: photo.url,
    width: photo.width,
    height: photo.height,
    images: breakpoints.map((breakpoint) => {
        const height = Math.round((photo.height / photo.width) * breakpoint);
        return {
            src: unsplashLink(photo.url, breakpoint, height),
            width: breakpoint,
            height,
        };
    }),
}));

export default photos;
