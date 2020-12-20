import golpo, { menuHeaders as golpoMenuHeader} from './golpo'
import TMMenuItems, { TMMenuHeader } from './tm'

const allResturants = [
    {
        nameIdentifier: "Golpo",
        menuHeaders : golpoMenuHeader,
        menus : golpo 
    },
    {
        nameIdentifier: "TiaMaria",
        menuHeaders : TMMenuHeader,
        menus : TMMenuItems

    }]

export default allResturants