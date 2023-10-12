import { styled } from '@mui/material/styles';
import MuiSelect from '@mui/material/Select';

const LanguageSelector = styled(MuiSelect)({
    maxHeight: '31px!important',
    minHeight: '31px!important',
    borderWidth: '1px!important',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    margin: '0px!important',
    background: 'transparent!important',
    padding: '0 10px!important',
    maxWidth: '167px',
    minWidth: '167px',
    width: '207px',
    borderRadius: '3px',
    border: '1px solid white!important',
    color: '#ffffff',
    textDecoration: 'none!important',
    ['@media (max-width:763px)']: {
        padding: '0!important',
        maxHeight: '24px!important',
        minHeight: '24px!important',
        width: '60px!important',
        minWidth: '30px!important',
        '& .MuiSelect-select': {
            height: 'unset!important',
            minHeight: '24px!important',
            width: '60px!important',
            padding: '0!important',
            background: 'none!important',
            maxHeight: '22px!important',
            position: 'relative',
            fontSize: 0,
            // visibility: "hidden",
            '& p': {
                display: 'none',
            },
        },
    },
    '& .MuiSelect-select': {
        height: 'unset!important',
        minHeight: '31px!important',
        padding: '0 8px!important',
        '-webkit-text-fill-color': 'white!important',
        border: 'none!important',
        fontSize: '20px',
        fontWeight: '500',
        maxHeight: '31px!important',
        textAlign: 'start',
        textDecoration: 'none!important',
        color: '#fffff',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        borderRadius: '3px',
    },
    '& .MuiSvgIcon-root': {
        color: '#ffffff!important',
    },
    '&::before': {
        display: 'none!important',
    },
    '&::after': {
        display: 'none!important',
    },
});
export default LanguageSelector;