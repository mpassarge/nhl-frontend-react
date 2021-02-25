const breakpoints = ["small", "medium", "mediumLarge", "large", "xlarge"]

const breakpoints_up = [
        {medium: "40em"},// 640px
        {mediumLarge: "52em"}, // 832px
        {large: "64em"}, // 1024px
        {xlarge: "85.5em"}, // 1400px
];

const breakpoints_down = [
    {small: "39.9375em"},// 639px
    {medium: "63.9375em"}, // 1023px
    {large: "87.4375em.5em"}, // 1399px
];

const breakpointUp = (size) => {
    if(!size.includes('em') && breakpoints.find(e => e === size) === undefined) {
        throw new Error('Unknown breakpoint');
    }

    if(size.includes('em')) {
        return `@media screen and (min-width: ${size})`
    } else {
        return `@media screen and (min-width: ${breakpoints_up.find(s => s[size])[size]})`
    }
};

const breakpointDown = (size) => {
    if(!size.includes('em') && !breakpoints.find(size) === undefined) {
        throw new Error('Unknown breakpoint');
    }

    if(size.includes('em')) {
        return `@media screen and (max-width: ${size})`
    } else {
        return `@media screen and (max-width: ${breakpoints_down.find(s => s[size])[size]})`
    }
};


export {
    breakpointUp,
    breakpointDown
}