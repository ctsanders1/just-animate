export const slideOutLeft: ja.IAnimationMixin = {
    css: [
        {
            visibility: 'visible',
            transform: 'translate3d(0, 0, 0)'
        },
        {
            visibility: 'hidden',
            transform: 'translate3d(-100%, 0, 0)'
        }
    ],

    to: '1s'
    ,
    name: 'slideOutLeft'
};
