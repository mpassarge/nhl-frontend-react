// const breakpointLarge = '@media screen and (min-width: 760px)';
// const breakpointSmall = '@media screen and (max-width: 300px)';

// const breakpoints = {
//     breakpointLarge,
//     breakpointSmall
// };
// export default breakpoints;

const breakpoints_up = [
        {medium: "40em"},// 640px
        {large: "64em"}, // 1024px
        {xlarge: "85.5em"}, // 1400px
];

const breakpoints_down = [
    {small: "39.9375em"},// 639px
    {medium: "63.9375em"}, // 1023px
    {large: "87.4375em.5em"}, // 1399px
];

const breakpointUp = (size) => {
    return `@media screen and (min-width: ${breakpoints_up.find(s => s[size])[size]})`
};

const breakpointDown = (size) => {
    return `@media screen and (max-width: ${breakpoints_down.find(s => s[size])[size]})`
};


export {
    breakpointUp,
    breakpointDown
}